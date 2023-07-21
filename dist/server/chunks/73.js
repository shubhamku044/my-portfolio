exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 9760:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23))

/***/ }),

/***/ 7573:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6362));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5739));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3129))

/***/ }),

/***/ 5739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6182);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7098);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const experienceData = [
    {
        id: 0,
        title: "Job 1",
        company: "Company 1",
        location: "Location 1",
        startDate: "Start Date 1",
        endDate: "End Date 1",
        description: [
            "Description 1",
            "Description 2",
            "Description 3",
            "Description 4",
            "Description 5"
        ]
    },
    {
        id: 1,
        title: "Job 2",
        company: "Company 2",
        location: "Location 2",
        startDate: "Start Date 2",
        endDate: "End Date 2",
        description: [
            "Description 1",
            "Description 2",
            "Description 3",
            "Description 4",
            "Description 5"
        ]
    },
    {
        id: 2,
        title: "Job ",
        company: "Company 3",
        location: "Location 3",
        startDate: "Start Date 3",
        endDate: "End Date 3",
        description: [
            "Description 1",
            "Description 2",
            "Description 3",
            "Description 4",
            "Description 5"
        ]
    },
    {
        id: 3,
        title: "Job three",
        company: "Company 3",
        location: "Location 3",
        startDate: "Start Date 3",
        endDate: "End Date 3",
        description: [
            "Description 1",
            "Description 2",
            "Description 3",
            "Description 4",
            "Description 5"
        ]
    },
    {
        id: 4,
        title: "Job four",
        company: "Company 3",
        location: "Location 3",
        startDate: "Start Date 3",
        endDate: "End Date 3",
        description: [
            "Description 1",
            "Description 2",
            "Description 3",
            "Description 4",
            "Description 5"
        ]
    },
    {
        id: 5,
        title: "Job five",
        company: "Company 3",
        location: "Location 3",
        startDate: "Start Date 3",
        endDate: "End Date 3",
        description: [
            "Description 1",
            "Description 2",
            "Description 3",
            "Description 4",
            "Description 5"
        ]
    }
];
const Experience = ()=>{
    const [activeJob, setActiveJob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(experienceData[experienceData.length - 1]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col sm:flex-row gap-4 sm:gap-6 min-h-[14rem]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row scrollbar scrollbar-track-gray-700 scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin overflow-x-auto sm:flex-col pb-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .LayoutGroup */ .S, {
                    id: "a",
                    children: experienceData.slice(0).reverse().map((job)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: `px-6 min-w-[110px] sm:min-w-0 outline-none relative flex justify-center sm:justify-start py-2 border-b-2 sm:border-b-0 sm:border-l-2 border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 ${activeJob.id === job.id && "bg-gray-200 dark:bg-gray-800"}`,
                            onClick: ()=>setActiveJob(job),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: job.title
                                }),
                                activeJob.id === job.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                    className: "absolute -bottom-[2px] sm:top-0 z-10 left-0 sm:-left-[2px] w-full h-[2px] sm:w-[2px] sm:h-full bg-blue-500 dark:bg-blue-500",
                                    layoutId: "underline"
                                })
                            ]
                        }, job.id))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                            className: "text-xl font-semibold",
                            children: [
                                activeJob.title,
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    className: "text-blue-500",
                                    children: [
                                        "@",
                                        activeJob.company
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex text-sm text-gray-500 dark:text-gray-400 justify-between mt-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        activeJob.startDate,
                                        " - ",
                                        activeJob.endDate
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: activeJob.location
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "ml-6 mt-4 space-y-2",
                            children: activeJob.description.map((desc, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "relative text-sm dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: desc
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "absolute top-1/2 -translate-y-1/2 -left-4 w-2 h-2 bg-gray-300 dark:bg-gray-600",
                                            style: {
                                                clipPath: "polygon(100% 50%, 0 0, 0 100%)"
                                            }
                                        })
                                    ]
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);


/***/ }),

/***/ 6362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5105);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(930);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2717);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6182);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7098);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6249);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 









