/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/RootContainer.tsx":
/*!******************************************!*\
  !*** ./src/components/RootContainer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopBar */ "./src/components/TopBar/index.tsx");
/* harmony import */ var _course_CourseTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course/CourseTabs */ "./src/components/course/CourseTabs/index.tsx");
/* harmony import */ var _course_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course/content */ "./src/components/course/content/index.tsx");
/* harmony import */ var _course_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course/sidebar */ "./src/components/course/sidebar/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const RootContainer = ({
  courseId
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const token = localStorage.getItem('wplms_token');
  console.log({
    token
  });
  // Get dispatch actions
  const {
    fetchCourse
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('custom-course-player');

  // Get state from Redux store
  const {
    courseInfo,
    loading,
    error
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(select => ({
    courseInfo: select.getCourseInfo(parseInt(courseId)) || null,
    loading: select.isLoadingUserInfo() || false,
    error: select.getError() || null
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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_TopBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onToggleSidebar: toggleSidebar,
      isSidebarOpen: isSidebarOpen
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: `flex flex-1 overflow-hidden sm:pt-16`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex flex-1 flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_course_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isSidebarOpen: isSidebarOpen
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_course_CourseTabs__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
      }), courseInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_course_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/components/course/content/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/course/content/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store */ "./src/store/index.ts");
/* harmony import */ var _ContentArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentArea */ "./src/components/course/content/ContentArea.tsx");
/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz */ "./src/components/course/content/quiz/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Content = ({
  isSidebarOpen
}) => {
  const {
    currentUnit,
    courseId
  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useTypedSelect)(select => ({
    currentUnit: select.getCurrentUnit(),
    courseId: select.getCourseId()
  }), []);

  // quiz component

  if (currentUnit?.type === 'quiz') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_quiz__WEBPACK_IMPORTED_MODULE_3__["default"], {
      quizId: currentUnit.id,
      courseId: courseId !== null && courseId !== void 0 ? courseId : null
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ContentArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSidebarOpen: isSidebarOpen
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/components/course/content/quiz/ErrorState.tsx":
/*!***********************************************************!*\
  !*** ./src/components/course/content/quiz/ErrorState.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


// components/quiz/ErrorState.tsx

const ErrorState = ({
  error,
  onRetry
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  className: "bg-white rounded-lg shadow p-6",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "text-red-500 mb-4",
    children: error
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    onClick: onRetry,
    className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
    children: "Retry"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorState);

/***/ }),

/***/ "./src/components/course/content/quiz/LoadingState.tsx":
/*!*************************************************************!*\
  !*** ./src/components/course/content/quiz/LoadingState.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const LoadingState = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: "bg-white rounded-lg shadow p-6",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingState);

/***/ }),

/***/ "./src/components/course/content/quiz/MultiStepQuiz.tsx":
/*!**************************************************************!*\
  !*** ./src/components/course/content/quiz/MultiStepQuiz.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// components/quiz/MultiStepQuiz.tsx


const MultiStepQuiz = ({
  quizData,
  onSubmit,
  initialAnswers = {}
}) => {
  const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [answers, setAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialAnswers);
  const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(quizData.meta.duration);
  const totalSteps = quizData.meta.questions.length;
  const currentQuestion = quizData.meta.questions[currentStep];

  // Timer effect
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeRemaining]);
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  const handleAnswer = (questionKey, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionKey]: optionIndex
    }));
  };
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  const handleSubmit = () => {
    onSubmit(answers);
  };
  const handleJumpToQuestion = index => {
    setCurrentStep(index);
  };
  const isQuestionAnswered = questionKey => {
    return answers[questionKey] !== undefined;
  };
  const renderQuestion = question => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "space-y-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-lg font-medium",
      dangerouslySetInnerHTML: {
        __html: question.content
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "space-y-2",
      children: question.options.map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        onClick: () => handleAnswer(question.key, index),
        className: `w-full text-left p-4 rounded border transition-colors ${answers[question.key] === index ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50 border-gray-200'}`,
        children: option
      }, index))
    })]
  });
  const renderQuestionNav = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "fixed bottom-0 left-0 right-0 bg-white border-t",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "max-w-3xl mx-auto p-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "grid grid-cols-6 gap-2",
        children: quizData.meta.questions.map((question, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: () => handleJumpToQuestion(index),
          className: `p-2 rounded ${currentStep === index ? 'bg-blue-500 text-white' : isQuestionAnswered(question.key) ? 'bg-green-100' : 'bg-gray-100'}`,
          children: index + 1
        }, index))
      })
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "pb-24",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "bg-white border-b sticky top-0 z-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "max-w-3xl mx-auto p-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex justify-between items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
            className: "text-lg font-semibold",
            children: ["Question ", currentStep + 1, " of ", totalSteps]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "text-sm font-mono",
              children: ["Time: ", formatTime(timeRemaining)]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "text-sm",
              children: ["Score: ", Object.keys(answers).length, "/", totalSteps]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "mt-4 h-1 bg-gray-200 rounded-full overflow-hidden",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "h-full bg-blue-500 transition-all duration-300",
            style: {
              width: `${Object.keys(answers).length / totalSteps * 100}%`
            }
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "max-w-3xl mx-auto p-4",
      children: [renderQuestion(currentQuestion), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mt-6 flex justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: handlePrevious,
          disabled: currentStep === 0,
          className: "px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50",
          children: "Previous"
        }), currentStep === totalSteps - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: handleSubmit,
          className: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",
          children: "Submit Quiz"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: handleNext,
          disabled: currentStep === totalSteps - 1,
          className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",
          children: "Next"
        })]
      })]
    }), renderQuestionNav()]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiStepQuiz);

/***/ }),

/***/ "./src/components/course/content/quiz/QuizHeader.tsx":
/*!***********************************************************!*\
  !*** ./src/components/course/content/quiz/QuizHeader.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const QuizHeader = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "flex justify-between items-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      className: "text-xl font-bold",
      children: title
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizHeader);

/***/ }),

