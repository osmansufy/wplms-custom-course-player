/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/RootContainer.tsx":
/*!******************************************!*\
  !*** ./src/components/RootContainer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_ContentArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course/ContentArea */ "./src/components/course/ContentArea.tsx");
/* harmony import */ var _course_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course/sidebar */ "./src/components/course/sidebar/index.tsx");
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopBar */ "./src/components/TopBar/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const RootContainer = ({
  courseId
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  // Get dispatch actions
  const {
    fetchCourseData,
    nextUnit,
    prevUnit
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('custom-course-player');

  // Get state from Redux store
  const {
    courseInfo,
    loading,
    error,
    currentUnitId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    courseInfo: select('custom-course-player')?.getCourseInfo() || null,
    loading: select('custom-course-player')?.isLoadingUserInfo() || false,
    error: select('custom-course-player')?.getError() || null,
    currentUnitId: select('custom-course-player')?.getCurrentUnitId() || null
  }), []);

  // Fetch course data on component mount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (courseId) {
      fetchCourseData(courseId);
    }
  }, [courseId]);

  // Set initial unit when course data is loaded

  const handlePrevious = () => {
    prevUnit();
  };
  const handleNext = () => {
    nextUnit();
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "h-screen flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"
      })
    });
  }
  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "h-screen flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "bg-red-50 p-4 rounded-lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "text-red-600",
          children: error
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          onClick: () => courseId && fetchCourseData(courseId),
          className: "mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
          children: "Retry"
        })]
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "flex flex-col h-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TopBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onToggleSidebar: toggleSidebar,
      isSidebarOpen: isSidebarOpen
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-1 overflow-hidden pt-16",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_course_ContentArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
        courseId: courseId,
        currentUnitId: currentUnitId,
        isSidebarOpen: isSidebarOpen,
        onToggleSidebar: toggleSidebar,
        onPrevious: handlePrevious,
        onNext: handleNext
      }), courseInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_course_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isOpen: isSidebarOpen,
        onToggle: toggleSidebar
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootContainer);

/***/ }),

/***/ "./src/components/TopBar/ProgressCircle.tsx":
/*!**************************************************!*\
  !*** ./src/components/TopBar/ProgressCircle.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ProgressCircle = ({
  progress,
  size = 42,
  // default size
  strokeWidth = 3,
  circleColor = 'text-gray-700',
  progressColor = 'text-green-500'
}) => {
  console.log({
    progress
  });
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${progress / 100 * circumference}, ${circumference}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "flex items-center gap-2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        className: "transform -rotate-90",
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: center,
          cy: center,
          r: radius,
          stroke: "currentColor",
          strokeWidth: strokeWidth,
          fill: "none",
          className: circleColor
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: center,
          cy: center,
          r: radius,
          stroke: "currentColor",
          strokeWidth: strokeWidth,
          fill: "none",
          className: progressColor,
          strokeDasharray: strokeDasharray,
          strokeLinecap: "round"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        className: "absolute inset-0 flex items-center justify-center text-xs font-medium",
        children: [progress, "%"]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressCircle);

/***/ }),

/***/ "./src/components/TopBar/ProgressDropdown.tsx":
/*!****************************************************!*\
  !*** ./src/components/TopBar/ProgressDropdown.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


// ProgressDropdown Component
const ProgressDropdown = ({
  isOpen,
  onToggle,
  completedUnits,
  totalUnits
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
      onClick: onToggle,
      className: "flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded-md transition-colors",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        children: "Progress"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        className: `w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`,
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M19 9l-7 7-7-7"
        })
      })]
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "p-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
              className: "text-sm font-medium text-gray-900",
              children: "Course Progress"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              className: "text-sm text-gray-600",
              children: [completedUnits, " of ", totalUnits, " units completed"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "w-full bg-gray-200 rounded-full h-2.5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "bg-green-500 h-2.5 rounded-full transition-all duration-300",
              style: {
                width: `${completedUnits / totalUnits * 100}%`
              }
            })
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressDropdown);

/***/ }),

