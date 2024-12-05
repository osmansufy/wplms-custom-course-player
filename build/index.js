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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var _course_content_ContentArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course/content/ContentArea */ "./src/components/course/content/ContentArea.tsx");
/* harmony import */ var _course_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course/sidebar */ "./src/components/course/sidebar/index.tsx");
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopBar */ "./src/components/TopBar/index.tsx");
/* harmony import */ var _course_CourseTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course/CourseTabs */ "./src/components/course/CourseTabs/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const RootContainer = ({
  courseId
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  // Get dispatch actions
  const {
    fetchCourse
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('custom-course-player');

  // Get state from Redux store
  const {
    courseInfo,
    loading,
    error,
    currentUnitId
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(select => ({
    courseInfo: select.getCourseInfo(parseInt(courseId)) || null,
    loading: select.isLoadingUserInfo() || false,
    error: select.getError() || null,
    currentUnitId: select.getCurrentUnitId() || null
  }), []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "h-screen flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"
      })
    });
  }
  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "h-screen flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "bg-red-50 p-4 rounded-lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "text-red-600",
          children: error
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          onClick: () => courseId && fetchCourse(courseId),
          className: "mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
          children: "Retry"
        })]
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "flex flex-col min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_TopBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onToggleSidebar: toggleSidebar,
      isSidebarOpen: isSidebarOpen
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: `flex flex-1 overflow-hidden sm:pt-16`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex flex-1 flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_course_content_ContentArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
          isSidebarOpen: isSidebarOpen
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_course_CourseTabs__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
      }), courseInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_course_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/store/index.ts");
/* harmony import */ var _review_ReviewModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../review/ReviewModal */ "./src/components/review/ReviewModal.tsx");
/* harmony import */ var _ProgressCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgressCircle */ "./src/components/TopBar/ProgressCircle.tsx");
/* harmony import */ var _ProgressDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProgressDropdown */ "./src/components/TopBar/ProgressDropdown.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function TopBar({
  onToggleSidebar
}) {
  var _completedUnits$lengt, _totalUnits$length;
  const [isProgressOpen, setIsProgressOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    courseId,
    totalUnits,
    completedUnits,
    progress,
    reviewModalOpen
  } = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useTypedSelect)(select => ({
    courseId: select.getCourseId(),
    totalUnits: select.getAllUnits(),
    completedUnits: select.getCompletedUnits(),
    reviewModalOpen: select.getReviewModalOpen(),
    progress: select.getProgress()
  }));
  const courseTitle = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useTypedSelect)(select => select.getCourseTitle());
  const {
    reviewLoading,
    review
  } = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useTypedSelect)(select => {
    if (courseId) {
      return {
        reviewLoading: select.isLoadingReview(courseId),
        review: select.getCourseReview(courseId)
      };
    }
    return {
      reviewLoading: false,
      review: null
    };
  }, [courseId]);
  console.log({
    courseTitle,
    totalUnits,
    completedUnits,
    review,
    reviewLoading,
    progress
  });

  // dispatch
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const setReviewModalOpen = open => {
    dispatch('custom-course-player').setReviewModalOpen(open);
  };
  const hasReview = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return review?.comment_ID !== undefined;
  }, [review]);

  // go back
  const goBack = () => {
    // go back to student-portal
    window.location.href = '/student-portal';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "fixed top-0 left-0 right-0 bg-gray-800 text-white z-50",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "h-16 px-4 flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
            onClick: goBack,
            className: "text-secondary-50  p-1 rounded-md hover:bg-secondary-500/20 transition-colors",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 19l-7-7 7-7"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
            className: "sm:text-xl text-sm text-wrap  font-bold  text-secondary-50",
            children: courseTitle || ''
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "sm:flex hidden items-center gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ProgressCircle__WEBPACK_IMPORTED_MODULE_5__["default"], {
            progress: progress
          }), !hasReview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
            onClick: () => setReviewModalOpen(true),
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700  transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-2 focus:ring-offset-gray-800",
            disabled: reviewLoading || false,
            children: reviewLoading ? 'Loading...' : 'Leave a Review'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ProgressDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
            isOpen: isProgressOpen,
            onToggle: () => setIsProgressOpen(!isProgressOpen),
            completedUnits: (_completedUnits$lengt = completedUnits?.length) !== null && _completedUnits$lengt !== void 0 ? _completedUnits$lengt : 0,
            totalUnits: (_totalUnits$length = totalUnits?.length) !== null && _totalUnits$length !== void 0 ? _totalUnits$length : 0
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
            onClick: onToggleSidebar,
            className: "p-2 hover:bg-gray-700 rounded-md transition-colors",
            "aria-label": "Toggle sidebar",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 6h16M4 12h16M4 18h16"
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "h-1 sm:block hidden bg-gray-700",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "h-full bg-green-500 transition-all duration-500",
          style: {
            width: `${progress}%`
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_review_ReviewModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isOpen: Boolean(!reviewLoading && reviewModalOpen),
      onClose: () => setReviewModalOpen(false),
      courseId: courseId,
      courseName: courseTitle,
      progress: progress,
      onReviewSuccess: () => {}
    }), isProgressOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "fixed inset-0 z-20",
      onClick: () => setIsProgressOpen(false)
    })]
  });
}

/***/ }),