/***/ "./src/components/course/content/quiz/QuizQuestions.tsx":
/*!**************************************************************!*\
  !*** ./src/components/course/content/quiz/QuizQuestions.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuizHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizHeader */ "./src/components/course/content/quiz/QuizHeader.tsx");
/* harmony import */ var _MultiStepQuiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiStepQuiz */ "./src/components/course/content/quiz/MultiStepQuiz.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const QuizQuestions = ({
  quizData,
  onSubmit
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "p-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_QuizHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: quizData.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_MultiStepQuiz__WEBPACK_IMPORTED_MODULE_2__["default"], {
      quizData: quizData,
      onSubmit: onSubmit
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizQuestions);

/***/ }),

/***/ "./src/components/course/content/quiz/QuizResults.tsx":
/*!************************************************************!*\
  !*** ./src/components/course/content/quiz/QuizResults.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/esm/index.mjs");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icons */ "./src/components/icons/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const QuizResult = ({
  quizData,
  onRetake
}) => {
  const {
    title,
    meta: {
      marks,
      max,
      questions,
      retakes
    },
    tags_data
  } = quizData;
  const percentage = marks / max * 100;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "max-w-4xl mx-auto p-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "bg-white rounded-lg shadow p-6 mb-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex justify-between items-start mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
            className: "text-2xl font-semibold mb-2",
            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(title)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex gap-4 text-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              className: "font-medium",
              children: ["Score: ", marks, "/", max]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              className: "font-medium",
              children: ["Percentage: ", percentage.toFixed(1), "%"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              className: "font-medium",
              children: ["Retakes Available: ", retakes]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
            onClick: () => window.print(),
            className: "flex items-center gap-2 px-4 py-2 text-gray-600 border rounded hover:bg-gray-50",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.PrinterIcon, {
              className: "w-5 h-5"
            }), "Print Result"]
          }), retakes && retakes > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
            onClick: onRetake,
            className: "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.RetakeIcon, {
              className: "w-5 h-5"
            }), "Retake Quiz"]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "bg-white rounded-lg shadow p-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        className: "text-xl font-semibold mb-6",
        children: "Questions Review"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "space-y-8",
        children: questions.map((question, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "border-b last:border-b-0 pb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex justify-between items-start mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-lg mb-3",
                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(question.content)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [Number(question.marks) > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleIcon, {
                  className: "w-5 h-5 text-green-500"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.XCircleIcon, {
                  className: "w-5 h-5 text-red-500"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: Number(question.marks) > 0 ? "text-green-600" : "text-red-600",
                  children: [question.marks, "/", question.max_marks, " marks"]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              className: "text-sm text-gray-500 py-1 px-2 bg-gray-100 rounded",
              children: ["Question ", index + 1]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "space-y-3 text-gray-700 pl-4",
            children: [question.marked_answer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-sm font-medium block mb-1",
                children: "Your Answer:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pl-4 py-2 bg-gray-50 rounded",
                children: question.marked_answer
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-sm font-medium block mb-1",
                children: "Correct Answer:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pl-4 py-2 bg-gray-50 rounded",
                children: question.correct_answer
              })]
            }), question.explaination && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "text-sm font-medium block mb-1",
                children: "Explanation:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "pl-4 py-2 bg-gray-50 rounded",
                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(question.explaination)
              })]
            })]
          })]
        }, question.raw.key))
      })]
    }), tags_data && tags_data.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "bg-white rounded-lg shadow p-6 mt-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        className: "text-xl font-semibold mb-4",
        children: "Performance by Topic"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "space-y-4",
        children: tags_data.map((tag, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "min-w-[200px] text-gray-700",
            children: [tag.label, ":"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex-1 bg-gray-200 rounded-full h-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "bg-blue-600 h-2 rounded-full transition-all duration-500",
              style: {
                width: `${tag.value}%`
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "text-sm text-gray-600 w-16 text-right",
            children: [tag.value, "%"]
          })]
        }, index))
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizResult);

/***/ }),

/***/ "./src/components/course/content/quiz/QuizStart.tsx":
/*!**********************************************************!*\
  !*** ./src/components/course/content/quiz/QuizStart.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const QuizStart = ({
  quizData,
  onStart
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  className: "p-6",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
    className: "text-xl font-bold mb-4",
    children: quizData.title
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "mb-6 space-y-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["Total Questions: ", quizData.meta.questions.length]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["Duration: ", Math.floor(quizData.meta.duration / 60), " minutes"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["Maximum Score: ", quizData.meta.max]
    }), quizData.meta.quiz_passing_score > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["Passing Score: ", quizData.meta.quiz_passing_score, "%"]
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    onClick: onStart,
    className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
    children: "Start Quiz"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizStart);

/***/ }),

/***/ "./src/components/course/content/quiz/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/course/content/quiz/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizStep: () => (/* binding */ QuizStep),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/apiCall */ "./src/utilities/apiCall.ts");
/* harmony import */ var _QuizStart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizStart */ "./src/components/course/content/quiz/QuizStart.tsx");
/* harmony import */ var _QuizQuestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuizQuestions */ "./src/components/course/content/quiz/QuizQuestions.tsx");
/* harmony import */ var _QuizResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuizResults */ "./src/components/course/content/quiz/QuizResults.tsx");
/* harmony import */ var _LoadingState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoadingState */ "./src/components/course/content/quiz/LoadingState.tsx");
/* harmony import */ var _ErrorState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorState */ "./src/components/course/content/quiz/ErrorState.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
// components/quiz/QuizContainer.tsx