/***/ "./src/components/TopBar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/TopBar/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _review_ReviewModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../review/ReviewModal */ "./src/components/review/ReviewModal.tsx");
/* harmony import */ var _ProgressCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressCircle */ "./src/components/TopBar/ProgressCircle.tsx");
/* harmony import */ var _ProgressDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressDropdown */ "./src/components/TopBar/ProgressDropdown.tsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function TopBar({
  onToggleSidebar
}) {
  var _completedUnits$lengt, _totalUnits$length;
  const [isProgressOpen, setIsProgressOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    courseInfo,
    totalUnits,
    completedUnits,
    review,
    reviewLoading,
    progress,
    reviewModalOpen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    courseInfo: select('custom-course-player').getCourseInfo(),
    totalUnits: select('custom-course-player').getAllUnits(),
    completedUnits: select('custom-course-player').getCompletedUnits(),
    review: select('custom-course-player').getCourseReview(),
    reviewLoading: select('custom-course-player').getReviewLoading(),
    reviewError: select('custom-course-player').getReviewError(),
    reviewModalOpen: select('custom-course-player').getReviewModalOpen(),
    progress: select('custom-course-player').getProgress()
  }), []);

  // dispatch
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const setReviewModalOpen = open => {
    dispatch('custom-course-player').setReviewModalOpen(open);
  };
  // Fetch review
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (courseInfo?.course_id) {
      console.log('Fetching review', courseInfo.course_id);
      dispatch('custom-course-player').fetchCourseReview(courseInfo.course_id);
    }
  }, [courseInfo?.course_id]);
  const hasReview = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    return review?.comment_ID !== undefined;
  }, [review]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "fixed top-0 left-0 right-0 bg-gray-800 text-white z-50",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "h-16 px-4 flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "flex items-center gap-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
            className: "text-xl font-bold truncate max-w-md text-secondary-50",
            children: courseInfo?.course_title || ''
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ProgressCircle__WEBPACK_IMPORTED_MODULE_3__["default"], {
            progress: progress
          }), !hasReview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            onClick: () => setReviewModalOpen(true),
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700  transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-2 focus:ring-offset-gray-800",
            disabled: reviewLoading || false,
            children: reviewLoading ? 'Loading...' : 'Leave a Review'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ProgressDropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
            isOpen: isProgressOpen,
            onToggle: () => setIsProgressOpen(!isProgressOpen),
            completedUnits: (_completedUnits$lengt = completedUnits?.length) !== null && _completedUnits$lengt !== void 0 ? _completedUnits$lengt : 0,
            totalUnits: (_totalUnits$length = totalUnits?.length) !== null && _totalUnits$length !== void 0 ? _totalUnits$length : 0
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            onClick: onToggleSidebar,
            className: "p-2 hover:bg-gray-700 rounded-md transition-colors",
            "aria-label": "Toggle sidebar",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 6h16M4 12h16M4 18h16"
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "h-1 bg-gray-700",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "h-full bg-green-500 transition-all duration-500",
          style: {
            width: `${progress}%`
          }
        })
      })]
    }), reviewModalOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_review_ReviewModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isOpen: Boolean(!reviewLoading && reviewModalOpen),
      onClose: () => setReviewModalOpen(false),
      courseId: courseInfo?.course_id,
      courseName: courseInfo?.course_title,
      progress: progress,
      onReviewSuccess: () => {}
    }), isProgressOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "fixed inset-0 z-20",
      onClick: () => setIsProgressOpen(false)
    })]
  });
}

/***/ }),

/***/ "./src/components/course/ContentArea.tsx":
/*!***********************************************!*\
  !*** ./src/components/course/ContentArea.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useUnitContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useUnitContent */ "./src/hooks/useUnitContent.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ContentArea = ({
  currentUnitId,
  courseId,
  isSidebarOpen,
  onToggleSidebar,
  onPrevious,
  onNext
}) => {
  const {
    unitContent,
    loading,
    error
  } = (0,_hooks_useUnitContent__WEBPACK_IMPORTED_MODULE_1__.useUnitContent)(courseId, currentUnitId);
  const [isHovering, setIsHovering] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const renderNavigationButtons = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      className: `fixed top-1/2 left-4 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 transition-opacity duration-300 ${isHovering ? 'opacity-50 hover:opacity-100' : 'opacity-0'}`,
      onClick: onPrevious,
      disabled: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M15 19l-7-7 7-7"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      className: `fixed top-1/2 right-4 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 transition-opacity duration-300 ${isSidebarOpen ? 'mr-[23rem]' : ''} ${isHovering ? 'opacity-50 hover:opacity-100' : 'opacity-0'}`,
      onClick: onNext,
      disabled: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M9 5l7 7-7 7"
        })
      })
    })]
  });
  const renderContent = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col items-center justify-center min-h-[400px] space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-gray-600",
          children: "Loading content..."
        })]
      });
    }
    if (error) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "flex flex-col items-center justify-center min-h-[400px] space-y-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "bg-red-50 p-6 rounded-lg text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-red-600 mb-4",
            children: error
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: () => window.location.reload(),
            className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
            children: "Retry"
          })]
        })
      });
    }
    if (!unitContent) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "flex items-center justify-center min-h-[400px]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-gray-600",
          children: "No content available"
        })
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "custom_course_content max-h-[600px] relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: `transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`,
        dangerouslySetInnerHTML: {
          __html: unitContent.content
        }
      }), renderNavigationButtons()]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: `flex-1 p-6 overflow-y-auto transition-all duration-300 relative ${isSidebarOpen ? 'mr-80' : ''}`,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "mb-6",
      children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "h-8 bg-gray-200 rounded animate-pulse w-2/3"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "text-3xl font-bold mb-1",
        children: unitContent?.title
      })
    }), renderContent()]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentArea);

/***/ }),

/***/ "./src/components/course/sidebar/CourseSections.tsx":
/*!**********************************************************!*\
  !*** ./src/components/course/sidebar/CourseSections.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useCourseSections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useCourseSections */ "./src/hooks/useCourseSections.ts");
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/utility */ "./src/utilities/utility.ts");
/* harmony import */ var _UnitItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnitItem */ "./src/components/course/sidebar/UnitItem.tsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
// components/CourseSections.tsx