/***/ "./src/components/course/CourseTabs/ReviewsContent.tsx":
/*!*************************************************************!*\
  !*** ./src/components/course/CourseTabs/ReviewsContent.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/HandThumbUpIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/HandThumbDownIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/FlagIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/store/index.ts");
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StarRating */ "./src/components/course/CourseTabs/StarRating.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const ReviewsContent = ({
  courseId
}) => {
  const {
    reviewList,
    hasReview
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(state => ({
    reviewList: state.getReviewList(courseId),
    hasReview: state.hasReview()
  }), [courseId]);
  const {
    setReviewModalOpen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_2__["default"].name);
  console.log({
    reviewList
  });
  const mockReviews = [{
    id: 1,
    title: 'Great course!',
    member: {
      id: 1,
      name: 'Dhaval V.',
      avatar: '',
      sub: ''
    },
    rating: 5,
    date: 'a week ago',
    content: 'This course is absolutely perfect for anyone looking to start with GitHub Actions and progress from beginner to expert. Thank you so much for creating such an outstanding and insightful course!'
  }];
  if (!courseId) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex items-start gap-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-6xl font-bold text-orange-500",
          children: "4.7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_StarRating__WEBPACK_IMPORTED_MODULE_3__["default"], {
          rating: 4.7,
          size: "lg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-gray-600 mt-1",
          children: "Course Rating"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "flex-1 space-y-2",
        children: [{
          stars: 5,
          percentage: 69
        }, {
          stars: 4,
          percentage: 27
        }, {
          stars: 3,
          percentage: 4
        }, {
          stars: 2,
          percentage: 1
        }, {
          stars: 1,
          percentage: 1
        }].map(rating => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_StarRating__WEBPACK_IMPORTED_MODULE_3__["default"], {
            rating: rating.stars
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex-1 h-4 bg-gray-200 rounded",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "h-full bg-orange-400 rounded",
              style: {
                width: `${rating.percentage}%`
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text-sm text-gray-600 min-w-[40px]",
            children: [rating.percentage, "%"]
          })]
        }, rating.stars))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "text-xl font-bold",
          children: "Reviews"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("select", {
          className: "border p-2 rounded-md",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
            children: "All ratings"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          type: "text",
          placeholder: "Search reviews",
          className: "w-full pl-4 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "w-5 h-5 text-gray-500"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "space-y-6",
        children: reviewList?.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center py-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
            className: "text-xl font-semibold text-gray-700 mb-2",
            children: "No reviews yet"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-gray-600",
            children: "Be the first to review this course"
          }), !hasReview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "mt-4 bg-orange-500 text-white px-4 py-2 rounded-md",
            onClick: () => setReviewModalOpen(true),
            children: "Write a review"
          })]
        }) : reviewList?.map(review => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "border-b pb-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex items-center gap-4 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600",
              children: review.member?.avatar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: review.member.avatar,
                alt: review.member.name,
                className: "w-full h-full object-cover rounded-full"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "font-medium",
                children: review.member.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_StarRating__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  rating: review.rating
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "text-gray-500 text-sm",
                  children: review.date
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-gray-700 mb-4",
            children: review.content
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
              className: "flex items-center gap-1 text-gray-600 hover:text-gray-800",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__["default"], {
                className: "w-4 h-4"
              }), "Helpful"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
              className: "flex items-center gap-1 text-gray-600 hover:text-gray-800",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__["default"], {
                className: "w-4 h-4"
              }), "Not helpful"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
              className: "flex items-center gap-1 text-gray-600 hover:text-gray-800",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: "w-4 h-4"
              }), "Report"]
            })]
          })]
        }, review.id))
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewsContent);

/***/ }),

/***/ "./src/components/course/CourseTabs/SearchContent.tsx":
/*!************************************************************!*\
  !*** ./src/components/course/CourseTabs/SearchContent.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const SearchContent = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "max-w-2xl",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          placeholder: "Search course content",
          className: "w-full pl-4 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "w-5 h-5 text-gray-500"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "text-center py-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        className: "text-xl font-semibold text-gray-700 mb-2",
        children: "Start a new search"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-gray-600",
        children: "To find captions, lectures or resources"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchContent);

/***/ }),

/***/ "./src/components/course/CourseTabs/StarRating.tsx":
/*!*********************************************************!*\
  !*** ./src/components/course/CourseTabs/StarRating.tsx ***!
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


const StarRating = ({
  rating,
  showNumber = false,
  size = 'sm'
}) => {
  const textSize = size === 'lg' ? 'text-6xl' : 'text-sm';
  const starSize = size === 'lg' ? 'text-2xl' : 'text-sm';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "flex items-center gap-1",
    children: [showNumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: `font-bold text-orange-500 ${textSize}`,
      children: rating
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `flex text-orange-400 ${starSize}`,
      children: [1, 2, 3, 4, 5].map(star => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        children: star <= rating ? '★' : '☆'
      }, star))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);

/***/ }),

/***/ "./src/components/course/CourseTabs/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/course/CourseTabs/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js");
/* harmony import */ var _ReviewsContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewsContent */ "./src/components/course/CourseTabs/ReviewsContent.tsx");
/* harmony import */ var _SearchContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchContent */ "./src/components/course/CourseTabs/SearchContent.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store */ "./src/store/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const TabPanel = ({
  children,
  value,
  index
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    role: "tabpanel",
    hidden: value !== index,
    className: "p-6 bg-white rounded-b-lg border-t border-gray-200",
    children: value === index && children
  });
};
const CourseTabs = () => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    courseId
  } = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useTypedSelect)(state => ({
    courseId: state.getCourseId()
  }));
  const tabs = [{
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "flex items-center gap-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "w-4 h-4"
      })
    }),
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SearchContent__WEBPACK_IMPORTED_MODULE_2__["default"], {})
  }, {
    label: 'Overview',
    content: 'Overview content'
  }, {
    label: 'Q&A',
    content: 'Q&A content'
  }, {
    label: 'Notes',
    content: 'Notes content'
  }, {
    label: 'Announcements',
    content: 'Announcements content'
  }, {
    label: 'Reviews',
    content: courseId ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ReviewsContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
      courseId: courseId
    }) : null
  }, {
    label: 'Learning tools',
    content: 'Learning tools content'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "mt-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "flex border-b border-gray-200",
      children: tabs.map((tab, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: `px-6 py-3 text-sm font-medium transition-colors
              ${activeTab === index ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
        onClick: () => setActiveTab(index),
        children: typeof tab.label === 'string' ? tab.label : tab.label
      }, index))
    }), tabs.map((tab, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TabPanel, {
      value: activeTab,
      index: index,
      children: tab.content
    }, index))]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseTabs);

/***/ }),

/***/ "./src/components/course/content/ContentArea.tsx":
/*!*******************************************************!*\
  !*** ./src/components/course/content/ContentArea.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useContentArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useContentArea */ "./src/components/course/content/useContentArea.ts");
/* harmony import */ var _ContentDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentDisplay */ "./src/components/course/content/ContentDisplay.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ContentArea = ({
  isSidebarOpen
}) => {
  const {
    unitContent,
    loading,
    error,
    isLastUnit,
    isFirstUnit,
    isHovering,
    handlePrevious,
    handleNext,
    handleMouseEnter,
    handleMouseLeave,
    handleRetry
  } = (0,_useContentArea__WEBPACK_IMPORTED_MODULE_1__.useContentArea)(isSidebarOpen);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `flex-1 p-6 overflow-y-auto bg-black 
                transition-all duration-300 relative 
               sm:max-h-[520px] max-h-[300px] 
                }`,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "mb-6",
      children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "h-8 bg-gray-200 rounded animate-pulse w-2/3"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        className: "text-lg text-white font-bold mb-1",
        children: unitContent?.title
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ContentDisplay__WEBPACK_IMPORTED_MODULE_2__.ContentDisplay, {
      loading: loading,
      error: error,
      unitContent: unitContent,
      isHovering: isHovering,
      isSidebarOpen: isSidebarOpen,
      onPrevious: handlePrevious,
      onNext: handleNext,
      isFirstUnit: isFirstUnit,
      isLastUnit: isLastUnit,
      onRetry: handleRetry
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentArea);

/***/ }),

/***/ "./src/components/course/content/ContentDisplay.tsx":
/*!**********************************************************!*\
  !*** ./src/components/course/content/ContentDisplay.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentDisplay: () => (/* binding */ ContentDisplay)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationButtons */ "./src/components/course/content/NavigationButtons.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ContentDisplay = ({
  loading,
  error,
  unitContent,
  isHovering,
  isSidebarOpen,
  onPrevious,
  onNext,
  isFirstUnit,
  isLastUnit,
  onRetry
}) => {
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
          onClick: onRetry,
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
    className: "custom_course_content sm:max-h-[400px] max-h-[250px] ",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`,
      dangerouslySetInnerHTML: {
        __html: unitContent.content
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_NavigationButtons__WEBPACK_IMPORTED_MODULE_1__.NavigationButtons, {
      isHovering: isHovering,
      isSidebarOpen: isSidebarOpen,
      onPrevious: onPrevious,
      onNext: onNext,
      isFirstUnit: isFirstUnit,
      isLastUnit: isLastUnit,
      loading: loading
    })]
  });
};