let QuizStep = /*#__PURE__*/function (QuizStep) {
  QuizStep["START"] = "start";
  QuizStep["QUESTIONS"] = "questions";
  QuizStep["RESULTS"] = "results";
  return QuizStep;
}({});
const QuizContainer = ({
  courseId,
  quizId
}) => {
  if (!courseId || !quizId) {
    return null;
  }
  const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(QuizStep.START);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const token = window.wplmsCustomCoursePlayer.token;
  const fetchQuizData = async () => {
    try {
      setLoading(true);
      const data = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.getQuizData)({
        course: courseId,
        quizId,
        token
      });
      setQuizData(data);
      if (data.submitted) {
        setCurrentStep(QuizStep.RESULTS);
      } else if (data.start) {
        setCurrentStep(QuizStep.QUESTIONS);
      }
    } catch (err) {
      setError('Failed to load quiz');
    } finally {
      setLoading(false);
    }
  };
  const onHandleRetake = async () => {
    try {
      setLoading(true);
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.quizRetake)({
        courseId,
        quizId,
        token
      });
      if (response.status) {
        await fetchQuizData();
        setCurrentStep(QuizStep.START);
      }
    } catch (err) {
      setError('Failed to start quiz');
    } finally {
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchQuizData();
  }, [courseId, quizId]);
  const handleStartQuiz = async () => {
    try {
      setLoading(true);
      const response = await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.startQuiz)({
        courseId,
        quizId,
        token
      });
      if (response.status) {
        await fetchQuizData();
        setCurrentStep(QuizStep.QUESTIONS);
      }
    } catch (err) {
      setError('Failed to start quiz');
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitQuiz = async answers => {
    if (!courseId || !quizData) {
      return;
    }
    try {
      setLoading(true);
      await (0,_utilities_apiCall__WEBPACK_IMPORTED_MODULE_1__.submitQuiz)({
        courseId,
        quizData,
        token,
        answers
      });
      await fetchQuizData();
      setCurrentStep(QuizStep.RESULTS);
    } catch (err) {
      setError('Failed to submit quiz');
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LoadingState__WEBPACK_IMPORTED_MODULE_5__["default"], {});
  }
  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ErrorState__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: error,
      onRetry: fetchQuizData
    });
  }
  if (!quizData) {
    return null;
  }
  const renderStep = () => {
    switch (currentStep) {
      case QuizStep.START:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_QuizStart__WEBPACK_IMPORTED_MODULE_2__["default"], {
          quizData: quizData,
          onStart: handleStartQuiz
        });
      case QuizStep.QUESTIONS:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_QuizQuestions__WEBPACK_IMPORTED_MODULE_3__["default"], {
          quizData: quizData,
          onSubmit: handleSubmitQuiz
        });
      case QuizStep.RESULTS:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_QuizResults__WEBPACK_IMPORTED_MODULE_4__["default"], {
          quizData: quizData,
          onRetake: onHandleRetake
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "bg-white rounded-lg shadow max-h-[400px] overflow-scroll",
    children: renderStep()
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizContainer);

/***/ }),

/***/ "./src/components/course/content/useContentArea.ts":
/*!*********************************************************!*\
  !*** ./src/components/course/content/useContentArea.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
    currentUnit,
    courseId,
    completedDuration,
    courseTotalDuration
  } = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useTypedSelect)(select => ({
    currentUnit: select.getCurrentUnit(),
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
    currentUnit: currentUnit !== null && currentUnit !== void 0 ? currentUnit : null,
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

"use strict";
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
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: `flex items-center p-4 cursor-pointer transition-colors
                   ${currentUnit?.id === unit.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
                   ${unit.status === 1 ? 'opacity-75' : ''}`,
    onClick: () => onSelectUnit(unit),
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
          if (unit.type == 'quiz' || unit.status === 1) return;
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnitItemView);

/***/ }),

/***/ "./src/components/course/sidebar/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/course/sidebar/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/components/course/sidebar/sections/CourseCompletionStatus.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/course/sidebar/sections/CourseCompletionStatus.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "space-y-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CourseCompletionStatus__WEBPACK_IMPORTED_MODULE_2__.CourseCompletionStatus, {
      isCompleted: isCompleted,
      completionMessage: completionMessage || '',
      onFinishCourse: handleFinishCourse
    }), sections.map((section, index) => {
      const stats = getSectionStats(section);
      const isExpanded = expandedSections.includes(index);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "border rounded-lg transition-colors border-gray-200",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SectionHeader__WEBPACK_IMPORTED_MODULE_3__.SectionHeader, {
          title: section.title,
          stats: stats,
          isExpanded: isExpanded,
          onClick: () => toggleSection(index)
        }), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "border-t border-gray-200",
          children: section.units.map(unit => {
            switch (unit.type) {
              case 'unit':
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Unit_UnitItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  unit: unit
                }, unit.id);
              default:
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Unit_UnitItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  unit: unit
                }, unit.id);
                ;
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/components/icons/index.tsx":
/*!****************************************!*\
  !*** ./src/components/icons/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckCircleIcon: () => (/* binding */ CheckCircleIcon),
/* harmony export */   PrinterIcon: () => (/* binding */ PrinterIcon),
/* harmony export */   RetakeIcon: () => (/* binding */ RetakeIcon),
/* harmony export */   XCircleIcon: () => (/* binding */ XCircleIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// icons/index.tsx



const CheckCircleIcon = ({
  className = "w-6 h-6"
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  })
});
const XCircleIcon = ({
  className = "w-6 h-6"
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  })
});
const PrinterIcon = ({
  className = "w-6 h-6"
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
  })
});
const RetakeIcon = ({
  className = "w-6 h-6"
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  })
});

/***/ }),

/***/ "./src/components/review/RatingStars.tsx":
/*!***********************************************!*\
  !*** ./src/components/review/RatingStars.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony export */   quizRetake: () => (/* binding */ quizRetake),
/* harmony export */   startQuiz: () => (/* binding */ startQuiz),
/* harmony export */   submitCourseReview: () => (/* binding */ submitCourseReview),
/* harmony export */   submitQuiz: () => (/* binding */ submitQuiz)
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
    throw error;
  }
};