const styles = {
    rowEl: "flex items-center",
    navLink: "px-4 py-2 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 pointer transition-all ease-out duration-300",
    activeLink: "bg-gray-300 dark:bg-gray-700"
};
var ETheme;
(function(ETheme) {
    ETheme["Dark"] = "dark";
    ETheme["Light"] = "light";
})(ETheme || (ETheme = {}));
const navItems = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "Blogs",
        path: "/blog"
    },
    {
        id: 3,
        name: "Contact",
        path: "/contact"
    }
];
const Header = ()=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ETheme.Dark);
    const [currPath, setCurrPath] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("/" || 0);
    const [navOpen, setNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleTheme = ()=>{
        if (theme === ETheme.Dark) {
            setTheme(ETheme.Light);
        } else {
            setTheme(ETheme.Dark);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (theme === ETheme.Dark) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    }, [
        theme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const audio = new Audio("/pop_sound_2.mp3");
        if (location.pathname !== currPath) {
            audio.currentTime = 0.31;
            audio.volume = 0.3;
            audio.play();
            setCurrPath(location.pathname);
        }
    }, [
        pathname,
        currPath
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-3xl sm:border-gray-400 dark:border-gray-800 border-b sm:border bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm fixed w-full sm:w-11/12 left-1/2 top-0 sm:top-auto select-none -translate-x-1/2 px-4 py-3 sm:rounded-md mx-auto flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${styles.rowEl} space-x-5`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hover:bg-gray-200 dark:hover:bg-gray-800 p-2 duration-300 transition-all ease-out rounded-md cursor-pointer",
                                onClick: toggleTheme,
                                children: theme === ETheme.Light ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__/* .FiMoon */ .wOW, {
                                    className: "w-4 h-4"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__/* .FiSun */ .kXG, {
                                    className: "w-4 h-4"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: `${styles.rowEl} hidden sm:flex space-x-2`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .LayoutGroup */ .S, {
                                    id: "b",
                                    children: navItems.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            onClick: ()=>{},
                                            href: item.path,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "cursor-pointer",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `${styles.navLink} relative`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "z-10 relative",
                                                            children: item.name
                                                        }),
                                                        currPath === item.path && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .motion */ .E.div, {
                                                            className: `absolute rounded-md top-0 left-0 h-full w-full ${styles.activeLink}`,
                                                            layoutId: "underline"
                                                        })
                                                    ]
                                                })
                                            }, item.id)
                                        }, item.id))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: `${styles.rowEl} hidden sm:flex space-x-4`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            arrow: true,
                                            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Github"
                                            }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__/* .BsGithub */ .rFR, {
                                                    className: "w-6 h-6"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            arrow: true,
                                            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Tiwtter"
                                            }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__/* .BsTwitter */ .meP, {
                                                    className: "w-6 h-6"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            arrow: true,
                                            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "LinkedIn"
                                            }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__/* .BsLinkedin */ .NQh, {
                                                    className: "w-6 h-6"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            arrow: true,
                                            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Email"
                                            }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__/* .BsEnvelope */ .lZw, {
                                                    className: "w-6 h-6"
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            !navOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_10__/* .HiMenuAlt3 */ .Cq1, {
                                className: "w-8 h-8 sm:hidden cursor-pointer",
                                onClick: ()=>{
                                    setNavOpen((prv)=>!prv);
                                }
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_10__/* .HiOutlineX */ .fMW, {
                                className: "w-8 h-8 sm:hidden cursor-pointer",
                                onClick: ()=>{
                                    setNavOpen((prv)=>!prv);
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${!navOpen ? "hidden" : "block"} sm:hidden fixed top-[58px] left-0 w-full h-64 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm z-10`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center justify-center h-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex flex-col space-y-4 items-center",
                            children: navItems.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: item.name
                                    })
                                }, item.id))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex space-x-4 mt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__/* .BsGithub */ .rFR, {
                                            className: "w-6 h-6"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__/* .BsTwitter */ .meP, {
                                            className: "w-6 h-6"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__/* .BsLinkedin */ .NQh, {
                                            className: "w-6 h-6"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__/* .BsEnvelope */ .lZw, {
                                            className: "w-6 h-6"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 3129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2717);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const SocialHandleCard = ({ title, link, icon })=>{
    const [cardEl, setCardEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const cardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCardEl(cardRef.current);
    }, [
        cardRef
    ]);
    const hoverAnimation = (e)=>{
        const { clientWidth: cardWidth, clientHeight: cardHeight } = cardEl;
        const angle = 14;
        const y = (e.nativeEvent.offsetX - cardWidth * 0.5) / cardWidth * angle;
        const x = (1 - (e.nativeEvent.offsetY - cardHeight * 0.5)) / cardHeight * angle;
        cardEl.style.transform = `perspective(400px) rotateX(${x}deg) rotateY(${y}deg)`;
    };
    const resetStyle = ()=>{
        cardEl.style.transform = "";
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        ref: cardRef,
        href: link,
        target: "_blank",
        className: "border hover:scale-[1.02] duration-150 bg-gray-200/60 dark:bg-gray-900/60 rounded border-gray-400 dark:border-gray-800 block px-4 py-3",
        rel: "noreferrer",
        onMouseMove: hoverAnimation,
        onMouseOut: resetStyle,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [
                icon,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm text-gray-900 dark:text-gray-300",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__/* .HiOutlineExternalLink */ .Hi9, {
                    className: "block font-light h-4 w-4 text-gray-400 dark:text-gray-500"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialHandleCard);


/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5856);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1751);




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-4 py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Navbar */ .wp, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "max-w-3xl px-2 sm:px-10 mx-auto mt-24 mb-16 min-h-[90vh]",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 1751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $_: () => (/* reexport */ components_Footer),
  wp: () => (/* reexport */ Navbar),
  SE: () => (/* reexport */ SocialHandleCard)
});