/***/ }),

/***/ "./src/components/course/content/NavigationButtons.tsx":
/*!*************************************************************!*\
  !*** ./src/components/course/content/NavigationButtons.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationButtons: () => (/* binding */ NavigationButtons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const NavigationButtons = ({
  isHovering,
  isSidebarOpen,
  onPrevious,
  onNext,
  isFirstUnit,
  isLastUnit,
  loading
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    className: `fixed top-1/2 left-4 bg-secondary-300 hover:bg-secondary-400 text-white p-3 
            rounded-full transform -translate-y-1/2 transition-all duration-300 
            shadow-lg shadow-secondary-400/20
            ${isHovering ? 'opacity-100' : 'opacity-0'}`,
    onClick: onPrevious,
    disabled: loading || isFirstUnit,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      className: "w-5 h-5",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 19l-7-7 7-7"
      })
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    className: `fixed top-1/2 right-4 bg-secondary-300 hover:bg-secondary-400 text-white p-3 
            rounded-full transform -translate-y-1/2 transition-all duration-300 
            shadow-lg shadow-secondary-400/20
            ${isSidebarOpen ? 'mr-[23rem]' : ''} 
            ${isHovering ? 'opacity-100' : 'opacity-0'}`,
    onClick: onNext,
    disabled: loading || isLastUnit,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      className: "w-5 h-5",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 5l7 7-7 7"
      })
    })
  })]
});

/***/ }),

/***/ "./src/components/course/content/useContentArea.ts":
/*!*********************************************************!*\
  !*** ./src/components/course/content/useContentArea.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useContentArea: () => (/* binding */ useContentArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnitContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnitContent */ "./src/components/course/content/useUnitContent.ts");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



const useContentArea = isSidebarOpen => {
  const {
    unitContent,
    loading,
    error,
    isLastUnit,
    isFirstUnit
  } = (0,_useUnitContent__WEBPACK_IMPORTED_MODULE_1__.useUnitContent)();
  const [isHovering, setIsHovering] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    setPreviousUnit,
    setNextUnit
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)("custom-course-player");
  const handlePrevious = () => {
    setPreviousUnit();
  };
  const handleNext = () => {
    setNextUnit();
  };
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const handleRetry = () => window.location.reload();
  return {
    // State
    unitContent,
    loading,
    error,
    isLastUnit,
    isFirstUnit,
    isHovering,
    isSidebarOpen,
    // Methods
    handlePrevious,
    handleNext,
    handleMouseEnter,
    handleMouseLeave,
    handleRetry
  };
};

/***/ }),

/***/ "./src/components/course/content/useUnitContent.ts":
/*!*********************************************************!*\
  !*** ./src/components/course/content/useUnitContent.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUnitContent: () => (/* binding */ useUnitContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utilities/apiCall */ "./src/utilities/apiCall.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/store/index.ts");



const userAuthToken = window.wplmsCustomCoursePlayer.token;
const useUnitContent = () => {
  const {
    courseId,
    currentUnit,
    allUnits
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(select => ({
    courseId: select.getCourseId(),
    currentUnit: select.getCurrentUnit(),
    allUnits: select.getAllUnits()
  }));
  const [unitContent, setUnitContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLastUnit, setIsLastUnit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isFirstUnit, setIsFirstUnit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const fetchContent = async () => {
    setUnitContent(null);
    setLoading(false);
    try {
      if (!courseId || !currentUnit) {
        return;
      }
      setLoading(true);
      const data = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.fetchUnitContent)({
        courseId: courseId,
        unitId: currentUnit?.id,
        token: userAuthToken
      });
      setUnitContent(data !== null && data !== void 0 ? data : null);
      setIsLastUnit(allUnits ? currentUnit?.id === allUnits[allUnits.length - 1].id : false);
      setIsFirstUnit(allUnits ? currentUnit?.id === allUnits[0].id : false);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err instanceof Error ? err.message : String(err));
      setUnitContent(null);
    } finally {
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (userAuthToken && courseId && currentUnit) {
      fetchContent();
    }
  }, [courseId, currentUnit, userAuthToken]);
  return {
    unitContent,
    loading,
    error,
    isLastUnit,
    isFirstUnit
  };
};

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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store */ "./src/store/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SidebarProgress = () => {
  const {
    totalLectures,
    totalDuration,
    completedLectures
  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useTypedSelect)(select => ({
    totalLectures: select.getAllUnits()?.length,
    totalDuration: select.getCourseTotalDuration(),
    completedLectures: select.getCompletedUnits()?.length
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "mb-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "text-sm text-gray-600",
      children: [totalLectures, " lectures \u2022 ", totalDuration ? totalDuration / 60 : 0, "m total duration"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "mt-2 h-1 bg-gray-200 rounded-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "h-full bg-blue-500 rounded-full",
        style: {
          width: `${(completedLectures !== null && completedLectures !== void 0 ? completedLectures : 0) / (totalLectures !== null && totalLectures !== void 0 ? totalLectures : 1) * 100}%`
        }
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarProgress);

/***/ }),

/***/ "./src/components/course/sidebar/Unit/UnitItem.tsx":
/*!*********************************************************!*\
  !*** ./src/components/course/sidebar/Unit/UnitItem.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store */ "./src/store/index.ts");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UnitItemView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UnitItemView */ "./src/components/course/sidebar/Unit/UnitItemView.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const UnitItem = ({
  unit
}) => {
  var _unit$status;
  const {
    completeUnit,
    setCurrentUnit
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('custom-course-player');
  const [isUnitComplete, setIsUnitComplete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_unit$status = unit?.status) !== null && _unit$status !== void 0 ? _unit$status : 0);
  const {
    currentUnitId,
    courseId,
    completedDuration,
    courseTotalDuration
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(select => ({
    currentUnitId: select.getCurrentUnitId(),
    courseId: select.getCourseId(),
    completedDuration: select.getCompletedDuration(),
    courseTotalDuration: select.getCourseTotalDuration()
  }), []);
  const unitCompletedProgress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (unit.duration && courseTotalDuration && completedDuration !== null) {
      return Math.round((completedDuration + unit.duration) / courseTotalDuration * 100);
    }
    return 0;
  }, [completedDuration, unit.duration, courseTotalDuration]);
  const onHandleCompleteUnit = async unitId => {
    try {
      await completeUnit({
        courseId,
        unitId,
        progress: unitCompletedProgress()
      });
      setIsUnitComplete(1);
    } catch (error) {
      console.log(error);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_UnitItemView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    unit: unit,
    currentUnitId: currentUnitId !== null && currentUnitId !== void 0 ? currentUnitId : 0,
    isUnitComplete: isUnitComplete,
    onSelectUnit: setCurrentUnit,
    onCompleteUnit: onHandleCompleteUnit
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnitItem);

/***/ }),