// Start quiz
const startQuiz = async ({
  courseId,
  quizId,
  token
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/user/quiz/start`,
      method: "POST",
      data: {
        quiz_id: quizId,
        course: courseId,
        token
      }
    });
    return response;
  } catch (error) {
    console.error("Failed to start quiz");
    throw error;
  }
};
const submitQuiz = async ({
  courseId,
  quizData,
  answers,
  token
}) => {
  try {
    // Format questions with answers
    const questionsWithAnswers = quizData.meta.questions.map(question => ({
      ...question,
      attempted: answers[question.key] !== undefined,
      marked_answer: answers[question.key]?.toString(),
      marked: question.options[answers[question.key]] || ""
    }));
    const payload = {
      quiz_id: quizData.id,
      course_id: courseId,
      quiz: {
        ...quizData,
        meta: {
          ...quizData.meta,
          questions: questionsWithAnswers
        }
      },
      results: questionsWithAnswers,
      token
    };
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.course_player_root}/quiz-submit`,
      method: "POST",
      data: payload
    });
    return response;
  } catch (error) {
    console.error("Failed to submit quiz", error);
    throw error;
  }
};
// get quiz retake
const quizRetake = async ({
  courseId,
  quizId,
  token
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `${_const__WEBPACK_IMPORTED_MODULE_1__.API_PATH.wplms_root}/user/coursestatus/retake_single_quiz/${quizId}`,
      method: "POST",
      data: {
        course: courseId,
        token
      }
    });
    return response;
  } catch (error) {
    console.error("Failed to get quiz retake");
    throw error;
  }
};

/***/ }),

/***/ "./src/utilities/const.ts":
/*!********************************!*\
  !*** ./src/utilities/const.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ "./node_modules/domhandler/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/domhandler/lib/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomHandler = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var node_js_1 = __webpack_require__(/*! ./node.js */ "./node_modules/domhandler/lib/node.js");