// UNUSED EXPORTS: Experience, ProjectCard

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/shubhamkumar/Developer/portfolio-project/my-portfolio/src/components/Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Footer.tsx

const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "max-w-3xl mx-auto flex justify-between items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: "font-bold text-xl sm:text-2xl text-gray-700 dark:text-gray-400",
                children: "Shubham Kumar"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "font-medium text-sm sm:text-base text-gray-400 dark:text-gray-600",
                children: [
                    "Software Engineer \xb7 ",
                    new Date().getFullYear()
                ]
            })
        ]
    });
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
;// CONCATENATED MODULE: ./src/components/ProjectCard.tsx




const ProjectCard = ({ name, description, techStack, githubLink, liveLink })=>/*#__PURE__*/ _jsxs("a", {
        href: githubLink,
        target: "_blank",
        rel: "noreferrer",
        className: "border-2 block dark:border-gray-800 dark:hover:border-gray-600 hover:shadow cursor-pointer p-4 min-h-[8rem] rounded-md",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        className: "font-bold text-lg",
                        children: name
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "max-w-[24rem] text-sm dark:text-gray-400",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "mt-8 flex space-x-8 items-center justify-between",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex space-x-8 items-end",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "flex space-x-3",
                                children: techStack.map((tech, index)=>{
                                    const techEl = tech;
                                    return /*#__PURE__*/ _jsx("div", {
                                        children: techEl
                                    }, index);
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "flex space-x-4 text-sm dark:text-gray-300 font-light",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx(BsStar, {
                                                className: "h-4 w-4"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "ml-1",
                                                children: "69"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx(VscRepoForked, {
                                                className: "h-4 w-4"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "ml-1",
                                                children: "69"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    liveLink && /*#__PURE__*/ _jsx("a", {
                        href: liveLink,
                        target: "_blank",
                        className: "",
                        rel: "noreferrer",
                        children: "Live link"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const components_ProjectCard = ((/* unused pure expression or super */ null && (ProjectCard)));

;// CONCATENATED MODULE: ./src/components/Experience.tsx

const Experience_proxy = (0,module_proxy.createProxy)(String.raw`/Users/shubhamkumar/Developer/portfolio-project/my-portfolio/src/components/Experience.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Experience_esModule, $$typeof: Experience_$$typeof } = Experience_proxy;
const Experience_default_ = Experience_proxy.default;


/* harmony default export */ const Experience = ((/* unused pure expression or super */ null && (Experience_default_)));
;// CONCATENATED MODULE: ./src/components/SocialHandleCard.tsx

const SocialHandleCard_proxy = (0,module_proxy.createProxy)(String.raw`/Users/shubhamkumar/Developer/portfolio-project/my-portfolio/src/components/SocialHandleCard.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: SocialHandleCard_esModule, $$typeof: SocialHandleCard_$$typeof } = SocialHandleCard_proxy;
const SocialHandleCard_default_ = SocialHandleCard_proxy.default;


/* harmony default export */ const SocialHandleCard = (SocialHandleCard_default_);
;// CONCATENATED MODULE: ./src/components/index.ts








/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;