/***/ "./src/components/course/sidebar/Unit/UnitItemView.tsx":
/*!*************************************************************!*\
  !*** ./src/components/course/sidebar/Unit/UnitItemView.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/utility */ "./src/utilities/utility.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const UnitItemView = ({
  unit,
  currentUnit,
  isUnitComplete,
  onSelectUnit,
  onCompleteUnit
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
  className: `flex items-center p-4 cursor-pointer transition-colors
                   ${currentUnit?.id === unit.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
                   ${unit.status === 1 ? 'opacity-75' : ''}`,
  onClick: () => onSelectUnit(unit.id),
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "flex-shrink-0 mr-3",
    children: isUnitComplete === 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
      className: "w-5 h-5 text-green-500",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        clipRule: "evenodd"
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer",
      onClick: e => {
        e.stopPropagation();
        onCompleteUnit(unit.id);
      }
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex-grow",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
      className: `text-sm ${currentUnit?.id === unit.id ? 'font-medium' : ''}`,
      children: unit.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center text-xs text-gray-500 mt-1",
      children: [unit.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: `${unit.icon} mr-1`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        children: [(0,_utilities_utility__WEBPACK_IMPORTED_MODULE_1__.formatDuration)(unit.duration), " m"]
      })]
    })]
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnitItemView);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_CourseSections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/CourseSections */ "./src/components/course/sidebar/sections/CourseSections.tsx");
/* harmony import */ var _SidebarHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarHeader */ "./src/components/course/sidebar/SidebarHeader.tsx");
/* harmony import */ var _SidebarProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarProgress */ "./src/components/course/sidebar/SidebarProgress.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Sidebar = ({
  isOpen,
  onToggle
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: `sm:block hidden   bg-white border-l border-gray-200 h-full transform 
        ${isOpen ? 'translate-x-0 w-[24rem]' : 'translate-x-full w-0'} transition-transform duration-300 ease-in-out z-10`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "h-full overflow-y-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "p-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SidebarHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "Course content",
          onToggle: onToggle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SidebarProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sections_CourseSections__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/components/course/sidebar/quiz/QuizItem.tsx":
/*!*********************************************************!*\
  !*** ./src/components/course/sidebar/quiz/QuizItem.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/apiCall */ "./src/utilities/apiCall.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store */ "./src/store/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Quiz = ({
  quizId,
  token
}) => {
  const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [selectedAnswers, setSelectedAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [isSubmitted, setIsSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    courseId
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(select => ({
    courseId: select.getCourseId()
  }), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchQuizData = async () => {
      if (!courseId) return;
      try {
        const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.getQuizData)({
          course: courseId,
          // Provide default value if courseId is null
          token,
          quizId
        });
        if (response) {
          setQuizData(response);
          setTimeRemaining(response?.meta?.duration);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load quiz');
      }
    };
    fetchQuizData();
  }, [courseId, quizId, token]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (timeRemaining > 0 && !isSubmitted && quizData) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeRemaining === 0 && quizData) {
      handleSubmit();
    }
  }, [timeRemaining, isSubmitted, quizData]);
  const handleAnswerSelect = (questionKey, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionKey]: optionIndex
    }));
  };
  const handleSubmit = async () => {
    if (!quizData) return;
    let totalScore = 0;
    quizData.meta.questions.forEach(question => {
      const correctAnswer = JSON.parse(atob(question.correct.split('.')[0]));
      if (question.key && selectedAnswers[question.key] === correctAnswer) {
        totalScore += parseInt(question.marks);
      }
    });
    setScore(totalScore);
    setIsSubmitted(true);
  };
  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "bg-white rounded-lg shadow p-6 text-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "text-red-500 mb-4",
        children: error
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: () => window.location.reload(),
        className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
        children: "Try Again"
      })]
    });
  }
  if (!quizData) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "bg-white rounded-lg shadow p-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
        })
      })
    });
  }
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  const currentQuestionData = quizData.meta.questions[currentQuestion];
  const progressPercentage = (currentQuestion + 1) / quizData.meta.questions.length * 100;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "max-w-3xl mx-auto p-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "bg-white rounded-lg shadow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "p-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex justify-between items-center mb-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-xl font-bold",
            children: quizData.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
              className: "w-5 h-5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                d: "M12 6v6l4 2"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "font-mono",
              children: formatTime(timeRemaining)
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "w-full bg-gray-200 rounded-full h-2 mb-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "bg-blue-500 h-2 rounded-full transition-all duration-300",
            style: {
              width: `${progressPercentage}%`
            }
          })
        }), !isSubmitted ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "font-medium mb-4",
              dangerouslySetInnerHTML: {
                __html: `${currentQuestion + 1}. ${currentQuestionData.content}`
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "space-y-3",
              children: currentQuestionData.options.map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                onClick: () => handleAnswerSelect(currentQuestionData.key, index),
                className: `w-full text-left p-3 rounded border ${selectedAnswers[currentQuestionData.key] === index ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50 border-gray-200'}`,
                children: option
              }, index))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex justify-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              onClick: () => setCurrentQuestion(prev => prev - 1),
              disabled: currentQuestion === 0,
              className: "px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50",
              children: "Previous"
            }), currentQuestion === quizData.meta.questions.length - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              onClick: handleSubmit,
              className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
              children: "Submit Quiz"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              onClick: () => setCurrentQuestion(prev => prev + 1),
              disabled: currentQuestion === quizData.meta.questions.length - 1,
              className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",
              children: "Next"
            })]
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
            className: "text-2xl font-bold mb-4",
            children: "Quiz Complete!"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "text-lg mb-2",
            children: ["Your score: ", score, "/", quizData.meta.max]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "text-lg mb-6",
            children: ["Percentage: ", Math.round(score / quizData.meta.max * 100), "%"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            onClick: () => window.location.reload(),
            className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
            children: "Retake Quiz"
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quiz);