const REVIEW_MILESTONES = [15, 75, 100];
const CourseSections = ({
  items,
  currentUnitId
}) => {
  const [lastShownMilestone, setLastShownMilestone] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const {
    sections,
    expandedSections,
    toggleSection,
    getSectionStats
  } = (0,_hooks_useCourseSections__WEBPACK_IMPORTED_MODULE_1__.useCourseSections)(items, currentUnitId);
  const {
    progress,
    courseId,
    isCompleted,
    hasReview,
    reviewLoading,
    completionMessage
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => ({
    progress: select('custom-course-player').getProgress(),
    courseId: select('custom-course-player').getCourseId(),
    isCompleted: select('custom-course-player').isCourseCompleted(),
    hasReview: select('custom-course-player').getCourseReview()?.comment_ID !== undefined,
    reviewLoading: select('custom-course-player').getReviewLoading(),
    completionMessage: select('custom-course-player').getCompletionMessage()
  }), []);
  const {
    setReviewModalOpen,
    finishCourse
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('custom-course-player');
  const onHandleReviewModalOpen = () => {
    if (hasReview || reviewLoading) {
      return;
    }
    const milestone = REVIEW_MILESTONES.find(milestone => progress >= milestone && lastShownMilestone < milestone);
    if (milestone) {
      setReviewModalOpen(true);
      setLastShownMilestone(milestone);
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    console.log({
      hasReview,
      reviewLoading
    });
    if (!hasReview && !reviewLoading) {
      console.log('review modal open');
      onHandleReviewModalOpen();
    }
  }, [progress, hasReview, reviewLoading]);
  const handleFinishCourse = async () => {
    if (courseId) {
      await finishCourse(courseId);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "space-y-2",
    children: [!isCompleted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "p-4 bg-green-50 rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-sm text-green-800 mb-2",
        children: completionMessage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        onClick: handleFinishCourse,
        className: "w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors",
        children: "Complete Course"
      })]
    }), isCompleted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "p-4 bg-green-100 rounded-lg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-sm text-green-800",
        children: "\uD83C\uDF89 Congratulations! You've completed this course."
      })
    }), sections.map((section, index) => {
      const stats = getSectionStats(section);
      const isExpanded = expandedSections.includes(index);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: `border rounded-lg transition-colors border-gray-200`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          className: `w-full flex items-center justify-between p-4 text-left
                         transition-colors rounded-t-lg
                         ${isExpanded ? 'bg-gray-50' : 'hover:bg-gray-50'}
                         ${stats.isComplete ? 'bg-green-50 hover:bg-green-100' : ''}`,
          onClick: () => toggleSection(index),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex-grow",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "flex items-center gap-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                className: "font-semibold text-gray-900 text-[1rem] ",
                children: section.title
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              className: "text-sm text-gray-500",
              children: [stats.completedUnits, "/", stats.totalUnits, " lessons \u2022 ", (0,_utilities_utility__WEBPACK_IMPORTED_MODULE_2__.formatDuration)(stats.totalDuration)]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
            className: `w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M19 9l-7 7-7-7"
            })
          })]
        }), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "border-t border-gray-200",
          children: section.units.map(unit => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UnitItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
            unit: unit,
            currentUnitId: currentUnitId
          }, unit.id))
        })]
      }, section.key);
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseSections);

/***/ }),

/***/ "./src/components/course/sidebar/SidebarHeader.tsx":
/*!*********************************************************!*\
  !*** ./src/components/course/sidebar/SidebarHeader.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SidebarHeader = ({
  title,
  onToggle
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  className: "flex justify-between items-center mb-4",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
    className: "text-xl font-bold text-gray-800",
    children: title
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    className: "text-gray-500 hover:text-gray-700",
    onClick: onToggle,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      className: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M6 18L18 6M6 6l12 12"
      })
    })
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarHeader);

/***/ }),

/***/ "./src/components/course/sidebar/SidebarProgress.tsx":
/*!***********************************************************!*\
  !*** ./src/components/course/sidebar/SidebarProgress.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SidebarProgress = ({
  totalLectures,
  totalDuration,
  completedLectures
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  className: "mb-4",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "text-sm text-gray-600",
    children: [totalLectures, " lectures \u2022 ", totalDuration, " total length"]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "mt-2 h-1 bg-gray-200 rounded-full",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "h-full bg-blue-500 rounded-full",
      style: {
        width: `${completedLectures / totalLectures * 100}%`
      }
    })
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarProgress);

/***/ }),

/***/ "./src/components/course/sidebar/UnitItem.tsx":
/*!****************************************************!*\
  !*** ./src/components/course/sidebar/UnitItem.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/utility */ "./src/utilities/utility.ts");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const UnitItem = ({
  unit,
  currentUnitId
}) => {
  var _unit$status;
  const {
    markUnitComplete,
    setCurrentUnit
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('custom-course-player');
  const [isUnitComplete, setIsUnitComplete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_unit$status = unit?.status) !== null && _unit$status !== void 0 ? _unit$status : 0);
  const {
    courseId,
    courseInfo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    courseId: select('custom-course-player').getCourseId(),
    courseInfo: select('custom-course-player').getCourseInfo()
  }), []);
  const handleSelectUnit = id => {
    setCurrentUnit(id);
  };
  const {
    completedDuration,
    courseTotalDuration
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    completedDuration: select('custom-course-player').getCompletedDuration(),
    courseTotalDuration: select('custom-course-player').getCourseTotalDuration()
  }), []);
  const unitCompletedProgress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (unit.duration && courseTotalDuration && completedDuration !== null) {
      return Math.round((completedDuration + unit.duration) / courseTotalDuration * 100);
    }
    return 0;
  }, [completedDuration, unit.duration, courseTotalDuration]);
  const onHandleCompleteUnit = async unitId => {
    try {
      await markUnitComplete(courseId, unitId, unitCompletedProgress());
      setIsUnitComplete(1);
    } catch (error) {
      console.log(error);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: `flex items-center p-4 cursor-pointer transition-colors
                               ${currentUnitId === unit.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
                               ${unit.status === 1 ? 'opacity-75' : ''}`,
    onClick: () => handleSelectUnit(unit.id),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "flex-shrink-0 mr-3",
      children: isUnitComplete === 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
        className: "w-5 h-5 text-green-500",
        fill: "currentColor",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          fillRule: "evenodd",
          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
          clipRule: "evenodd"
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer",
        onClick: e => {
          e.stopPropagation();
          onHandleCompleteUnit(unit.id);
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex-grow",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
        className: `text-sm ${currentUnitId === unit.id ? 'font-medium' : ''}`,
        children: unit.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex items-center text-xs text-gray-500 mt-1",
        children: [unit.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: `${unit.icon} mr-1`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: (0,_utilities_utility__WEBPACK_IMPORTED_MODULE_2__.formatDuration)(unit.duration)
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnitItem);

/***/ }),

/***/ "./src/components/course/sidebar/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/course/sidebar/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CourseSections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseSections */ "./src/components/course/sidebar/CourseSections.tsx");
/* harmony import */ var _SidebarHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarHeader */ "./src/components/course/sidebar/SidebarHeader.tsx");
/* harmony import */ var _SidebarProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarProgress */ "./src/components/course/sidebar/SidebarProgress.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/components/course/sidebar/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const Sidebar = ({
  isOpen,
  onToggle
}) => {
  const {
    courseInfo: course,
    currentUnitId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    courseInfo: select('custom-course-player').getCourseInfo(),
    currentUnitId: select('custom-course-player')?.getCurrentUnitId()
  }), []);
  if (!course) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: `fixed top-0 right-0 w-[24rem] bg-white border-l border-gray-200 h-full transform 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-10`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "h-full overflow-y-auto pt-16",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "p-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SidebarHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "Course content",
          onToggle: onToggle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SidebarProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
          totalLectures: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.calculateTotalLectures)(course.courseitems),
          totalDuration: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.calculateTotalDuration)(course.courseitems),
          completedLectures: course.courseitems.filter(item => item.status === 1).length
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CourseSections__WEBPACK_IMPORTED_MODULE_2__["default"], {
          items: course.courseitems,
          currentUnitId: currentUnitId
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/components/course/sidebar/utils.ts":
/*!************************************************!*\
  !*** ./src/components/course/sidebar/utils.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateTotalDuration: () => (/* binding */ calculateTotalDuration),
/* harmony export */   calculateTotalLectures: () => (/* binding */ calculateTotalLectures)
/* harmony export */ });
const calculateTotalLectures = items => {
  return items.filter(item => item.type !== "section").length;
};
const calculateTotalDuration = items => {
  const totalSeconds = items.reduce((acc, item) => acc + (item.duration || 0), 0);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  return `${hours}hr ${minutes}min`;
};

/***/ }),

/***/ "./src/components/icons/StartIcon.tsx":
/*!********************************************!*\
  !*** ./src/components/icons/StartIcon.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarIcon: () => (/* binding */ StarIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const StarIcon = ({
  filled
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: `w-8 h-8 ${filled ? 'text-yellow-400' : 'text-gray-300'}`,
  fill: filled ? 'currentColor' : 'none',
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  strokeWidth: "1.5",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  })
});

/***/ }),

/***/ "./src/components/review/RatingStars.tsx":
/*!***********************************************!*\
  !*** ./src/components/review/RatingStars.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingStars: () => (/* binding */ RatingStars)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_StartIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/StartIcon */ "./src/components/icons/StartIcon.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const RatingStars = ({
  rating,
  onRatingChange
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: "flex items-center gap-1 mb-6",
  children: [1, 2, 3, 4, 5].map(value => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    onClick: () => onRatingChange(value),
    className: "bg-transparent transition-transform hover:scale-110",
    "aria-label": `Rate ${value} stars`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons_StartIcon__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
      filled: value <= rating
    })
  }, value))
});

/***/ }),

/***/ "./src/components/review/ReviewForm.tsx":
/*!**********************************************!*\
  !*** ./src/components/review/ReviewForm.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewForm: () => (/* binding */ ReviewForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RatingStars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RatingStars */ "./src/components/review/RatingStars.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ReviewForm = ({
  rating,
  review,
  error,
  isLoading,
  onRatingChange,
  onReviewChange,
  onSubmit
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_RatingStars__WEBPACK_IMPORTED_MODULE_1__.RatingStars, {
    rating: rating,
    onRatingChange: onRatingChange
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
    value: review,
    onChange: e => onReviewChange(e.target.value),
    placeholder: "Share your thoughts about this course...",
    className: "w-full h-32 p-3 border rounded-md mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none",
    maxLength: 500,
    disabled: isLoading
  }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "mb-4 text-red-600 p-3 bg-red-50 rounded-md",
    children: error
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex justify-between items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      className: "text-sm text-gray-500",
      children: [500 - review.length, " characters remaining"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      onClick: onSubmit,
      className: "px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700  font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
      disabled: review.length < 10 || isLoading,
      children: isLoading ? 'Submitting...' : 'Submit Review'
    })]
  })]
});

/***/ }),

/***/ "./src/components/review/ReviewModal.tsx":
/*!***********************************************!*\
  !*** ./src/components/review/ReviewModal.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewForm */ "./src/components/review/ReviewForm.tsx");
/* harmony import */ var _SuccessMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuccessMessage */ "./src/components/review/SuccessMessage.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function ReviewModal({
  isOpen,
  courseId,
  onClose,
  progress,
  courseName = "Course",
  onReviewSuccess
}) {
  const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5);
  const [review, setReview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    userInfo,
    currentReview,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    userInfo: select('custom-course-player').getUserInfo(),
    currentReview: select('custom-course-player').getCourseReview(),
    isLoading: select('custom-course-player').isLoading()
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentReview) {
      setRating(currentReview.rating || 5);
      setReview(currentReview.content || '');
    }
  }, [currentReview]);
  const handleSubmit = async () => {
    if (review.length < 10) {
      setError('Please write a more detailed review (minimum 10 characters)');
      return;
    }
    try {
      await dispatch('custom-course-player').submitCourseReview({
        rating,
        review,
        courseId: courseId || 0
      });
      setSuccess(true);
      setTimeout(() => {
        onClose();
        onReviewSuccess?.();
      }, 2000);
    } catch (err) {
      setError('Failed to submit review. Please try again later.');
    }
  };
  console.log('isOpen', isOpen);
  if (!isOpen) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
    onClick: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "bg-white rounded-lg max-w-lg w-full p-6 shadow-xl",
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex justify-between items-start mb-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-2xl font-bold text-gray-800",
            children: "Share Your Experience"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-gray-600 mt-2",
            children: courseName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          onClick: onClose,
          className: "text-gray-400 hover:text-gray-600 transition-colors",
          "aria-label": "Close modal",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M6 18L18 6M6 6l12 12"
            })
          })
        })]
      }), userInfo?.avatar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex items-center gap-3 mb-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: userInfo.avatar,
          alt: userInfo.name || 'User avatar',
          className: "w-10 h-10 rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "font-medium text-gray-700",
          children: userInfo.name || 'Anonymous'
        })]
      }), success ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SuccessMessage__WEBPACK_IMPORTED_MODULE_3__.SuccessMessage, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ReviewForm__WEBPACK_IMPORTED_MODULE_2__.ReviewForm, {
        rating: rating,
        review: review,
        error: error,
        onRatingChange: setRating,
        onReviewChange: setReview,
        onSubmit: handleSubmit,
        isLoading: isLoading
      })]
    })
  });
}

/***/ }),

/***/ "./src/components/review/SuccessMessage.tsx":
/*!**************************************************!*\
  !*** ./src/components/review/SuccessMessage.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessMessage: () => (/* binding */ SuccessMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SuccessMessage = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  className: "text-center py-8",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "mb-4 text-green-500",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      className: "w-16 h-16 mx-auto",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      })
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
    className: "text-xl font-semibold text-gray-800 mb-2",
    children: "Thank you for your review!"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    className: "text-gray-600",
    children: "Your feedback helps improve the course for future students."
  })]
});

/***/ }),

/***/ "./src/hooks/useCourseSections.ts":
/*!****************************************!*\
  !*** ./src/hooks/useCourseSections.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCourseSections: () => (/* binding */ useCourseSections)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// hooks/useCourseSections.ts

const useCourseSections = (items, currentUnitId) => {
  const [expandedSections, setExpandedSections] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // Organize sections and find initial expanded section
  const {
    sections,
    initialExpandedSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const organizedSections = [];
    let currentSection = null;
    let sectionWithCurrentUnit = -1;
    items.forEach(item => {
      if (item.type === "section") {
        if (currentSection) {
          organizedSections.push(currentSection);
        }
        currentSection = {
          id: item.id,
          key: item.key,
          title: item.title,
          units: []
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
      if (sectionWithCurrentUnit === -1 && currentSection.units.some(unit => unit.id === currentUnitId)) {
        sectionWithCurrentUnit = organizedSections.length - 1;
      }
    }
    return {
      sections: organizedSections,
      initialExpandedSection: sectionWithCurrentUnit
    };
  }, [items, currentUnitId]);

  // Set initial expanded section when sections are first loaded
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (initialExpandedSection !== -1) {
      setExpandedSections(prev => {
        if (!prev.includes(initialExpandedSection)) {
          return [...prev, initialExpandedSection];
        }
        return prev;
      });
    }
  }, [initialExpandedSection]);

  // Update expanded sections when current unit changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentUnitId) {
      const sectionIndex = sections.findIndex(section => section.units.some(unit => unit.id === currentUnitId));
      if (sectionIndex !== -1 && !expandedSections.includes(sectionIndex)) {
        setExpandedSections(prev => [...prev, sectionIndex]);
      }
    }
  }, [currentUnitId, sections]);
  const toggleSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(sectionIndex => {
    setExpandedSections(prev => prev.includes(sectionIndex) ? prev.filter(index => index !== sectionIndex) : [...prev, sectionIndex]);
  }, []);
  const isSectionExpanded = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(sectionIndex => {
    return expandedSections.includes(sectionIndex);
  }, [expandedSections]);
  const getSectionStats = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(section => {
    const totalUnits = section.units.length;
    const completedUnits = section.units.filter(unit => unit.status === 1).length;
    const totalDuration = section.units.reduce((acc, unit) => acc + unit.duration, 0);
    return {
      totalUnits,
      completedUnits,
      totalDuration,
      isComplete: totalUnits === completedUnits && totalUnits > 0
    };
  }, []);
  return {
    sections,
    expandedSections,
    toggleSection,
    isSectionExpanded,
    getSectionStats
  };
};

/***/ }),

/***/ "./src/hooks/useUnitContent.ts":
/*!*************************************!*\
  !*** ./src/hooks/useUnitContent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUnitContent: () => (/* binding */ useUnitContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/apiCall */ "./src/utilities/apiCall.ts");


const userAuthToken = window.wplmsCustomCoursePlayer.token;
const useUnitContent = (courseId, unitId) => {
  const [unitContent, setUnitContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchContent = async () => {
      if (!unitId) {
        setUnitContent(null);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const data = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.fetchUnitContent)({
          courseId,
          unitId,
          token: userAuthToken
        });
        setUnitContent(data !== null && data !== void 0 ? data : null);
        setError(null);
      } catch (err) {
        setError("Failed to fetch unit content");
        setUnitContent(null);
      } finally {
        setLoading(false);
      }
    };
    if (userAuthToken) {
      fetchContent();
    }
  }, [courseId, unitId, userAuthToken]);
  return {
    unitContent,
    loading,
    error
  };
};

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actions: () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/store/const.ts");

const actions = {
  setCourseId(courseId) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_ID,
      courseId
    };
  },
  setProgress(progress) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_PROGRESS,
      progress
    };
  },
  setCurrentUnit(unitId) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_CURRENT_UNIT,
      unitId
    };
  },
  setIsLoading(isLoading) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_IS_LOADING,
      isLoading
    };
  },
  setError(error) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_ERROR,
      error
    };
  },
  setCourseInfo(courseInfo) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_INFO,
      courseInfo
    };
  },
  setUserInfo(userInfo) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_USER_INFO,
      userInfo
    };
  },
  *fetchCourseData(courseId) {
    try {
      yield actions.setIsLoading(true);
      const response = yield {
        type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.FETCH_COURSE_DATA,
        courseId
      };
      const currentUnit = response.courseitems.find(unit => unit.key == response.current_unit_key);
      yield actions.setCourseInfo(response);
      yield actions.setCourseId(courseId);
      yield actions.setCurrentUnit(currentUnit.id);
      yield actions.setIsLoading(false);
    } catch (error) {
      yield actions.setError(error instanceof Error ? error.message : String(error));
      yield actions.setIsLoading(false);
    }
  },
  *fetchUserInfo() {
    try {
      const response = yield {
        type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.FETCH_USER_INFO
      };
      yield actions.setUserInfo(response);
    } catch (error) {
      yield actions.handleError(error);
    }
  },
  *markUnitComplete(courseId, unitId, progress) {
    try {
      const response = yield {
        type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.MARK_UNIT_COMPLETE,
        courseId,
        unitId,
        progress
      };
      yield actions.fetchCourseData(courseId);
    } catch (error) {
      yield actions.handleError(error);
    }
  },
  *updateCourseProgress(courseId) {
    try {
      const response = yield {
        type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.GET_COURSE_PROGRESS,
        courseId
      };
      yield actions.setProgress(response);
    } catch (error) {
      yield actions.handleError(error);
    }
  },
  *handleError(error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    yield actions.setError(errorMessage);
    yield actions.setIsLoading(false);
  },
  nextUnit() {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.NEXT_UNIT
    };
  },
  prevUnit() {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.PREV_UNIT
    };
  },
  setCourseReview(review) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_REVIEW,
      review
    };
  },
  setReviewLoading(loading) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_LOADING,
      loading
    };
  },
  setReviewError(error) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_ERROR,
      error
    };
  },
  setReviewModalOpen(open) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_MODAL_OPEN,
      open
    };
  },
  setCompletionMessage(message) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COMPLETION_MESSAGE,
      message
    };
  },
  *fetchCourseReview(courseId) {
    try {
      yield actions.setReviewLoading(true);
      const response = yield {
        type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.FETCH_COURSE_REVIEW,
        courseId
      };
      yield actions.setCourseReview(response);
      yield actions.setReviewLoading(false);
    } catch (error) {
      yield actions.handleError(error);
      yield actions.setReviewLoading(false);
    }
  },
  *submitCourseReview({
    rating,
    review,
    courseId
  }) {
    try {
      yield actions.setIsLoading(true);
      const response = yield {
        type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SUBMIT_COURSE_REVIEW,
        rating,
        review,
        comment_post_ID: courseId
      };
      yield actions.setCourseReview(response);
      yield actions.setIsLoading(false);
    } catch (error) {
      yield actions.handleError(error);
    }
  },
  setCourseCompleted(completed) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_COMPLETED,
      completed
    };
  },
  *finishCourse(courseId) {
    try {
      yield actions.setIsLoading(true);
      const response = yield {
        type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.FINISH_COURSE,
        courseId
      };
      if (response.status) {
        yield actions.setCompletionMessage(response.finished.message);
      }
      yield actions.fetchCourseData(courseId); // Refresh course data
      yield actions.setIsLoading(false);
    } catch (error) {
      yield actions.handleError(error);
    }
  }
};

/***/ }),

/***/ "./src/store/const.ts":
/*!****************************!*\
  !*** ./src/store/const.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actionTypes: () => (/* binding */ actionTypes)
/* harmony export */ });
// const.ts
const actionTypes = {
  SET_COURSE_ID: "SET_COURSE_ID",
  SET_PROGRESS: "SET_PROGRESS",
  SET_CURRENT_UNIT: "SET_CURRENT_UNIT",
  SET_IS_LOADING: "SET_IS_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_COURSE_INFO: "SET_COURSE_INFO",
  FETCH_COURSE_DATA: "FETCH_COURSE_DATA",
  NEXT_UNIT: "NEXT_UNIT",
  PREV_UNIT: "PREV_UNIT",
  SET_USER_INFO: "SET_USER_INFO",
  FETCH_USER_INFO: "FETCH_USER_INFO",
  MARK_UNIT_COMPLETE: "MARK_UNIT_COMPLETE",
  GET_COURSE_PROGRESS: "GET_COURSE_PROGRESS",
  UNIT_COMPLETE_BY_ID: "UNIT_COMPLETE_BY_ID",
  FETCH_COURSE_REVIEW: "FETCH_COURSE_REVIEW",
  SUBMIT_COURSE_REVIEW: "SUBMIT_COURSE_REVIEW",
  SET_COURSE_REVIEW: "SET_COURSE_REVIEW",
  SET_REVIEW_LOADING: "SET_REVIEW_LOADING",
  SET_REVIEW_ERROR: "SET_REVIEW_ERROR",
  SET_REVIEW_MODAL_OPEN: "SET_REVIEW_MODAL_OPEN",
  FINISH_COURSE: "FINISH_COURSE",
  SET_COURSE_COMPLETED: "SET_COURSE_COMPLETED",
  SET_COMPLETION_MESSAGE: "SET_COMPLETION_MESSAGE"
};

/***/ }),

/***/ "./src/store/controls.ts":
/*!*******************************!*\
  !*** ./src/store/controls.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controls: () => (/* binding */ controls)
/* harmony export */ });
/* harmony import */ var _utilities_apiCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/apiCall */ "./src/utilities/apiCall.ts");
// controls.ts

const userAuthToken = window.wplmsCustomCoursePlayer.token;
const controls = {
  async FETCH_COURSE_DATA(action) {
    const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_0__.fetchCourseData)({
      courseId: action.courseId,
      token: userAuthToken
    });
    return response;
  },
  async FETCH_USER_INFO() {
    try {
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_0__.getUserInfo)(userAuthToken);
      return response;
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  },
  async MARK_UNIT_COMPLETE(action) {
    try {
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_0__.markUnitComplete)({
        courseId: action.courseId,
        unitId: action.unitId,
        token: userAuthToken,
        progress: action.progress
      });
      return response;
    } catch (error) {
      console.error("Error marking unit complete:", error);
    }
  },
  async GET_COURSE_PROGRESS(action) {
    try {
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_0__.getCourseProgress)({
        courseId: action.courseId,
        token: userAuthToken
      });
      return response;
    } catch (error) {
      console.error("Error fetching course progress:", error);
    }
  },
  async SUBMIT_COURSE_REVIEW(action) {
    const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_0__.submitCourseReview)({
      rating: action.rating,
      review: action.review,
      token: userAuthToken,
      comment_post_ID: action.courseId
    });
    return response;
  },
  async FETCH_COURSE_REVIEW(action) {
    const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_0__.fetchCourseReview)({
      courseId: action.courseId,
      token: userAuthToken
    });
    return response;
  },
  async FINISH_COURSE(action) {
    try {
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_0__.finishCourse)({
        courseId: action.courseId,
        token: userAuthToken
      });
      return response;
    } catch (error) {
      console.error("Error finishing course:", error);
      throw error;
    }
  }
};

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/store/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/store/selectors.ts");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./src/store/controls.ts");
// index.ts





const resolvers = {
  *getCourseData(courseId) {
    yield _actions__WEBPACK_IMPORTED_MODULE_1__.actions.fetchCourseData(courseId);
  },
  *getUserInfo() {
    yield _actions__WEBPACK_IMPORTED_MODULE_1__.actions.fetchUserInfo();
  }
};
const coursePlayerStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)("custom-course-player", {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__.actions,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__.selectors,
  controls: _controls__WEBPACK_IMPORTED_MODULE_4__.controls,
  resolvers
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(coursePlayerStore);

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_STATE: () => (/* binding */ DEFAULT_STATE),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/store/const.ts");
// reducer.ts


const DEFAULT_STATE = {
  courseId: null,
  courseInfo: null,
  progress: 0,
  currentUnitId: null,
  allUnits: null,
  isLoading: false,
  error: null,
  token: null,
  userInfo: null,
  review: null,
  reviewLoading: true,
  reviewError: null,
  reviewModalOpen: false,
  courseTotalDuration: null,
  completedDuration: null,
  isCompleted: false,
  completionMessage: null
};
const reducer = (state = DEFAULT_STATE, action) => {
  var _action$courseInfo$pr;
  switch (action.type) {
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_ID:
      return {
        ...state,
        courseId: action.courseId
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_INFO:
      const allUnits = action.courseInfo.courseitems.filter(item => item.type !== "section");
      const courseTotalDuration = allUnits.reduce((sum, unit) => sum + (unit.duration || 0), 0);
      const completedUnits = allUnits.filter(unit => unit.status === 1);
      const completedDuration = completedUnits.reduce((sum, unit) => sum + (unit.duration || 0), 0);

      // Calculate progress
      const progress = Math.round(completedDuration / courseTotalDuration * 100);
      const isCompleted = parseInt((_action$courseInfo$pr = action.courseInfo.progress) !== null && _action$courseInfo$pr !== void 0 ? _action$courseInfo$pr : "0") >= 100 && progress >= 100;
      return {
        ...state,
        courseInfo: action.courseInfo,
        allUnits,
        courseTotalDuration,
        progress,
        completedDuration,
        isCompleted
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_PROGRESS:
      return {
        ...state,
        progress: action.progress
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_CURRENT_UNIT:
      return {
        ...state,
        currentUnitId: action.unitId
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.NEXT_UNIT:
      {
        var _state$allUnits$findI;
        const currentIndex = (_state$allUnits$findI = state?.allUnits?.findIndex(unit => unit.id === state.currentUnitId)) !== null && _state$allUnits$findI !== void 0 ? _state$allUnits$findI : -1;
        const nextUnit = state?.allUnits?.[currentIndex + 1];
        return {
          ...state,
          currentUnitId: nextUnit ? nextUnit.id : state.currentUnitId
        };
      }
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.PREV_UNIT:
      {
        var _state$allUnits$findI2;
        const currentIndex = (_state$allUnits$findI2 = state?.allUnits?.findIndex(unit => unit.id === state.currentUnitId)) !== null && _state$allUnits$findI2 !== void 0 ? _state$allUnits$findI2 : -1;
        const prevUnit = state?.allUnits?.[currentIndex - 1];
        return {
          ...state,
          currentUnitId: prevUnit ? prevUnit.id : state.currentUnitId
        };
      }
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_REVIEW:
      return {
        ...state,
        review: action.review
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_LOADING:
      return {
        ...state,
        reviewLoading: action.loading
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_ERROR:
      return {
        ...state,
        reviewError: action.error
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_MODAL_OPEN:
      return {
        ...state,
        reviewModalOpen: action.open
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_COMPLETED:
      return {
        ...state,
        isCompleted: action.completed
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COMPLETION_MESSAGE:
      return {
        ...state,
        completionMessage: action.message
      };
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/store/selectors.ts":
/*!********************************!*\
  !*** ./src/store/selectors.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectors: () => (/* binding */ selectors)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
// selectors.ts


const selectors = {
  getCourseId(state) {
    return state.courseId;
  },
  getCourseInfo(state) {
    return state.courseInfo;
  },
  getProgress(state) {
    var _state$progress;
    return (_state$progress = state.progress) !== null && _state$progress !== void 0 ? _state$progress : 0;
  },
  getCurrentUnitId(state) {
    return state.currentUnitId;
  },
  isLoading(state) {
    var _state$isLoading;
    return (_state$isLoading = state.isLoading) !== null && _state$isLoading !== void 0 ? _state$isLoading : false;
  },
  getError(state) {
    return state.error;
  },
  getUserInfo(state) {
    return state.userInfo;
  },
  getAllUnits(state) {
    return state.allUnits;
  },
  getCompletedUnits(state) {
    var _state$allUnits$filte;
    return (_state$allUnits$filte = state.allUnits?.filter(unit => unit.status === 1)) !== null && _state$allUnits$filte !== void 0 ? _state$allUnits$filte : [];
  },
  getCourseReview(state) {
    return state.review;
  },
  getReviewLoading(state) {
    return state.reviewLoading;
  },
  getReviewError(state) {
    return state.reviewError;
  },
  getReviewModalOpen(state) {
    return state.reviewModalOpen;
  },
  getCourseTotalDuration(state) {
    return state.courseTotalDuration;
  },
  getCompletedDuration(state) {
    return state.completedDuration;
  },
  isLoadingCourseData(state, courseId) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)("core/data").isResolving("custom-course-player", "getCourseData", [courseId]);
  },
  isLoadingUserInfo(state) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)("core/data").isResolving("custom-course-player", "getUserInfo", []);
  },
  isCourseCompleted(state) {
    var _state$isCompleted;
    return (_state$isCompleted = state.isCompleted) !== null && _state$isCompleted !== void 0 ? _state$isCompleted : false;
  },
  getCompletionMessage(state) {
    return state.completionMessage;
  }
};

/***/ }),

/***/ "./src/utilities/apiCall.ts":
/*!**********************************!*\
  !*** ./src/utilities/apiCall.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCourseData: () => (/* binding */ fetchCourseData),
/* harmony export */   fetchCourseReview: () => (/* binding */ fetchCourseReview),
/* harmony export */   fetchUnitContent: () => (/* binding */ fetchUnitContent),
/* harmony export */   finishCourse: () => (/* binding */ finishCourse),
/* harmony export */   getCourseProgress: () => (/* binding */ getCourseProgress),
/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),
/* harmony export */   markUnitComplete: () => (/* binding */ markUnitComplete),
/* harmony export */   submitCourseReview: () => (/* binding */ submitCourseReview)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

const fetchCourseData = async ({
  courseId,
  token
}) => {
  try {
    const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/wplms/v2/user/coursestatus/${courseId}`,
      method: "POST",
      data: {
        token: token
      }
    });
    console.log(data);
    if (data) {
      return data;
    } else {
      throw new Error(data || "Failed to fetch course data");
    }
  } catch (err) {
    throw new Error("Error fetching course data");
  }
};
const fetchUnitContent = async ({
  courseId,
  unitId,
  token
}) => {
  try {
    const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/wplms/v2/user/coursestatus/${courseId}/item/${unitId}`,
      method: "POST",
      data: {
        token: token
      }
    });
    if (data) {
      return data;
    } else {
      throw new Error("Failed to fetch unit content");
    }
  } catch (err) {
    console.error("Error fetching unit content:", err);
  }
};
const fetchCourseReview = async ({
  courseId,
  token
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/wplms/v2/user/getreview/${courseId}`,
      method: "POST",
      data: {
        token,
        course_id: courseId
      }
    });
    return response;
  } catch (err) {
    console.error("Failed to fetch review status");
    throw err;
  }
};
const submitCourseReview = async ({
  rating,
  review,
  token,
  comment_post_ID
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/wplms/v2/updatecourse/addreview`,
      method: "POST",
      data: {
        token,
        comment_post_ID,
        rating,
        review,
        title: "Course Review",
        course_id: comment_post_ID
      }
    });
    return response;
  } catch (err) {
    console.error("Failed to submit review");
  }
};
const getUserInfo = async token => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: "/wplms/v2/user/",
      method: "POST",
      data: {
        token
      }
    });
    return response;
  } catch (err) {
    console.error("Failed to fetch user info");
  }
};
const markUnitComplete = async ({
  courseId,
  unitId,
  token,
  progress
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "POST",
      path: `/wplms/v2/user/coursestatus/${courseId}/item/${unitId}/markcomplete`,
      data: {
        token: token,
        course_id: courseId,
        item_id: unitId,
        progress: progress
      }
    });
    return response;
  } catch (err) {
    console.error("Failed to mark unit complete");
  }
};
const getCourseProgress = async ({
  courseId,
  token
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "POST",
      path: "wplms-custom-course-player/v1/course-progress",
      data: {
        course_id: courseId,
        token: token
      }
    });
    return response;
  } catch (err) {
    console.error("Failed to get course progress");
  }
};

// finish course
const finishCourse = async ({
  courseId,
  token
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "POST",
      path: `/wplms/v2/user/finishcourse`,
      data: {
        course_id: courseId,
        token
      }
    });
    return response;
  } catch (err) {
    console.error("Failed to finish course");
  }
};

/***/ }),

/***/ "./src/utilities/utility.ts":
/*!**********************************!*\
  !*** ./src/utilities/utility.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDuration: () => (/* binding */ formatDuration)
/* harmony export */ });
const formatDuration = duration => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var _components_RootContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/RootContainer */ "./src/components/RootContainer.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const initializeCoursePlayer = () => {
  const container = document.getElementById('wplms-custom-course-player');
  if (container) {
    const courseId = container.getAttribute('data-course-id') || '0';
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
    root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_RootContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      courseId: courseId
    }));
  }
};
document.addEventListener('DOMContentLoaded', initializeCoursePlayer);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map