__exportStar(__webpack_require__(/*! ./node.js */ "./node_modules/domhandler/lib/node.js"), exports);
// Default options
var defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
var DomHandler = /** @class */ (function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new node_js_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_js_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            var node = new node_js_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_js_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_js_1.Text("");
        var node = new node_js_1.CDATA([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_js_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports["default"] = DomHandler;


/***/ }),

/***/ "./node_modules/domhandler/lib/node.js":
/*!*********************************************!*\
  !*** ./node_modules/domhandler/lib/node.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    function Node() {
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param data The content of the data node
     */
    function DataNode(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Text;
        return _this;
    }
    Object.defineProperty(Text.prototype, "nodeType", {
        get: function () {
            return 3;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Comment;
        return _this;
    }
    Object.defineProperty(Comment.prototype, "nodeType", {
        get: function () {
            return 8;
        },
        enumerable: false,
        configurable: true
    });
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, data) || this;
        _this.name = name;
        _this.type = domelementtype_1.ElementType.Directive;
        return _this;
    }
    Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
var CDATA = /** @class */ (function (_super) {
    __extends(CDATA, _super);
    function CDATA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.CDATA;
        return _this;
    }
    Object.defineProperty(CDATA.prototype, "nodeType", {
        get: function () {
            return 4;
        },
        enumerable: false,
        configurable: true
    });
    return CDATA;
}(NodeWithChildren));
exports.CDATA = CDATA;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Root;
        return _this;
    }
    Object.defineProperty(Document.prototype, "nodeType", {
        get: function () {
            return 9;
        },
        enumerable: false,
        configurable: true
    });
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(Element.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES = void 0;
/**
 * SVG elements are case-sensitive.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element#svg_elements_a_to_z
 */
exports.CASE_SENSITIVE_TAG_NAMES = [
    'animateMotion',
    'animateTransform',
    'clipPath',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'foreignObject',
    'linearGradient',
    'radialGradient',
    'textPath',
];
exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES.reduce(function (accumulator, tagName) {
    accumulator[tagName.toLowerCase()] = tagName;
    return accumulator;
}, {});
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/domparser.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/domparser.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = domparser;
// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
// match-all-characters in case of newlines (DOTALL)
var HEAD_TAG_REGEX = /<head[^]*>/i;
var BODY_TAG_REGEX = /<body[^]*>/i;
// falls back to `parseFromString` if `createHTMLDocument` cannot be used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var parseFromDocument = function (html, tagName) {
    /* istanbul ignore next */
    throw new Error('This browser does not support `document.implementation.createHTMLDocument`');
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var parseFromString = function (html, tagName) {
    /* istanbul ignore next */
    throw new Error('This browser does not support `DOMParser.prototype.parseFromString`');
};
var DOMParser = typeof window === 'object' && window.DOMParser;
/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
if (typeof DOMParser === 'function') {
    var domParser_1 = new DOMParser();
    var mimeType_1 = 'text/html';
    /**
     * Creates an HTML document using `DOMParser.parseFromString`.
     *
     * @param html - The HTML string.
     * @param tagName - The element to render the HTML (with 'body' as fallback).
     * @returns - Document.
     */
    parseFromString = function (html, tagName) {
        if (tagName) {
            /* istanbul ignore next */
            html = "<".concat(tagName, ">").concat(html, "</").concat(tagName, ">");
        }
        return domParser_1.parseFromString(html, mimeType_1);
    };
    parseFromDocument = parseFromString;
}
/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
if (typeof document === 'object' && document.implementation) {
    var htmlDocument_1 = document.implementation.createHTMLDocument();
    /**
     * Use HTML document created by `document.implementation.createHTMLDocument`.
     *
     * @param html - The HTML string.
     * @param tagName - The element to render the HTML (with 'body' as fallback).
     * @returns - Document
     */
    parseFromDocument = function (html, tagName) {
        if (tagName) {
            var element = htmlDocument_1.documentElement.querySelector(tagName);
            if (element) {
                element.innerHTML = html;
            }
            return htmlDocument_1;
        }
        htmlDocument_1.documentElement.innerHTML = html;
        return htmlDocument_1;
    };
}
/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var template = typeof document === 'object' && document.createElement('template');
var parseFromTemplate;
if (template && template.content) {
    /**
     * Uses a template element (content fragment) to parse HTML.
     *
     * @param html - HTML string.
     * @returns - Nodes.
     */
    parseFromTemplate = function (html) {
        template.innerHTML = html;
        return template.content.childNodes;
    };
}
/**
 * Parses HTML string to DOM nodes.
 *
 * @param html - HTML markup.
 * @returns - DOM nodes.
 */
function domparser(html) {
    var _a, _b;
    var match = html.match(FIRST_TAG_REGEX);
    var firstTagName = match && match[1] ? match[1].toLowerCase() : '';
    switch (firstTagName) {
        case HTML: {
            var doc = parseFromString(html);
            // the created document may come with filler head/body elements,
            // so make sure to remove them if they don't actually exist
            if (!HEAD_TAG_REGEX.test(html)) {
                var element = doc.querySelector(HEAD);
                (_a = element === null || element === void 0 ? void 0 : element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
            }
            if (!BODY_TAG_REGEX.test(html)) {
                var element = doc.querySelector(BODY);
                (_b = element === null || element === void 0 ? void 0 : element.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(element);
            }
            return doc.querySelectorAll(HTML);
        }
        case HEAD:
        case BODY: {
            var elements = parseFromDocument(html).querySelectorAll(firstTagName);
            // if there's a sibling element, then return both elements
            if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
                return elements[0].parentNode.childNodes;
            }
            return elements;
        }
        // low-level tag or text
        default: {
            if (parseFromTemplate) {
                return parseFromTemplate(html);
            }
            var element = parseFromDocument(html, BODY).querySelector(BODY);
            return element.childNodes;
        }
    }
}
//# sourceMappingURL=domparser.js.map

/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/html-to-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/html-to-dom.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = HTMLDOMParser;
var domparser_1 = __importDefault(__webpack_require__(/*! ./domparser */ "./node_modules/html-dom-parser/lib/client/domparser.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/client/utilities.js");
var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>
/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param html - HTML markup.
 * @returns - DOM elements.
 */
function HTMLDOMParser(html) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    // match directive
    var match = html.match(DIRECTIVE_REGEX);
    var directive = match ? match[1] : undefined;
    return (0, utilities_1.formatDOM)((0, domparser_1.default)(html), null, directive);
}
//# sourceMappingURL=html-to-dom.js.map

/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/utilities.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatAttributes = formatAttributes;
exports.formatDOM = formatDOM;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/html-dom-parser/lib/client/constants.js");
/**
 * Gets case-sensitive tag name.
 *
 * @param tagName - Tag name in lowercase.
 * @returns - Case-sensitive tag name.
 */
function getCaseSensitiveTagName(tagName) {
    return constants_1.CASE_SENSITIVE_TAG_NAMES_MAP[tagName];
}
/**
 * Formats DOM attributes to a hash map.
 *
 * @param attributes - List of attributes.
 * @returns - Map of attribute name to value.
 */
function formatAttributes(attributes) {
    var map = {};
    var index = 0;
    var attributesLength = attributes.length;
    // `NamedNodeMap` is array-like
    for (; index < attributesLength; index++) {
        var attribute = attributes[index];
        map[attribute.name] = attribute.value;
    }
    return map;
}
/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param tagName - Lowercase tag name.
 * @returns - Formatted tag name.
 */
function formatTagName(tagName) {
    tagName = tagName.toLowerCase();
    var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
    if (caseSensitiveTagName) {
        return caseSensitiveTagName;
    }
    return tagName;
}
/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param nodes - DOM nodes.
 * @param parent - Parent node.
 * @param directive - Directive.
 * @returns - Nodes.
 */
function formatDOM(nodes, parent, directive) {
    if (parent === void 0) { parent = null; }
    var domNodes = [];
    var current;
    var index = 0;
    var nodesLength = nodes.length;
    for (; index < nodesLength; index++) {
        var node = nodes[index];
        // set the node data given the type
        switch (node.nodeType) {
            case 1: {
                var tagName = formatTagName(node.nodeName);
                // script, style, or tag
                current = new domhandler_1.Element(tagName, formatAttributes(node.attributes));
                current.children = formatDOM(
                // template children are on content
                tagName === 'template'
                    ? node.content.childNodes
                    : node.childNodes, current);
                break;
            }
            case 3:
                current = new domhandler_1.Text(node.nodeValue);
                break;
            case 8:
                current = new domhandler_1.Comment(node.nodeValue);
                break;
            default:
                continue;
        }
        // set previous node next
        var prev = domNodes[index - 1] || null;
        if (prev) {
            prev.next = current;
        }
        // set properties for current node
        current.parent = parent;
        current.prev = prev;
        current.next = null;
        domNodes.push(current);
    }
    if (directive) {
        current = new domhandler_1.ProcessingInstruction(directive.substring(0, directive.indexOf(' ')).toLowerCase(), directive);
        current.next = domNodes[0] || null;
        current.parent = parent;
        domNodes.unshift(current);
        if (domNodes[1]) {
            domNodes[1].prev = domNodes[0];
        }
    }
    return domNodes;
}
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "./node_modules/html-react-parser/lib/attributes-to-props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/attributes-to-props.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = attributesToProps;
var react_property_1 = __webpack_require__(/*! react-property */ "./node_modules/react-property/lib/index.js");
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");
// https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
// https://developer.mozilla.org/docs/Web/HTML/Attributes
var UNCONTROLLED_COMPONENT_ATTRIBUTES = ['checked', 'value'];
var UNCONTROLLED_COMPONENT_NAMES = ['input', 'select', 'textarea'];
var valueOnlyInputs = {
    reset: true,
    submit: true,
};
/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param attributes - HTML/SVG DOM attributes.
 * @param nodeName - DOM node name.
 * @returns - React props.
 */
function attributesToProps(attributes, nodeName) {
    if (attributes === void 0) { attributes = {}; }
    var props = {};
    var isInputValueOnly = Boolean(attributes.type && valueOnlyInputs[attributes.type]);
    for (var attributeName in attributes) {
        var attributeValue = attributes[attributeName];
        // ARIA (aria-*) or custom data (data-*) attribute
        if ((0, react_property_1.isCustomAttribute)(attributeName)) {
            props[attributeName] = attributeValue;
            continue;
        }
        // convert HTML/SVG attribute to React prop
        var attributeNameLowerCased = attributeName.toLowerCase();
        var propName = getPropName(attributeNameLowerCased);
        if (propName) {
            var propertyInfo = (0, react_property_1.getPropertyInfo)(propName);
            // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
            if (UNCONTROLLED_COMPONENT_ATTRIBUTES.includes(propName) &&
                UNCONTROLLED_COMPONENT_NAMES.includes(nodeName) &&
                !isInputValueOnly) {
                propName = getPropName('default' + attributeNameLowerCased);
            }
            props[propName] = attributeValue;
            switch (propertyInfo && propertyInfo.type) {
                case react_property_1.BOOLEAN:
                    props[propName] = true;
                    break;
                case react_property_1.OVERLOADED_BOOLEAN:
                    if (attributeValue === '') {
                        props[propName] = true;
                    }
                    break;
            }
            continue;
        }
        // preserve custom attribute if React >=16
        if (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES) {
            props[attributeName] = attributeValue;
        }
    }
    // transform inline style to object
    (0, utilities_1.setStyleProp)(attributes.style, props);
    return props;
}
/**
 * Gets prop name from lowercased attribute name.
 *
 * @param attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */
function getPropName(attributeName) {
    return react_property_1.possibleStandardNames[attributeName];
}
//# sourceMappingURL=attributes-to-props.js.map

/***/ }),