/***/ }),

/***/ "./src/components/course/sidebar/sections/CourseCompletionStatus.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/course/sidebar/sections/CourseCompletionStatus.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseCompletionStatus: () => (/* binding */ CourseCompletionStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const CourseCompletionStatus = ({
  isCompleted,
  completionMessage,
  onFinishCourse
}) => {
  if (isCompleted) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "p-4 bg-green-100 rounded-lg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-sm text-green-800",
        children: "Congratulations! You've completed this course."
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "p-4 bg-green-50 rounded-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-green-800 mb-2",
      children: completionMessage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      onClick: onFinishCourse,
      className: "w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors",
      children: "Complete Course"
    })]
  });
};

/***/ }),

/***/ "./src/components/course/sidebar/sections/CourseSections.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/course/sidebar/sections/CourseSections.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCourseSectionsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCourseSectionsView */ "./src/components/course/sidebar/sections/useCourseSectionsView.ts");
/* harmony import */ var _CourseCompletionStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseCompletionStatus */ "./src/components/course/sidebar/sections/CourseCompletionStatus.tsx");
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionHeader */ "./src/components/course/sidebar/sections/SectionHeader.tsx");
/* harmony import */ var _Unit_UnitItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Unit/UnitItem */ "./src/components/course/sidebar/Unit/UnitItem.tsx");
/* harmony import */ var _quiz_QuizItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quiz/QuizItem */ "./src/components/course/sidebar/quiz/QuizItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





const userAuthToken = window.wplmsCustomCoursePlayer.token;


const CourseSections = () => {
  const {
    sections,
    expandedSections,
    toggleSection,
    getSectionStats,
    isCompleted,
    completionMessage,
    handleFinishCourse
  } = (0,_useCourseSectionsView__WEBPACK_IMPORTED_MODULE_1__.useCourseSectionsView)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "space-y-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CourseCompletionStatus__WEBPACK_IMPORTED_MODULE_2__.CourseCompletionStatus, {
      isCompleted: isCompleted,
      completionMessage: completionMessage || '',
      onFinishCourse: handleFinishCourse
    }), sections.map((section, index) => {
      const stats = getSectionStats(section);
      const isExpanded = expandedSections.includes(index);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "border rounded-lg transition-colors border-gray-200",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SectionHeader__WEBPACK_IMPORTED_MODULE_3__.SectionHeader, {
          title: section.title,
          stats: stats,
          isExpanded: isExpanded,
          onClick: () => toggleSection(index)
        }), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "border-t border-gray-200",
          children: section.units.map(unit => {
            switch (unit.type) {
              case 'unit':
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Unit_UnitItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  unit: unit
                }, unit.id);
              case 'quiz':
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_quiz_QuizItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  quizId: unit.id,
                  token: userAuthToken
                }, unit.id);
              default:
                return null;
            }
          })
        })]
      }, section.key);
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseSections);

/***/ }),

