// hooks/useCourseSections.ts
import { useState, useEffect, useCallback, useMemo } from "react";
import { IUnit } from "../types/course";
import { useSelect } from "@wordpress/data";
import { useTypedSelect } from "../store";
import { State } from "../store/types";

interface Section {
  id: number;
  key: number;
  title: string;
  units: IUnit[];
}

export const useCourseSections = () => {
  const courseId = useTypedSelect((select) => select.getCourseId(), []);

  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const { items, currentUnitId } = useTypedSelect(
    (select) => {
      if (courseId) {
        return {
          items: select.getCourseInfo(courseId)?.courseitems || [],
          currentUnitId: select.getCurrentUnitId(),
        };
      }
      return { items: [], currentUnitId: null };
    },
    [courseId]
  );

  // Organize sections and find initial expanded section
  const { sections, initialExpandedSection } = useMemo(() => {
    const organizedSections: Section[] = [];
    let currentSection: Section | null = null as Section | null;
    let sectionWithCurrentUnit = -1;

    items?.forEach((item: IUnit) => {
      if (item.type === "section") {
        if (currentSection) {
          organizedSections.push(currentSection);
        }
        currentSection = {
          id: item.id,
          key: item.key,
          title: item.title,
          units: [],
        };
      } else if (item.type === "unit" && currentSection) {
        currentSection.units.push(item);
        // Check if this unit is the current one
        if (item.id === currentUnitId) {
          sectionWithCurrentUnit = organizedSections.length;
        }
      }
    });

    // Add the last section
    if (currentSection) {
      organizedSections.push(currentSection);
      // Check last section for current unit if not found yet
      if (
        sectionWithCurrentUnit === -1 &&
        currentSection.units.some((unit) => unit.id === currentUnitId)
      ) {
        sectionWithCurrentUnit = organizedSections.length - 1;
      }
    }

    return {
      sections: organizedSections,
      initialExpandedSection: sectionWithCurrentUnit,
    };
  }, [items, currentUnitId]);

  // Set initial expanded section when sections are first loaded
  useEffect(() => {
    if (initialExpandedSection !== -1) {
      setExpandedSections((prev) => {
        if (!prev.includes(initialExpandedSection)) {
          return [...prev, initialExpandedSection];
        }
        return prev;
      });
    }
  }, [initialExpandedSection]);

  // Update expanded sections when current unit changes
  useEffect(() => {
    if (currentUnitId) {
      const sectionIndex = sections.findIndex((section) =>
        section.units.some((unit) => unit.id === currentUnitId)
      );

      if (sectionIndex !== -1 && !expandedSections.includes(sectionIndex)) {
        setExpandedSections((prev) => [...prev, sectionIndex]);
      }
    }
  }, [currentUnitId, sections]);

  const toggleSection = useCallback((sectionIndex: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionIndex)
        ? prev.filter((index) => index !== sectionIndex)
        : [...prev, sectionIndex]
    );
  }, []);

  const isSectionExpanded = useCallback(
    (sectionIndex: number) => {
      return expandedSections.includes(sectionIndex);
    },
    [expandedSections]
  );

  const getSectionStats = useCallback((section: Section) => {
    const totalUnits = section.units.length;
    const completedUnits = section.units.filter(
      (unit) => unit.status === 1
    ).length;
    const totalDuration = section.units.reduce(
      (acc, unit) => acc + unit.duration,
      0
    );

    return {
      totalUnits,
      completedUnits,
      totalDuration,
      isComplete: totalUnits === completedUnits && totalUnits > 0,
    };
  }, []);

  return {
    sections,
    expandedSections,
    toggleSection,
    isSectionExpanded,
    getSectionStats,
  };
};