/***/ "./node_modules/html-react-parser/lib/dom-to-react.js":
/*!************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/dom-to-react.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = domToReact;
var react_1 = __webpack_require__(/*! react */ "react");
var attributes_to_props_1 = __importDefault(__webpack_require__(/*! ./attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");
var React = {
    cloneElement: react_1.cloneElement,
    createElement: react_1.createElement,
    isValidElement: react_1.isValidElement,
};
/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param nodes - DOM nodes.
 * @param options - Options.
 * @returns - String or JSX element(s).
 */
function domToReact(nodes, options) {
    if (options === void 0) { options = {}; }
    var reactElements = [];
    var hasReplace = typeof options.replace === 'function';
    var transform = options.transform || utilities_1.returnFirstArg;
    var _a = options.library || React, cloneElement = _a.cloneElement, createElement = _a.createElement, isValidElement = _a.isValidElement;
    var nodesLength = nodes.length;
    for (var index = 0; index < nodesLength; index++) {
        var node = nodes[index];
        // replace with custom React element (if present)
        if (hasReplace) {
            var replaceElement = options.replace(node, index);
            if (isValidElement(replaceElement)) {
                // set "key" prop for sibling elements
                // https://react.dev/learn/rendering-lists#rules-of-keys
                if (nodesLength > 1) {
                    replaceElement = cloneElement(replaceElement, {
                        key: replaceElement.key || index,
                    });
                }
                reactElements.push(transform(replaceElement, node, index));
                continue;
            }
        }
        if (node.type === 'text') {
            var isWhitespace = !node.data.trim().length;
            // We have a whitespace node that can't be nested in its parent
            // so skip it
            if (isWhitespace &&
                node.parent &&
                !(0, utilities_1.canTextBeChildOfNode)(node.parent)) {
                continue;
            }
            // Trim is enabled and we have a whitespace node
            // so skip it
            if (options.trim && isWhitespace) {
                continue;
            }
            // We have a text node that's not whitespace and it can be nested
            // in its parent so add it to the results
            reactElements.push(transform(node.data, node, index));
            continue;
        }
        var element = node;
        var props = {};
        if (skipAttributesToProps(element)) {
            (0, utilities_1.setStyleProp)(element.attribs.style, element.attribs);
            props = element.attribs;
        }
        else if (element.attribs) {
            props = (0, attributes_to_props_1.default)(element.attribs, element.name);
        }
        var children = void 0;
        switch (node.type) {
            case 'script':
            case 'style':
                // prevent text in <script> or <style> from being escaped
                // https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
                if (node.children[0]) {
                    props.dangerouslySetInnerHTML = {
                        __html: node.children[0].data,
                    };
                }
                break;
            case 'tag':
                // setting textarea value in children is an antipattern in React
                // https://react.dev/reference/react-dom/components/textarea#caveats
                if (node.name === 'textarea' && node.children[0]) {
                    props.defaultValue = node.children[0].data;
                }
                else if (node.children && node.children.length) {
                    // continue recursion of creating React elements (if applicable)
                    children = domToReact(node.children, options);
                }
                break;
            // skip all other cases (e.g., comment)
            default:
                continue;
        }
        // set "key" prop for sibling elements
        // https://react.dev/learn/rendering-lists#rules-of-keys
        if (nodesLength > 1) {
            props.key = index;
        }
        reactElements.push(transform(createElement(node.name, props, children), node, index));
    }
    return reactElements.length === 1 ? reactElements[0] : reactElements;
}
/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param node - Element node.
 * @returns - Whether the node attributes should be converted to props.
 */
function skipAttributesToProps(node) {
    return (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES &&
        node.type === 'tag' &&
        (0, utilities_1.isCustomComponent)(node.name, node.attribs));
}
//# sourceMappingURL=dom-to-react.js.map

/***/ }),