/***/ "./src/components/course/sidebar/sections/SectionHeader.tsx":
/*!******************************************************************!*\
  !*** ./src/components/course/sidebar/sections/SectionHeader.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionHeader: () => (/* binding */ SectionHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/utility */ "./src/utilities/utility.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SectionHeader = ({
  title,
  stats,
  isExpanded,
  onClick
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
  className: `w-full flex items-center justify-between p-4 text-left
                   transition-colors rounded-t-lg
                   ${isExpanded ? 'bg-gray-50' : 'hover:bg-gray-50'}
                   ${stats.isComplete ? 'bg-primary-50 hover:bg-primary-100' : ''}`,
  onClick: onClick,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex-grow",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "flex items-center gap-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: "font-semibold text-gray-900 text-[1rem]",
        children: title
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      className: "text-sm text-gray-500",
      children: [stats.completedUnits, "/", stats.totalUnits, " lessons \u2022 ", (0,_utilities_utility__WEBPACK_IMPORTED_MODULE_1__.formatDuration)(stats.totalDuration), " m"]
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
    className: `w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19 9l-7 7-7-7"
    })
  })]
});

/***/ }),

/***/ "./src/components/course/sidebar/sections/useCourseSectionsView.ts":
/*!*************************************************************************!*\
  !*** ./src/components/course/sidebar/sections/useCourseSectionsView.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCourseSectionsView: () => (/* binding */ useCourseSectionsView)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store */ "./src/store/index.ts");
/* harmony import */ var _hooks_useCourseSections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useCourseSections */ "./src/hooks/useCourseSections.ts");
/* harmony import */ var _utilities_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/const */ "./src/utilities/const.ts");





function useCourseSectionsView() {
  const [lastShownMilestone, setLastShownMilestone] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    setReviewModalOpen,
    finishCourse
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)("custom-course-player");
  const {
    sections,
    expandedSections,
    toggleSection,
    getSectionStats
  } = (0,_hooks_useCourseSections__WEBPACK_IMPORTED_MODULE_3__.useCourseSections)();
  const courseId = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(select => select.getCourseId(), []);
  const {
    progress,
    isCompleted,
    completionMessage
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(select => ({
    progress: select.getProgress(),
    isCompleted: select.isCourseCompleted(),
    completionMessage: select.getCompletionMessage()
  }), [courseId]);
  const {
    hasReview
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(select => {
    if (courseId) {
      return {
        hasReview: select.hasReview(),
        reviewLoading: select.isLoadingReview(courseId)
      };
    }
    return {
      hasReview: false,
      reviewLoading: true
    };
  }, [courseId]);
  const onHandleReviewModalOpen = () => {
    if (hasReview) {
      return;
    }
    const milestone = _utilities_const__WEBPACK_IMPORTED_MODULE_4__.REVIEW_MILESTONES.find(milestone => progress >= milestone && lastShownMilestone < milestone);
    if (milestone) {
      setReviewModalOpen(true);
      setLastShownMilestone(milestone);
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!hasReview && courseId) {
      onHandleReviewModalOpen();
    } else {
      setReviewModalOpen(false);
    }
  }, [progress, hasReview, courseId]);
  const handleFinishCourse = async () => {
    if (courseId) {
      await finishCourse(courseId);
    }
  };
  return {
    sections,
    expandedSections,
    toggleSection,
    getSectionStats,
    isCompleted,
    completionMessage,
    handleFinishCourse
  };
}

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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./src/store/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






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
  } = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useTypedSelect)(select => ({
    userInfo: select.getUserInfo(),
    currentReview: select.getCourseReview(courseId || 0),
    isLoading: select.isLoadingUserInfo()
  }), [courseId]);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
    onClick: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "bg-white rounded-lg max-w-lg w-full p-6 shadow-xl",
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex justify-between items-start mb-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "text-2xl font-bold text-gray-800",
            children: "Share Your Experience"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-gray-600 mt-2",
            children: courseName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          onClick: onClose,
          className: "text-gray-400 hover:text-gray-600 transition-colors",
          "aria-label": "Close modal",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M6 18L18 6M6 6l12 12"
            })
          })
        })]
      }), userInfo?.avatar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex items-center gap-3 mb-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: userInfo.avatar,
          alt: userInfo.name || 'User avatar',
          className: "w-10 h-10 rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "font-medium text-gray-700",
          children: userInfo.name || 'Anonymous'
        })]
      }), success ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SuccessMessage__WEBPACK_IMPORTED_MODULE_3__.SuccessMessage, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ReviewForm__WEBPACK_IMPORTED_MODULE_2__.ReviewForm, {
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
// hooks/useCourseSections.ts


const useCourseSections = () => {
  const courseId = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useTypedSelect)(select => select.getCourseId(), []);
  const [expandedSections, setExpandedSections] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    items,
    currentUnit
  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useTypedSelect)(select => {
    if (courseId) {
      return {
        items: select.getCourseInfo(courseId)?.courseitems || [],
        currentUnit: select.getCurrentUnit()
      };
    }
    return {
      items: [],
      currentUnit: null
    };
  }, [courseId]);

  // Organize sections and find initial expanded section
  const {
    sections,
    initialExpandedSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const organizedSections = [];
    let currentSection = null;
    let sectionWithCurrentUnit = -1;
    items?.forEach(item => {
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
      } else if (currentSection) {
        currentSection.units.push(item);
        // Check if this unit is the current one
        if (item.id === currentUnit?.id) {
          sectionWithCurrentUnit = organizedSections.length;
        }
      }
    });

    // Add the last section
    if (currentSection) {
      organizedSections.push(currentSection);
      // Check last section for current unit if not found yet
      if (sectionWithCurrentUnit === -1 && currentSection.units.some(unit => unit.id === currentUnit?.id)) {
        sectionWithCurrentUnit = organizedSections.length - 1;
      }
    }
    return {
      sections: organizedSections,
      initialExpandedSection: sectionWithCurrentUnit
    };
  }, [items, currentUnit]);

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
    if (currentUnit) {
      const sectionIndex = sections.findIndex(section => section.units.some(unit => unit.id === currentUnit.id));
      if (sectionIndex !== -1 && !expandedSections.includes(sectionIndex)) {
        setExpandedSections(prev => [...prev, sectionIndex]);
      }
    }
  }, [currentUnit, sections]);
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
/* harmony import */ var _utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/apiCall */ "./src/utilities/apiCall.ts");


const actions = {
  // Course Info Actions
  setCourseInfo(courseInfo) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_INFO,
      payload: courseInfo
    };
  },
  setUserInfo(userInfo) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_USER_INFO,
      payload: userInfo
    };
  },
  // Loading & Error Actions
  setLoading(isLoading) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_IS_LOADING,
      payload: isLoading
    };
  },
  setError(error) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_ERROR,
      payload: error
    };
  },
  // Review Related Actions
  setCourseInfoLoading(isLoading) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_LOADING,
      payload: isLoading
    };
  },
  setCourseReviewError(error) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_ERROR,
      payload: error
    };
  },
  setCourseReview(review) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_REVIEW,
      payload: review
    };
  },
  setReviewModalOpen(isOpen) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_MODAL_OPEN,
      payload: isOpen
    };
  },
  setHasReview(hasReview) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_HAS_REVIEW,
      payload: hasReview
    };
  },
  setReviewList(reviewList) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_LIST,
      payload: reviewList
    };
  },
  // Unit Navigation Actions
  setNextUnit() {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.NEXT_UNIT
    };
  },
  setPreviousUnit() {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.PREV_UNIT
    };
  },
  setCurrentUnit(unitId) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_CURRENT_UNIT,
      payload: unitId
    };
  },
  setProgress(progress) {
    return {
      type: _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_PROGRESS,
      payload: progress
    };
  },
  // Async Actions (Thunks)
  submitCourseReview: ({
    rating,
    review,
    courseId
  }) => async ({
    dispatch
  }) => {
    try {
      dispatch(actions.setLoading(true));
      const token = window.wplmsCustomCoursePlayer.token;
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.submitCourseReview)({
        token,
        comment_post_ID: courseId,
        rating,
        review
      });
      dispatch(actions.setCourseReview(response));
      dispatch(actions.setReviewModalOpen(false));
      dispatch(actions.setHasReview(true));
      dispatch(actions.setLoading(false));
    } catch (error) {
      dispatch(actions.setError(error instanceof Error ? error.message : String(error)));
      dispatch(actions.setLoading(false));
    }
  },
  completeUnit: ({
    courseId,
    unitId,
    progress
  }) => async ({
    dispatch
  }) => {
    try {
      dispatch(actions.setLoading(true));
      const token = window.wplmsCustomCoursePlayer.token;
      await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.markUnitComplete)({
        courseId,
        unitId,
        progress,
        token
      });
      await dispatch(actions.fetchCourse(String(courseId)));
    } catch (error) {
      dispatch(actions.setError(error instanceof Error ? error.message : String(error)));
    } finally {
      dispatch(actions.setLoading(false));
    }
  },
  fetchCourse: courseId => async ({
    dispatch
  }) => {
    try {
      dispatch(actions.setLoading(true));
      const token = window.wplmsCustomCoursePlayer.token;
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.fetchCourseData)({
        courseId,
        token
      });
      dispatch(actions.setCourseInfo(response));
      dispatch(actions.setLoading(false));
      dispatch(actions.setError(""));
    } catch (error) {
      dispatch(actions.setError(error instanceof Error ? error.message : String(error)));
      dispatch(actions.setLoading(false));
    }
  },
  finishCourse: courseId => async ({
    dispatch
  }) => {
    const token = window.wplmsCustomCoursePlayer.token;
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
  SET_COMPLETION_MESSAGE: "SET_COMPLETION_MESSAGE",
  SET_HAS_REVIEW: "SET_HAS_REVIEW",
  SET_REVIEW_LIST: "SET_REVIEW_LIST"
};

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useTypedDispatch: () => (/* binding */ useTypedDispatch),
/* harmony export */   useTypedSelect: () => (/* binding */ useTypedSelect)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/store/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/store/selectors.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/store/resolvers.ts");
// index.ts





const coursePlayerStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)("custom-course-player", {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__.actions,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__.selectors,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__["default"]
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(coursePlayerStore);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coursePlayerStore);
function useTypedSelect(selector, deps = []) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => selector(select(coursePlayerStore.name)), deps);
}
function useTypedDispatch(action) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(coursePlayerStore.name)(action);
}

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



// Initial state
const DEFAULT_STATE = {
  token: null,
  courseId: null,
  courseInfo: null,
  progress: 0,
  currentUnit: null,
  allUnits: null,
  isLoading: true,
  error: null,
  userInfo: null,
  review: null,
  reviewLoading: true,
  hasReview: false,
  reviewError: null,
  reviewModalOpen: false,
  courseTotalDuration: null,
  completedDuration: null,
  isCompleted: false,
  completionMessage: null,
  reviewList: null
};

// Helper functions
const calculateCourseMetrics = units => {
  const courseTotalDuration = units.reduce((sum, unit) => sum + (unit.duration || 0), 0);
  const completedUnits = units.filter(unit => unit.status === 1);
  const completedDuration = completedUnits.reduce((sum, unit) => sum + (unit.duration || 0), 0);
  const progress = Math.round(completedDuration / courseTotalDuration * 100);
  return {
    courseTotalDuration,
    completedDuration,
    progress,
    isCompleted: progress >= 100
  };
};
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    // Course Info Related Actions
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_INFO:
      {
        const allUnits = action.payload.courseitems.filter(item => item.type !== "section");
        const currentUnit = allUnits.find(unit => unit.key === action.payload.current_unit_key);
        const metrics = calculateCourseMetrics(allUnits);
        return {
          ...state,
          courseInfo: action.payload,
          courseId: action.payload.course_id,
          allUnits,
          currentUnit,
          ...metrics
        };
      }
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };

    // Unit Navigation & Progress Actions
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_CURRENT_UNIT:
      return {
        ...state,
        currentUnit: action.payload
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };

    // Loading & Error States
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    // Review Related Actions
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_REVIEW:
      return {
        ...state,
        review: action.payload,
        reviewLoading: false,
        reviewError: null,
        hasReview: action.payload.comment_ID ? true : false
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_LOADING:
      return {
        ...state,
        reviewLoading: action.payload
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_ERROR:
      return {
        ...state,
        reviewError: action.payload,
        reviewLoading: false
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_MODAL_OPEN:
      return {
        ...state,
        reviewModalOpen: action.payload
      };

    // Course Completion Actions
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COURSE_COMPLETED:
      return {
        ...state,
        isCompleted: action.payload
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COMPLETION_MESSAGE:
      return {
        ...state,
        completionMessage: action.payload
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.MARK_UNIT_COMPLETE:
      {
        const updatedUnits = state.allUnits?.map(unit => unit.id === action.payload.unitId ? {
          ...unit,
          status: 1
        } : unit) || null;
        if (updatedUnits) {
          const metrics = calculateCourseMetrics(updatedUnits);
          return {
            ...state,
            allUnits: updatedUnits,
            ...metrics
          };
        }
        return state;
      }

    // Unit Navigation Actions
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.NEXT_UNIT:
      {
        var _state$allUnits$findI;
        const currentIndex = (_state$allUnits$findI = state.allUnits?.findIndex(unit => unit.id === state.currentUnit?.id)) !== null && _state$allUnits$findI !== void 0 ? _state$allUnits$findI : -1;
        const nextUnit = state.allUnits?.[currentIndex + 1];
        return {
          ...state,
          currentUnit: nextUnit ? nextUnit : state.currentUnit
        };
      }
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.PREV_UNIT:
      {
        var _state$allUnits$findI2;
        const currentIndex = (_state$allUnits$findI2 = state.allUnits?.findIndex(unit => unit.id === state.currentUnit?.id)) !== null && _state$allUnits$findI2 !== void 0 ? _state$allUnits$findI2 : -1;
        const prevUnit = state.allUnits?.[currentIndex - 1];
        return {
          ...state,
          currentUnit: prevUnit ? prevUnit : state.currentUnit
        };
      }
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_HAS_REVIEW:
      return {
        ...state,
        hasReview: action.payload
      };
    case _const__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_REVIEW_LIST:
      return {
        ...state,
        reviewList: action.payload
      };
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/store/resolvers.ts":
/*!********************************!*\
  !*** ./src/store/resolvers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/store/actions.ts");
/* harmony import */ var _utilities_apiCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/apiCall */ "./src/utilities/apiCall.ts");



const resolvers = {
  async getCourseInfo(courseId) {
    try {
      _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setLoading(true);
      const token = window.wplmsCustomCoursePlayer.token;
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_2__.fetchCourseData)({
        courseId,
        token
      });
      _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setError("");
      return _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setCourseInfo(response);
    } catch (error) {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setError(error instanceof Error ? error.message : String(error));
    }
  },
  async getCourseReview(courseId) {
    try {
      const token = window.wplmsCustomCoursePlayer.token;
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: `wplms-custom-course-player/v1/course-review/${courseId}`,
        method: "POST",
        data: {
          token,
          course_id: courseId
        }
      });
      console.log({
        response
      });
      return _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setCourseReview(response);
    } catch (error) {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setCourseReviewError(error instanceof Error ? error.message : String(error));
    }
  },
  async getReviewList(courseId) {
    try {
      const token = window.wplmsCustomCoursePlayer.token;
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_2__.getCourseReviews)({
        courseId,
        token
      });
      return _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setReviewList(response);
    } catch (error) {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setCourseReviewError(error instanceof Error ? error.message : String(error));
    }
  },
  async getUserInfo() {
    try {
      const token = window.wplmsCustomCoursePlayer.token;
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_2__.getUserInfo)(token);
      return _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setUserInfo(response);
    } catch (error) {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.actions.setError(error instanceof Error ? error.message : String(error));
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolvers);

/***/ }),

/***/ "./src/store/selectors.ts":
/*!********************************!*\
  !*** ./src/store/selectors.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   memoizedSelectors: () => (/* binding */ memoizedSelectors),
/* harmony export */   selectors: () => (/* binding */ selectors)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


// Type Definitions
// ---------------

// Course Related Selectors
// -----------------------
const selectors = {
  getCourseId(state) {
    return state.courseId;
  },
  getCourseTitle(state) {
    var _state$courseInfo$cou;
    return (_state$courseInfo$cou = state.courseInfo?.course_title) !== null && _state$courseInfo$cou !== void 0 ? _state$courseInfo$cou : null;
  },
  getCourseInfo(state, courseId) {
    return state.courseInfo;
  },
  isCourseInfoLoading(state) {
    return state.isLoading;
  },
  isCourseCompleted(state) {
    var _state$isCompleted;
    return (_state$isCompleted = state.isCompleted) !== null && _state$isCompleted !== void 0 ? _state$isCompleted : false;
  },
  getCompletionMessage(state) {
    return state.completionMessage;
  },
  // Unit Related Selectors
  // ---------------------
  getCurrentUnit(state) {
    return state.currentUnit;
  },
  getAllUnits(state) {
    return state.allUnits;
  },
  getCompletedUnits(state) {
    var _state$allUnits$filte;
    return (_state$allUnits$filte = state.allUnits?.filter(unit => unit.status === 1)) !== null && _state$allUnits$filte !== void 0 ? _state$allUnits$filte : [];
  },
  // Progress Related Selectors
  // -------------------------
  getProgress(state) {
    var _state$progress;
    return (_state$progress = state.progress) !== null && _state$progress !== void 0 ? _state$progress : 0;
  },
  getCompletedDuration(state) {
    return state.completedDuration;
  },
  getCourseTotalDuration(state) {
    return state.courseTotalDuration;
  },
  // User Related Selectors
  // ---------------------
  getUserInfo(state) {
    return state.userInfo;
  },
  // Review Related Selectors
  // -----------------------
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
    var _state$reviewModalOpe;
    return (_state$reviewModalOpe = state.reviewModalOpen) !== null && _state$reviewModalOpe !== void 0 ? _state$reviewModalOpe : false;
  },
  hasReview(state) {
    return state.hasReview;
  },
  getReviewList(state) {
    return state.reviewList;
  },
  // Loading & Error State Selectors
  // ------------------------------
  isLoading(state) {
    var _state$isLoading;
    return (_state$isLoading = state.isLoading) !== null && _state$isLoading !== void 0 ? _state$isLoading : false;
  },
  getError(state) {
    return state.error;
  },
  isLoadingCourseInfo(state, courseId) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)("core/data").isResolving("custom-course-player", "getCourseInfo", [courseId]);
  },
  isLoadingUserInfo(state) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)("core/data").isResolving("custom-course-player", "getUserInfo", []);
  },
  isLoadingReview(state, courseId) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)("core/data").isResolving("custom-course-player", "getCourseReview", [courseId]);
  }
};

// Types and Memoized Selectors
// ---------------------------

const memoizedSelectors = {
  getCompletedUnits: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)(state => state.allUnits, allUnits => {
    var _allUnits$filter;
    return (_allUnits$filter = allUnits?.filter(unit => unit.status === 1)) !== null && _allUnits$filter !== void 0 ? _allUnits$filter : [];
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectors);

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
/* harmony export */   getCourseReviews: () => (/* binding */ getCourseReviews),
/* harmony export */   getQuizData: () => (/* binding */ getQuizData),
/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),
/* harmony export */   markUnitComplete: () => (/* binding */ markUnitComplete),
/* harmony export */   submitCourseReview: () => (/* binding */ submitCourseReview)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/utilities/const.ts");


const fetchCourseData = async ({
  courseId,
  token
}) => {
  try {
    const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/user/coursestatus/${courseId}`,
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
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/user/coursestatus/${courseId}/item/${unitId}`,
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
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/user/getreview/${courseId}`,
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
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/updatecourse/addreview`,
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
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/user/`,
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
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/user/coursestatus/${courseId}/item/${unitId}/markcomplete`,
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
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.course_player_root}${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.course_progress}`,
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
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/user/finishcourse`,
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

// get course reviews
const getCourseReviews = async ({
  courseId,
  token
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "POST",
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.course_player_root}${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.get_reviews}/${courseId}`,
      data: {
        token
      }
    });
    return response;
  } catch (err) {
    console.error("Failed to get course reviews");
  }
};

// get quiz data
const getQuizData = async ({
  course,
  token,
  quizId
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "POST",
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/user/quiz/${quizId}`,
      data: {
        course,
        token
      }
    });
    return response;
  } catch (error) {
    console.error("Failed to get quiz data");
  }
};

/***/ }),

/***/ "./src/utilities/const.ts":
/*!********************************!*\
  !*** ./src/utilities/const.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_PATH: () => (/* binding */ API_PATH),
/* harmony export */   REVIEW_MILESTONES: () => (/* binding */ REVIEW_MILESTONES),
/* harmony export */   SIDEBAR_WIDTH: () => (/* binding */ SIDEBAR_WIDTH)
/* harmony export */ });
const REVIEW_MILESTONES = [15, 50, 100];
const SIDEBAR_WIDTH = "24rem";
const API_PATH = {
  wplms_root: "/wplms/v2",
  course_player_root: "/wplms-custom-course-player/v1",
  course_progress: "/course-progress",
  finish_course: "/finish-course",
  add_review: "/add-review",
  get_reviews: "/course-reviews"
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

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/FlagIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/FlagIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function FlagIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FlagIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/HandThumbDownIcon.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/HandThumbDownIcon.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function HandThumbDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HandThumbDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/HandThumbUpIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/HandThumbUpIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function HandThumbUpIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HandThumbUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function MagnifyingGlassIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MagnifyingGlassIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

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