/***/ "./node_modules/html-react-parser/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/html-react-parser/lib/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.htmlToDOM = exports.domToReact = exports.attributesToProps = exports.Text = exports.ProcessingInstruction = exports.Element = exports.Comment = void 0;
exports["default"] = HTMLReactParser;
var html_dom_parser_1 = __importDefault(__webpack_require__(/*! html-dom-parser */ "./node_modules/html-dom-parser/lib/client/html-to-dom.js"));
exports.htmlToDOM = html_dom_parser_1.default;
var attributes_to_props_1 = __importDefault(__webpack_require__(/*! ./attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js"));
exports.attributesToProps = attributes_to_props_1.default;
var dom_to_react_1 = __importDefault(__webpack_require__(/*! ./dom-to-react */ "./node_modules/html-react-parser/lib/dom-to-react.js"));
exports.domToReact = dom_to_react_1.default;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
Object.defineProperty(exports, "Comment", ({ enumerable: true, get: function () { return domhandler_1.Comment; } }));
Object.defineProperty(exports, "Element", ({ enumerable: true, get: function () { return domhandler_1.Element; } }));
Object.defineProperty(exports, "ProcessingInstruction", ({ enumerable: true, get: function () { return domhandler_1.ProcessingInstruction; } }));
Object.defineProperty(exports, "Text", ({ enumerable: true, get: function () { return domhandler_1.Text; } }));
var domParserOptions = { lowerCaseAttributeNames: false };
/**
 * Converts HTML string to React elements.
 *
 * @param html - HTML string.
 * @param options - Parser options.
 * @returns - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    return (0, dom_to_react_1.default)((0, html_dom_parser_1.default)(html, (options === null || options === void 0 ? void 0 : options.htmlparser2) || domParserOptions), options);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/html-react-parser/lib/utilities.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-react-parser/lib/utilities.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnFirstArg = exports.canTextBeChildOfNode = exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = exports.PRESERVE_CUSTOM_ATTRIBUTES = void 0;
exports.isCustomComponent = isCustomComponent;
exports.setStyleProp = setStyleProp;
var react_1 = __webpack_require__(/*! react */ "react");
var style_to_js_1 = __importDefault(__webpack_require__(/*! style-to-js */ "./node_modules/style-to-js/cjs/index.js"));
var RESERVED_SVG_MATHML_ELEMENTS = new Set([
    'annotation-xml',
    'color-profile',
    'font-face',
    'font-face-src',
    'font-face-uri',
    'font-face-format',
    'font-face-name',
    'missing-glyph',
]);
/**
 * Check if a tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param tagName - Tag name.
 * @param props - Props passed to the element.
 * @returns - Whether the tag is custom component.
 */
function isCustomComponent(tagName, props) {
    if (!tagName.includes('-')) {
        return Boolean(props && typeof props.is === 'string');
    }
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    if (RESERVED_SVG_MATHML_ELEMENTS.has(tagName)) {
        return false;
    }
    return true;
}
var styleOptions = {
    reactCompat: true,
};
/**
 * Sets style prop.
 *
 * @param style - Inline style.
 * @param props - Props object.
 */
function setStyleProp(style, props) {
    if (typeof style !== 'string') {
        return;
    }
    if (!style.trim()) {
        props.style = {};
        return;
    }
    try {
        props.style = (0, style_to_js_1.default)(style, styleOptions);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        props.style = {};
    }
}
/**
 * @see https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
 */
exports.PRESERVE_CUSTOM_ATTRIBUTES = Number(react_1.version.split('.')[0]) >= 16;
/**
 * @see https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
 */
exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
    'tr',
    'tbody',
    'thead',
    'tfoot',
    'colgroup',
    'table',
    'head',
    'html',
    'frameset',
]);
/**
 * Checks if the given node can contain text nodes
 *
 * @param node - Element node.
 * @returns - Whether the node can contain text nodes.
 */
var canTextBeChildOfNode = function (node) {
    return !exports.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(node.name);
};
exports.canTextBeChildOfNode = canTextBeChildOfNode;
/**
 * Returns the first argument as is.
 *
 * @param arg - The argument to be returned.
 * @returns - The input argument `arg`.
 */
var returnFirstArg = function (arg) { return arg; };
exports.returnFirstArg = returnFirstArg;
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/***/ ((module) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function (style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

/***/ "./node_modules/react-property/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-property/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
const RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.
const STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
const BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
const BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
const OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
const NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
const POSITIVE_NUMERIC = 6;

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(
  name,
  type,
  mustUseProperty,
  attributeName,
  attributeNamespace,
  sanitizeURL,
  removeEmptyString,
) {
  this.acceptsBooleans =
    type === BOOLEANISH_STRING ||
    type === BOOLEAN ||
    type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
const properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
const reservedProps = [
  'children',
  'dangerouslySetInnerHTML',
  // TODO: This prevents the assignment of defaultValue to regular
  // elements (not just inputs). Now that ReactDOMInput assigns to the
  // defaultValue property -- do we need this?
  'defaultValue',
  'defaultChecked',
  'innerHTML',
  'suppressContentEditableWarning',
  'suppressHydrationWarning',
  'style',
];

reservedProps.forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    RESERVED,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(([name, attributeName]) => {
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEANISH_STRING,
    false, // mustUseProperty
    name.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEANISH_STRING,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML boolean attributes.
[
  'allowFullScreen',
  'async',
  // Note: there is a special case that prevents it from being written to the DOM
  // on the client side because the browsers are inconsistent. Instead we call focus().
  'autoFocus',
  'autoPlay',
  'controls',
  'default',
  'defer',
  'disabled',
  'disablePictureInPicture',
  'disableRemotePlayback',
  'formNoValidate',
  'hidden',
  'loop',
  'noModule',
  'noValidate',
  'open',
  'playsInline',
  'readOnly',
  'required',
  'reversed',
  'scoped',
  'seamless',
  // Microdata
  'itemScope',
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEAN,
    false, // mustUseProperty
    name.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
[
  'checked',
  // Note: `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`. We have special logic for handling this.
  'multiple',
  'muted',
  'selected',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEAN,
    true, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
[
  'capture',
  'download',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    OVERLOADED_BOOLEAN,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML attributes that must be positive numbers.
[
  'cols',
  'rows',
  'size',
  'span',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    POSITIVE_NUMERIC,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    NUMERIC,
    false, // mustUseProperty
    name.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

const CAMELIZE = /[\-\:]([a-z])/g;
const capitalize = token => token[1].toUpperCase();

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
[
  'accent-height',
  'alignment-baseline',
  'arabic-form',
  'baseline-shift',
  'cap-height',
  'clip-path',
  'clip-rule',
  'color-interpolation',
  'color-interpolation-filters',
  'color-profile',
  'color-rendering',
  'dominant-baseline',
  'enable-background',
  'fill-opacity',
  'fill-rule',
  'flood-color',
  'flood-opacity',
  'font-family',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-weight',
  'glyph-name',
  'glyph-orientation-horizontal',
  'glyph-orientation-vertical',
  'horiz-adv-x',
  'horiz-origin-x',
  'image-rendering',
  'letter-spacing',
  'lighting-color',
  'marker-end',
  'marker-mid',
  'marker-start',
  'overline-position',
  'overline-thickness',
  'paint-order',
  'panose-1',
  'pointer-events',
  'rendering-intent',
  'shape-rendering',
  'stop-color',
  'stop-opacity',
  'strikethrough-position',
  'strikethrough-thickness',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'text-anchor',
  'text-decoration',
  'text-rendering',
  'underline-position',
  'underline-thickness',
  'unicode-bidi',
  'unicode-range',
  'units-per-em',
  'v-alphabetic',
  'v-hanging',
  'v-ideographic',
  'v-mathematical',
  'vector-effect',
  'vert-adv-y',
  'vert-origin-x',
  'vert-origin-y',
  'word-spacing',
  'writing-mode',
  'xmlns:xlink',
  'x-height',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(attributeName => {
  const name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName,
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// String SVG attributes with the xlink namespace.
[
  'xlink:actuate',
  'xlink:arcrole',
  'xlink:role',
  'xlink:show',
  'xlink:title',
  'xlink:type',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(attributeName => {
  const name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName,
    'http://www.w3.org/1999/xlink',
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// String SVG attributes with the xml namespace.
[
  'xml:base',
  'xml:lang',
  'xml:space',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(attributeName => {
  const name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName,
    'http://www.w3.org/XML/1998/namespace',
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
['tabIndex', 'crossOrigin'].forEach(attributeName => {
  properties[attributeName] = new PropertyInfoRecord(
    attributeName,
    STRING,
    false, // mustUseProperty
    attributeName.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.
const xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord(
  'xlinkHref',
  STRING,
  false, // mustUseProperty
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  true, // sanitizeURL
  false, // removeEmptyString
);

['src', 'href', 'action', 'formAction'].forEach(attributeName => {
  properties[attributeName] = new PropertyInfoRecord(
    attributeName,
    STRING,
    false, // mustUseProperty
    attributeName.toLowerCase(), // attributeName
    null, // attributeNamespace
    true, // sanitizeURL
    true, // removeEmptyString
  );
});

// 
const {
  CAMELCASE,
  SAME,
  possibleStandardNames: possibleStandardNamesOptimized
} = __webpack_require__(/*! ../lib/possibleStandardNamesOptimized */ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js");

const ATTRIBUTE_NAME_START_CHAR =
  ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';

const ATTRIBUTE_NAME_CHAR =
  ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

/**
 * Checks whether a property name is a custom attribute.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25
 *
 * @type {(attribute: string) => boolean}
 */
const isCustomAttribute =
  RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')
  );

/**
 * @type {Record<string, string>}
 */
const possibleStandardNames = Object.keys(
  possibleStandardNamesOptimized
).reduce((accumulator, standardName) => {
  const propName = possibleStandardNamesOptimized[standardName];
  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }
  return accumulator;
}, {});

exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;


/***/ }),

/***/ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-property/lib/possibleStandardNamesOptimized.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;

// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;

exports.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};


/***/ }),

/***/ "./node_modules/style-to-js/cjs/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-js/cjs/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var style_to_object_1 = __importDefault(__webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/cjs/index.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/style-to-js/cjs/utilities.js");
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function (property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
StyleToJS.default = StyleToJS;
module.exports = StyleToJS;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/style-to-js/cjs/utilities.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-js/cjs/utilities.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */
var capitalize = function (match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */
var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
/**
 * CamelCases a CSS property.
 */
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    }
    else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase;
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "./node_modules/style-to-object/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-object/cjs/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = StyleToObject;
var inline_style_parser_1 = __importDefault(__webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js"));
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */
function StyleToObject(style, iterator) {
    var styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    var declarations = (0, inline_style_parser_1.default)(style);
    var hasIterator = typeof iterator === 'function';
    declarations.forEach(function (declaration) {
        if (declaration.type !== 'declaration') {
            return;
        }
        var property = declaration.property, value = declaration.value;
        if (hasIterator) {
            iterator(property, value, declaration);
        }
        else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/FlagIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/FlagIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ }),

/***/ "./node_modules/html-react-parser/esm/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/html-react-parser/esm/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Comment: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   Element: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   ProcessingInstruction: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.ProcessingInstruction),
/* harmony export */   Text: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   attributesToProps: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.attributesToProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   domToReact: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.domToReact),
/* harmony export */   htmlToDOM: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.htmlToDOM)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/index.js */ "./node_modules/html-react-parser/lib/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_index_js__WEBPACK_IMPORTED_MODULE_0__["default"] || _lib_index_js__WEBPACK_IMPORTED_MODULE_0__);


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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