(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["antd-with-locales.js", {

    1146: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ الصفحة',
        jump_to: 'الذهاب إلى',
        jump_to_confirm: 'تأكيد',
        page: 'الصفحة',
        // Pagination
        prev_page: 'الصفحة السابقة',
        next_page: 'الصفحة التالية',
        prev_5: 'خمس صفحات سابقة',
        next_5: 'خمس صفحات تالية',
        prev_3: 'ثلاث صفحات سابقة',
        next_3: 'ثلاث صفحات تالية',
        page_size: 'مقاس الصفحه'
    };
    var _default = exports.default = locale;
    }}),
    4139: ((__turbopack_context__) => {
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            "default": e
        };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }}),
    9819: ((__turbopack_context__) => {
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    function _typeof(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }}),
    2927: ((__turbopack_context__) => {
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _typeof = __turbopack_context__.r(9819)["default"];
    function toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }}),
    4616: ((__turbopack_context__) => {
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _typeof = __turbopack_context__.r(9819)["default"];
    var toPrimitive = __turbopack_context__.r(2927);
    function toPropertyKey(t) {
        var i = toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
    }
    module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }}),
    1233: ((__turbopack_context__) => {
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var toPropertyKey = __turbopack_context__.r(4616);
    function _defineProperty(e, r, t) {
        return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }}),
    8349: ((__turbopack_context__) => {
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var defineProperty = __turbopack_context__.r(1233);
    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
        }
        return t;
    }
    function _objectSpread2(e) {
        for(var r = 1; r < arguments.length; r++){
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
        }
        return e;
    }
    module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }}),
    4915: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.commonLocale = void 0;
    var commonLocale = exports.commonLocale = {
        yearFormat: 'YYYY',
        dayFormat: 'D',
        cellMeridiemFormat: 'A',
        monthBeforeYear: true
    };
    }}),
    817: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ar_EG',
        today: 'اليوم',
        now: 'الأن',
        backToToday: 'العودة إلى اليوم',
        ok: 'تأكيد',
        clear: 'مسح',
        week: 'الأسبوع',
        month: 'الشهر',
        year: 'السنة',
        timeSelect: 'اختيار الوقت',
        dateSelect: 'اختيار التاريخ',
        monthSelect: 'اختيار الشهر',
        yearSelect: 'اختيار السنة',
        decadeSelect: 'اختيار العقد',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'الشهر السابق (PageUp)',
        nextMonth: 'الشهر التالى(PageDown)',
        previousYear: 'العام السابق (Control + left)',
        nextYear: 'العام التالى (Control + right)',
        previousDecade: 'العقد السابق',
        nextDecade: 'العقد التالى',
        previousCentury: 'القرن السابق',
        nextCentury: 'القرن التالى'
    });
    var _default = exports.default = locale;
    }}),
    2466: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ar_EG.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 2466);
    var __TURBOPACK__imported__module__1146__ = __turbopack_context__.i(1146);
    // MERGED MODULE: [project]/components/calendar/locale/ar_EG.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ar_EG.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__817__ = __turbopack_context__.i(817);
    // MERGED MODULE: [project]/components/time-picker/locale/ar_EG.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'اختيار الوقت'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'اختيار التاريخ',
            rangePlaceholder: [
                'البداية',
                'النهاية'
            ],
            yearFormat: 'YYYY',
            monthFormat: 'MMMM',
            monthBeforeYear: true,
            shortWeekDays: [
                'الأحد',
                'الإثنين',
                'الثلاثاء',
                'الأربعاء',
                'الخميس',
                'الجمعة',
                'السبت'
            ],
            shortMonths: [
                'يناير',
                'فبراير',
                'مارس',
                'إبريل',
                'مايو',
                'يونيو',
                'يوليو',
                'أغسطس',
                'سبتمبر',
                'أكتوبر',
                'نوفمبر',
                'ديسمبر'
            ],
            ...__TURBOPACK__imported__module__817__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = 'ليس ${label} من نوع ${type} صالحًا';
    const localeValues = {
        locale: 'ar',
        Pagination: __TURBOPACK__imported__module__1146__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'يرجى التحديد',
            close: 'إغلاق'
        },
        Table: {
            filterTitle: 'الفلاتر',
            filterConfirm: 'تأكيد',
            filterReset: 'إعادة ضبط',
            selectAll: 'اختيار الكل',
            selectInvert: 'إلغاء الاختيار',
            selectionAll: 'حدد جميع البيانات',
            sortTitle: 'رتب',
            expand: 'توسيع الصف',
            collapse: 'طي الصف',
            triggerDesc: 'ترتيب تنازلي',
            triggerAsc: 'ترتيب تصاعدي',
            cancelSort: 'إلغاء الترتيب'
        },
        Tour: {
            Next: 'التالي',
            Previous: 'السابق',
            Finish: 'إنهاء'
        },
        Modal: {
            okText: 'تأكيد',
            cancelText: 'إلغاء',
            justOkText: 'تأكيد'
        },
        Popconfirm: {
            okText: 'تأكيد',
            cancelText: 'إلغاء'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'ابحث هنا',
            itemUnit: 'عنصر',
            itemsUnit: 'عناصر'
        },
        Upload: {
            uploading: 'جاري الرفع...',
            removeFile: 'احذف الملف',
            uploadError: 'مشكلة فى الرفع',
            previewFile: 'استعرض الملف',
            downloadFile: 'تحميل الملف'
        },
        Empty: {
            description: 'لا توجد بيانات'
        },
        Icon: {
            icon: 'أيقونة'
        },
        Text: {
            edit: 'تعديل',
            copy: 'نسخ',
            copied: 'نقل',
            expand: 'وسع'
        },
        Form: {
            defaultValidateMessages: {
                default: 'خطأ في حقل الإدخال ${label}',
                required: 'يرجى إدخال ${label}',
                enum: '${label} يجب أن يكون واحدا من [${enum}]',
                whitespace: '${label} لا يمكن أن يكون حرفًا فارغًا',
                date: {
                    format: '${label} تنسيق التاريخ غير صحيح',
                    parse: '${label} لا يمكن تحويلها إلى تاريخ',
                    invalid: 'تاريخ ${label} غير صحيح'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: 'يجب ${label} ان يكون ${len} أحرف',
                    min: '${label} على الأقل ${min} أحرف',
                    max: '${label} يصل إلى ${max} أحرف',
                    range: 'يجب ${label} ان يكون مابين ${min}-${max} أحرف'
                },
                number: {
                    len: '${len} ان يساوي ${label} يجب',
                    min: '${min} الأدنى هو ${label} حد',
                    max: '${max} الأقصى هو ${label} حد',
                    range: '${max}-${min} ان يكون مابين ${label} يجب'
                },
                array: {
                    len: 'يجب أن يكون ${label} طوله ${len}',
                    min: 'يجب أن يكون ${label} طوله الأدنى ${min}',
                    max: 'يجب أن يكون ${label} طوله الأقصى ${max}',
                    range: 'يجب أن يكون ${label} طوله مابين ${min}-${max}'
                },
                pattern: {
                    mismatch: 'لا يتطابق ${label} مع ${pattern}'
                }
            }
        },
        Image: {
            preview: 'معاينة'
        },
        QRCode: {
            expired: 'انتهت صلاحية رمز الاستجابة السريعة',
            refresh: 'انقر للتحديث',
            scanned: 'تم المسح'
        },
        ColorPicker: {
            presetEmpty: 'لا يوجد',
            transparent: 'شفاف',
            singleColor: 'لون واحد',
            gradientColor: 'تدرج لوني'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    8709: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ səhifə',
        jump_to: 'Get',
        jump_to_confirm: 'təsdiqlə',
        page: '',
        // Pagination
        prev_page: 'Əvvəlki Səhifə',
        next_page: 'Növbəti Səhifə',
        prev_5: 'Əvvəlki 5 Səhifə',
        next_5: 'Növbəti 5 Səhifə',
        prev_3: 'Əvvəlki 3 Səhifə',
        next_3: 'Növbəti 3 Səhifə',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    7440: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'az_AZ',
        today: 'Bugün',
        now: 'İndi',
        backToToday: 'Bugünə qayıt',
        ok: 'Təsdiq',
        clear: 'Təmizlə',
        week: 'Həftə',
        month: 'Ay',
        year: 'İl',
        timeSelect: 'vaxtı seç',
        dateSelect: 'tarixi seç',
        weekSelect: 'Həftə seç',
        monthSelect: 'Ay seç',
        yearSelect: 'il seç',
        decadeSelect: 'Onillik seçin',
        dateFormat: 'D.M.YYYY',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        previousMonth: 'Əvvəlki ay (PageUp)',
        nextMonth: 'Növbəti ay (PageDown)',
        previousYear: 'Sonuncu il (Control + left)',
        nextYear: 'Növbəti il (Control + right)',
        previousDecade: 'Sonuncu onillik',
        nextDecade: 'Növbəti onillik',
        previousCentury: 'Sonuncu əsr',
        nextCentury: 'Növbəti əsr'
    });
    var _default = exports.default = locale;
    }}),
    7191: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/az_AZ.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 7191);
    var __TURBOPACK__imported__module__8709__ = __turbopack_context__.i(8709);
    // MERGED MODULE: [project]/components/calendar/locale/az_AZ.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/az_AZ.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7440__ = __turbopack_context__.i(7440);
    // MERGED MODULE: [project]/components/time-picker/locale/az_AZ.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Vaxtı seç',
        rangePlaceholder: [
            'Başlama tarixi',
            'Bitmə tarixi'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    const locale1 = {
        lang: {
            placeholder: 'Tarix seçin',
            rangePlaceholder: [
                'Başlama tarixi',
                'Bitmə tarixi'
            ],
            yearPlaceholder: 'İl seçin',
            quarterPlaceholder: 'Rüb seçin',
            monthPlaceholder: 'Ay seçin',
            weekPlaceholder: 'Həftə seçin',
            rangeYearPlaceholder: [
                'Başlama il',
                'Bitmə il'
            ],
            rangeQuarterPlaceholder: [
                'Başlama rüb',
                'Bitmə rüb'
            ],
            rangeMonthPlaceholder: [
                'Başlama ay',
                'Bitmə ay'
            ],
            rangeWeekPlaceholder: [
                'Başlama həftə',
                'Bitmə həftə'
            ],
            ...__TURBOPACK__imported__module__7440__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} Hökmlü deyil ${type}';
    const localeValues = {
        locale: 'az',
        Pagination: __TURBOPACK__imported__module__8709__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Zəhmət olmasa seçin',
            close: 'Bağla'
        },
        Table: {
            filterTitle: 'Filter menyu',
            filterConfirm: 'Axtar',
            filterReset: 'Sıfırla',
            emptyText: 'Məlumat yoxdur',
            selectAll: 'Cari səhifəni seç',
            selectInvert: 'Mövcud səhifənin elementlərinin sırasını tərs çevir',
            filterEmptyText: 'Filter yoxdur',
            filterCheckAll: 'Bütün maddələri seç',
            filterSearchPlaceholder: 'Filterlərdə axtar',
            selectNone: 'Bütün məlumatı sil',
            selectionAll: 'Bütün məlumatı seç',
            sortTitle: 'Sırala',
            expand: 'Sıranı genişləndir',
            collapse: 'Sıranı qapadın',
            triggerDesc: 'Azalan sıralama üçün klik edin',
            triggerAsc: 'Artan sıralama üçün klik edin',
            cancelSort: 'Sıralamayı ləğv edin'
        },
        Tour: {
            Next: 'Növbəti',
            Previous: 'Əvvəlki',
            Finish: 'Bitir'
        },
        Modal: {
            okText: 'Bəli',
            cancelText: 'Ləğv et',
            justOkText: 'Bəli'
        },
        Popconfirm: {
            okText: 'Bəli',
            cancelText: 'Ləğv et'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            notFoundContent: 'Tapılmadı',
            searchPlaceholder: 'Burada axtar',
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Sil',
            selectCurrent: 'Cari səhifəni seç',
            removeCurrent: 'Cari səhifəni sil',
            selectAll: 'Bütün məlumatı seç',
            deselectAll: 'Bütün seçmə nişanlarını sil',
            removeAll: 'Bütün məlumatı sil',
            selectInvert: 'Mövcud səhifənin elementlərinin sırasını tərs çevir'
        },
        Upload: {
            uploading: 'Yüklənir...',
            removeFile: 'Faylı sil',
            uploadError: 'Yükləmə xətası',
            previewFile: 'Fayla önbaxış',
            downloadFile: 'Faylı yüklə'
        },
        Empty: {
            description: 'Məlumat yoxdur'
        },
        Icon: {
            icon: 'icon'
        },
        Text: {
            edit: 'Dəyişiklik et',
            copy: 'Kopyala',
            copied: 'Kopyalandı',
            expand: 'Genişləndir',
            collapse: 'Yığılma'
        },
        Form: {
            optional: '（Seçimli）',
            defaultValidateMessages: {
                default: 'Sahə təsdiq xətası ${label}',
                required: 'Xahiş edirik daxil olun ${label}',
                enum: '${label} Onlardan biri olmalıdır[${enum}]',
                whitespace: '${label} Null xarakter ola bilməz',
                date: {
                    format: '${label} Tarix formatı hökmlü deyil',
                    parse: '${label} Tarixi döndərmək mümkün deyil',
                    invalid: '${label} səhv tarixdir'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} Olmalıdır ${len} işarələr',
                    min: '${label} ən az ${min} işarələr',
                    max: '${label} ən çox ${max} işarələr',
                    range: '${label} Olmalıdır ${min}-${max} hərflər arasında'
                },
                number: {
                    len: '${label} Bərabər olmalıdır ${len}',
                    min: '${label} Minimal dəyəri ${min}',
                    max: '${label} Maksimal qiymət: ${max}',
                    range: '${label} Olmalıdır ${min}-${max} aralarında'
                },
                array: {
                    len: 'Olmalıdır ${len} parça ${label}',
                    min: 'ən az ${min} parça ${label}',
                    max: 'ən çox ${max} parça ${label}',
                    range: '${label} miqdarıOlmalıdır ${min}-${max} aralarında'
                },
                pattern: {
                    mismatch: '${label} Şablona uyğun gəlmir ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Önbaxış'
        },
        QRCode: {
            expired: 'QR kodunun müddəti bitmişdir',
            refresh: 'Yenilə',
            scanned: 'Gözətildi'
        },
        ColorPicker: {
            presetEmpty: 'Boşdur',
            transparent: 'Şəffaf',
            singleColor: 'Tək rəng',
            gradientColor: 'Gradient rəng'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6494: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ страница',
        jump_to: 'Към',
        jump_to_confirm: 'потвърждавам',
        page: '',
        // Pagination
        prev_page: 'Предишна страница',
        next_page: 'Следваща страница',
        prev_5: 'Предишни 5 страници',
        next_5: 'Следващи 5 страници',
        prev_3: 'Предишни 3 страници',
        next_3: 'Следващи 3 страници',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    6616: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'bg_BG',
        today: 'Днес',
        now: 'Сега',
        backToToday: 'Към днес',
        ok: 'Добре',
        clear: 'Изчистване',
        week: 'Седмица',
        month: 'Месец',
        year: 'Година',
        timeSelect: 'Избор на час',
        dateSelect: 'Избор на дата',
        monthSelect: 'Избор на месец',
        yearSelect: 'Избор на година',
        decadeSelect: 'Десетилетие',
        dateFormat: 'D M YYYY',
        dateTimeFormat: 'D M YYYY HH:mm:ss',
        previousMonth: 'Предишен месец (PageUp)',
        nextMonth: 'Следващ месец (PageDown)',
        previousYear: 'Последна година (Control + left)',
        nextYear: 'Следваща година (Control + right)',
        previousDecade: 'Предишно десетилетие',
        nextDecade: 'Следващо десетилетие',
        previousCentury: 'Последен век',
        nextCentury: 'Следващ век'
    });
    var _default = exports.default = locale;
    }}),
    3533: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/bg_BG.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 3533);
    var __TURBOPACK__imported__module__6494__ = __turbopack_context__.i(6494);
    // MERGED MODULE: [project]/components/calendar/locale/bg_BG.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/bg_BG.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__6616__ = __turbopack_context__.i(6616);
    // MERGED MODULE: [project]/components/time-picker/locale/bg_BG.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Избор на час'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Избор на дата',
            rangePlaceholder: [
                'Начална',
                'Крайна'
            ],
            ...__TURBOPACK__imported__module__6616__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} не е валиден ${type}';
    const localeValues = {
        locale: 'bg',
        Pagination: __TURBOPACK__imported__module__6494__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'Затвори'
        },
        Table: {
            filterTitle: 'Филтриране',
            filterConfirm: 'Добре',
            filterReset: 'Нулриане',
            selectAll: 'Избор на текуща страница',
            selectInvert: 'Обръщане'
        },
        Tour: {
            Next: 'Следващ',
            Previous: 'Предишен',
            Finish: 'Завърши'
        },
        Modal: {
            okText: 'Добре',
            cancelText: 'Отказ',
            justOkText: 'Добре'
        },
        Popconfirm: {
            okText: 'Добре',
            cancelText: 'Отказ'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Търсене',
            itemUnit: 'избор',
            itemsUnit: 'избори'
        },
        Upload: {
            uploading: 'Качване...',
            removeFile: 'Премахване',
            uploadError: 'Грешка при качването',
            previewFile: 'Преглед',
            downloadFile: 'Свали файл'
        },
        Empty: {
            description: 'Няма данни'
        },
        Form: {
            optional: '（по желание）',
            defaultValidateMessages: {
                default: 'грешка при проверка на полето ${label}',
                required: 'Моля, въведете ${label}',
                enum: '${label} трябва да е един от [${enum}]',
                whitespace: '${label} Не може да бъде нулев знак',
                date: {
                    format: '${label} невалиден формат на датата',
                    parse: '${label} не може да се преобразува в дата',
                    invalid: '${label} е невалидна дата'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ще бъде ${len} знака',
                    min: '${label} най-малко ${min} герои',
                    max: '${label} повечето ${max} герои',
                    range: '${label} Трябва да е вътре ${min}-${max} между знаци'
                },
                number: {
                    len: '${label} трябва да е равно на ${len}',
                    min: '${label} Минималната стойност е ${min}',
                    max: '${label} Максималната стойност е ${max}',
                    range: '${label} Трябва да е вътре ${min}-${max} между'
                },
                array: {
                    len: 'ще бъде ${len} индивидуален ${label}',
                    min: 'най-малко ${min} индивидуален ${label}',
                    max: 'повечето ${max} индивидуален ${label}',
                    range: '${label} Количеството трябва да е вътре ${min}-${max} между'
                },
                pattern: {
                    mismatch: '${label} не отговаря на модела ${pattern}'
                }
            }
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6663: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ পৃষ্ঠা',
        jump_to: 'যাও',
        jump_to_confirm: 'নিশ্চিত',
        page: 'পৃষ্ঠা',
        // Pagination
        prev_page: 'আগের পৃষ্ঠা',
        next_page: 'পরের পৃষ্ঠা',
        prev_5: 'পূর্ববর্তী ৫ পৃষ্ঠা',
        next_5: 'পরবর্তী ৫ পৃষ্ঠা',
        prev_3: 'পূর্ববর্তী ৩ পৃষ্ঠা',
        next_3: 'পরবর্তী ৩ পৃষ্ঠা',
        page_size: 'পাতার আকার'
    };
    var _default = exports.default = locale;
    }}),
    3679: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'bn_BD',
        today: 'আজ',
        now: 'এখন',
        backToToday: 'আজকে ফিরে চলুন',
        ok: 'ওকে',
        clear: 'পরিস্কার',
        week: 'সপ্তাহ',
        month: 'মাস',
        year: 'বছর',
        timeSelect: 'সময় নির্বাচন',
        dateSelect: 'তারিখ নির্বাচন',
        weekSelect: 'সপ্তাহ পছন্দ করুন',
        monthSelect: 'মাস পছন্দ করুন',
        yearSelect: 'বছর পছন্দ করুন',
        decadeSelect: 'একটি দশক পছন্দ করুন',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'গত মাস (PageUp)',
        nextMonth: 'আগামী মাস (PageDown)',
        previousYear: 'গত বছর (Control + left)',
        nextYear: 'আগামী বছর (Control + right)',
        previousDecade: 'গত দশক',
        nextDecade: 'পরের দশক',
        previousCentury: 'গত শতাব্দী',
        nextCentury: 'পরের শতাব্দী'
    });
    var _default = exports.default = locale;
    }}),
    8777: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/bn_BD.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 8777);
    var __TURBOPACK__imported__module__6663__ = __turbopack_context__.i(6663);
    // MERGED MODULE: [project]/components/calendar/locale/bn_BD.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/bn_BD.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__3679__ = __turbopack_context__.i(3679);
    // MERGED MODULE: [project]/components/time-picker/locale/bn_BD.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'সময় নির্বাচন',
        rangePlaceholder: [
            'সময় শুরু',
            'শেষ সময়'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'তারিখ নির্বাচন',
            yearPlaceholder: 'বছর নির্বাচন',
            quarterPlaceholder: 'কোয়ার্টার নির্বাচন',
            monthPlaceholder: 'মাস নির্বাচন',
            weekPlaceholder: 'সপ্তাহ নির্বাচন',
            rangePlaceholder: [
                'শুরুর তারিখ',
                'শেষ তারিখ'
            ],
            rangeYearPlaceholder: [
                'শুরুর বছর',
                'শেষ বছর'
            ],
            rangeMonthPlaceholder: [
                'শুরুর মাস',
                'শেষ মাস'
            ],
            rangeWeekPlaceholder: [
                'শুরুর সপ্তাহ',
                'শেষ সপ্তাহ'
            ],
            ...__TURBOPACK__imported__module__3679__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} টি সঠিক ${type} নয়।';
    const localeValues = {
        locale: 'bn-bd',
        Pagination: __TURBOPACK__imported__module__6663__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'অনুগ্রহ করে নির্বাচন করুন',
            close: 'বন্ধ'
        },
        Table: {
            filterTitle: 'ফিল্টার মেনু',
            filterConfirm: 'ঠিক',
            filterReset: 'রিসেট',
            filterEmptyText: 'ফিল্টার নেই',
            emptyText: 'কোনও ডেটা নেই',
            selectAll: 'বর্তমান পৃষ্ঠা নির্বাচন করুন',
            selectInvert: 'বর্তমান পৃষ্ঠাটি উল্টে দিন',
            selectNone: 'সমস্ত ডেটা সাফ করুন',
            selectionAll: 'সমস্ত ডেটা নির্বাচন করুন',
            sortTitle: 'সাজান',
            expand: 'সারি প্রসারিত করুন',
            collapse: 'সারি সঙ্কুচিত করুন',
            triggerDesc: 'অবতরণকে সাজানোর জন্য ক্লিক করুন',
            triggerAsc: 'আরোহী বাছাই করতে ক্লিক করুন',
            cancelSort: 'বাছাই বাতিল করতে ক্লিক করুন'
        },
        Tour: {
            Next: 'পরবর্তী',
            Previous: 'পূর্ববর্তী',
            Finish: 'সমাপ্ত'
        },
        Modal: {
            okText: 'ঠিক',
            cancelText: 'বাতিল',
            justOkText: 'ঠিক'
        },
        Popconfirm: {
            okText: 'ঠিক',
            cancelText: 'বাতিল'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'এখানে অনুসন্ধান',
            itemUnit: 'আইটেম',
            itemsUnit: 'আইটেমসমূহ',
            remove: 'অপসারণ',
            selectCurrent: 'বর্তমান পৃষ্ঠা নির্বাচন করুন',
            removeCurrent: 'বর্তমান পৃষ্ঠাটি সরান',
            selectAll: 'সমস্ত ডেটা নির্বাচন করুন',
            removeAll: 'সমস্ত ডেটা সরান',
            selectInvert: 'বর্তমান পৃষ্ঠাটি উল্টে দিন'
        },
        Upload: {
            uploading: 'আপলোড হচ্ছে ...',
            removeFile: 'ফাইল সরান',
            uploadError: 'আপলোডে সমস্যা',
            previewFile: 'ফাইলের পূর্বরূপ',
            downloadFile: 'ফাইল ডাউনলোড'
        },
        Empty: {
            description: 'কোনও ডেটা নেই'
        },
        Icon: {
            icon: 'আইকন'
        },
        Text: {
            edit: 'সম্পাদনা',
            copy: 'অনুলিপি',
            copied: 'অনুলিপি হয়েছে',
            expand: 'বিস্তৃত করা'
        },
        Form: {
            optional: '(ঐচ্ছিক)',
            defaultValidateMessages: {
                default: '${label} এর ক্ষেত্রে ক্ষেত্র বৈধতা ত্রুটি',
                required: 'অনুগ্রহ করে ${label} প্রবেশ করান',
                enum: '${label} অবশ্যই [${enum}] এর মধ্যে একটি হতে হবে',
                whitespace: '${label} ফাঁকা অক্ষর হতে পারে না',
                date: {
                    format: '${label} তারিখ ফরমেট সঠিক নয়।',
                    parse: '${label} তারিখে রূপান্তর করা যায় না',
                    invalid: '${label} একটি সঠিক তারিখ না।'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} অবশ্যই ${len} অক্ষরের হতে হবে।',
                    min: '${label} অবশ্যই অন্তত ${min} অক্ষরের হতে হবে।',
                    max: '${label} অবশ্যই ${max} পর্যন্ত অক্ষরের হতে হবে।',
                    range: '${label} অবশ্যই ${min}-${max} অক্ষরের এর মধ্যে হতে হবে।'
                },
                number: {
                    len: '${label} অবশ্যই ${len} এর সমান হতে হবে',
                    min: '${label} অবশ্যই সর্বনিম্ন ${min} হতে হবে',
                    max: '${label} অবশ্যই সর্বোচ্চ ${max} হতে হবে',
                    range: '${label} অবশ্যই ${min}-${max} এর মধ্যে হতে হবে'
                },
                array: {
                    len: 'অবশ্যই ${len} ${label} হতে হবে',
                    min: 'কমপক্ষে ${min} ${label}',
                    max: 'সর্বাধিক হিসাবে ${max} ${label}',
                    range: '${label} এর পরিমাণ অবশ্যই ${min}-${max} এর মধ্যে হতে হবে'
                },
                pattern: {
                    mismatch: '${label} এই ${pattern} প্যাটার্নের সাথে মেলে না'
                }
            }
        },
        Image: {
            preview: 'পূর্বরূপ'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    2000: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/старонка',
        jump_to: 'Перайсці',
        jump_to_confirm: 'Пацвердзіць',
        page: '',
        // Pagination
        prev_page: 'Назад',
        next_page: 'Наперад',
        prev_5: 'Папярэднія 5',
        next_5: 'Наступныя 5',
        prev_3: 'Папярэднія 3',
        next_3: 'Наступныя 3',
        page_size: 'памер старонкі'
    };
    var _default = exports.default = locale;
    }}),
    3069: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'by_BY',
        today: 'Сёння',
        now: 'Зараз',
        backToToday: 'Дадзеная дата',
        ok: 'OK',
        clear: 'Ачысціць',
        week: 'Тыдзень',
        month: 'Месяц',
        year: 'Год',
        timeSelect: 'Выбраць час',
        dateSelect: 'Выбраць дату',
        weekSelect: 'Выбраць тыдзень',
        monthSelect: 'Выбраць месяц',
        yearSelect: 'Выбраць год',
        decadeSelect: 'Выбраць дзесяцігоддзе',
        dateFormat: 'D-M-YYYY',
        dateTimeFormat: 'D-M-YYYY HH:mm:ss',
        previousMonth: 'Папярэдні месяц (PageUp)',
        nextMonth: 'Наступны месяц (PageDown)',
        previousYear: 'Папярэдні год (Control + left)',
        nextYear: 'Наступны год (Control + right)',
        previousDecade: 'Папярэдняе дзесяцігоддзе',
        nextDecade: 'Наступнае дзесяцігоддзе',
        previousCentury: 'Папярэдні век',
        nextCentury: 'Наступны век'
    });
    var _default = exports.default = locale;
    }}),
    4254: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/by_BY.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4254);
    var __TURBOPACK__imported__module__2000__ = __turbopack_context__.i(2000);
    // MERGED MODULE: [project]/components/calendar/locale/by_BY.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/by_BY.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__3069__ = __turbopack_context__.i(3069);
    // MERGED MODULE: [project]/components/time-picker/locale/by_BY.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Выберыце час',
        rangePlaceholder: [
            'Час пачатку',
            'Час заканчэння'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    const locale1 = {
        lang: {
            placeholder: 'Выберыце дату',
            yearPlaceholder: 'Выберыце год',
            quarterPlaceholder: 'Выберыце квартал',
            monthPlaceholder: 'Выберыце месяц',
            weekPlaceholder: 'Выберыце тыдзень',
            rangePlaceholder: [
                'Дата пачатку',
                'Дата заканчэння'
            ],
            rangeYearPlaceholder: [
                'Год пачатку',
                'Год заканчэння'
            ],
            rangeQuarterPlaceholder: [
                'Квартал пачатку',
                'Квартал заканчэння'
            ],
            rangeMonthPlaceholder: [
                'Месяц пачатку',
                'Месяц заканчэння'
            ],
            rangeWeekPlaceholder: [
                'Тыдзень пачаку',
                'Тыдзень заканчэння'
            ],
            ...__TURBOPACK__imported__module__3069__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = "${label} не з'яўляецца тыпам ${type}";
    const localeValues = {
        locale: 'by',
        Pagination: __TURBOPACK__imported__module__2000__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Калі ласка, выберыце',
            close: 'Закрыць'
        },
        Table: {
            filterTitle: 'Фільтр',
            filterConfirm: 'OK',
            filterReset: 'Скінуць',
            filterEmptyText: 'Без фільтраў',
            filterCheckAll: 'Выбраць усё',
            filterSearchPlaceholder: 'Пошук фільтраў',
            emptyText: 'Няма даных',
            selectAll: 'Выбраць усё',
            selectInvert: 'Інвертаваць выбар',
            selectNone: 'Ачысціць усе даныя',
            selectionAll: 'Выбраць усе даныя',
            sortTitle: 'Сартаванне',
            expand: 'Разгарнуць радок',
            collapse: 'Згарнуць радок',
            triggerDesc: 'Націсніце для сартавання па ўбыванні',
            triggerAsc: 'Націсніце для сартавання па ўзрастанні',
            cancelSort: 'Націсніце, каб адмяніць сартаванне'
        },
        Tour: {
            Next: 'Наступны',
            Previous: 'Папярэдняя',
            Finish: 'Завяршыць'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Адмена',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Адмена'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Пошук',
            itemUnit: 'элем.',
            itemsUnit: 'элем.',
            remove: 'Выдаліць',
            selectCurrent: 'Вылучыць бягучую старонку',
            removeCurrent: 'Выдаліць бягучую старонку',
            selectAll: 'Выбраць усе даныя',
            removeAll: 'Выдаліць усе даныя',
            selectInvert: 'Паказаць у адваротным парадку'
        },
        Upload: {
            uploading: 'Запампоўка...',
            removeFile: 'Выдаліць файл',
            uploadError: 'Адбылася памылка пры запампоўцы',
            previewFile: 'Перадпрагляд файла',
            downloadFile: 'Спампаваць файл'
        },
        Empty: {
            description: 'Няма даных'
        },
        Icon: {
            icon: 'Іконка'
        },
        Text: {
            edit: 'Рэдагаваць',
            copy: 'Капіяваць',
            copied: 'Капіяванне завершана',
            expand: 'Разгарнуць'
        },
        Form: {
            optional: '(не абавязкова)',
            defaultValidateMessages: {
                default: 'Памылка праверкі поля «${label}»',
                required: 'Калі ласка, увядзіце «${label}»',
                enum: 'Поле «${label}» павінна быць адным з [${enum}]',
                whitespace: 'Поле «${label}» не можа быць пустым',
                date: {
                    format: 'Поле «${label}» мае няправільны фармат даты',
                    parse: 'Поле «${label}» не можа быць пераўтворана ў дату',
                    invalid: "Поле «${label}» не з'яўляецца карэктнай датай"
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: 'Значэнне поля «${label}» павінна мець даўжыню ${len} сімвалаў',
                    min: 'Значэнне поля «${label}» павінна мець не меней за ${min} сімвалаў',
                    max: 'Значэнне поля «${label}» павінна быць не даўжэй за ${max} сімвалаў',
                    range: 'Значэнне поля «${label}» павінна мець даўжыню ${min}-${max} сімвалаў'
                },
                number: {
                    len: 'Значэнне поля «${label}» павінна быць роўнае ${len}',
                    min: 'Значэнне поля «${label}» павінна быць больш або роўнае ${min}',
                    max: 'Значэнне поля «${label}» павінна быць больш або роўнае ${max}',
                    range: 'Значэнне поля «${label}» павінна быць паміж ${min} і ${max}'
                },
                array: {
                    len: 'Колькасць элементаў у полі «${label}» павінна быць роўная ${len}',
                    min: 'Колькасць элементаў у полі «${label}» павінна быць не меней за ${min}',
                    max: 'Колькасць элементаў у полі «${label}» павінна быць не болей за ${max}',
                    range: 'Колькасць элементаў у полі «${label}» павінна быць паміж ${min} і ${max}'
                },
                pattern: {
                    mismatch: 'Значэнне поля «${label}» не адпавядае шаблону ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Preview'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    5835: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ pàgina',
        jump_to: 'Anar a',
        jump_to_confirm: 'Confirma',
        page: '',
        // Pagination
        prev_page: 'Pàgina prèvia',
        next_page: 'Pàgina següent',
        prev_5: '5 pàgines prèvies',
        next_5: '5 pàgines següents',
        prev_3: '3 pàgines prèvies',
        next_3: '3 pàgines següents',
        page_size: 'mida de la pàgina'
    };
    var _default = exports.default = locale;
    }}),
    1661: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ca_ES',
        today: 'Avui',
        now: 'Ara',
        backToToday: 'Tornar a avui',
        ok: 'Acceptar',
        clear: 'Netejar',
        week: 'Setmana',
        month: 'Mes',
        year: 'Any',
        timeSelect: 'Seleccionar hora',
        dateSelect: 'Seleccionar data',
        monthSelect: 'Escollir un mes',
        yearSelect: 'Escollir un any',
        decadeSelect: 'Escollir una dècada',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Mes anterior (PageUp)',
        nextMonth: 'Mes següent (PageDown)',
        previousYear: 'Any anterior (Control + left)',
        nextYear: 'Mes següent (Control + right)',
        previousDecade: 'Dècada anterior',
        nextDecade: 'Dècada següent',
        previousCentury: 'Segle anterior',
        nextCentury: 'Segle següent'
    });
    var _default = exports.default = locale;
    }}),
    8585: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ca_ES.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 8585);
    var __TURBOPACK__imported__module__5835__ = __turbopack_context__.i(5835);
    // MERGED MODULE: [project]/components/calendar/locale/ca_ES.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ca_ES.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__1661__ = __turbopack_context__.i(1661);
    // MERGED MODULE: [project]/components/time-picker/locale/ca_ES.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Seleccionar hora'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Seleccionar data',
            rangePlaceholder: [
                'Data inicial',
                'Data final'
            ],
            ...__TURBOPACK__imported__module__1661__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} no és un ${type} vàlid';
    const localeValues = {
        locale: 'ca',
        Pagination: __TURBOPACK__imported__module__5835__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Seleccionar',
            close: 'Tancar'
        },
        Table: {
            filterTitle: 'Filtrar el menú',
            filterConfirm: 'D’acord',
            filterReset: 'Reiniciar',
            filterEmptyText: 'Sense filtres',
            selectAll: 'Seleccionar la pàgina actual',
            selectInvert: 'Invertir la selecció',
            selectionAll: 'Seleccionar-ho tot',
            sortTitle: 'Ordenar',
            expand: 'Ampliar la fila',
            collapse: 'Plegar la fila',
            triggerDesc: 'Ordre descendent',
            triggerAsc: 'Ordre ascendent',
            cancelSort: 'Desactivar l’ordre'
        },
        Tour: {
            Next: 'Següent',
            Previous: 'Anterior',
            Finish: 'Finalitzar'
        },
        Modal: {
            okText: 'D’acord',
            cancelText: 'Cancel·lar',
            justOkText: 'D’acord'
        },
        Popconfirm: {
            okText: 'D’acord',
            cancelText: 'Cancel·lar'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Cercar',
            itemUnit: 'ítem',
            itemsUnit: 'ítems',
            remove: 'Eliminar',
            selectCurrent: 'Seleccionar la pàgina actual',
            removeCurrent: 'Eliminar la selecció',
            selectAll: 'Seleccionar-ho tot',
            removeAll: 'Eliminar-ho tot',
            selectInvert: 'Invertir la selecció'
        },
        Upload: {
            uploading: 'Carregant…',
            removeFile: 'Eliminar el fitxer',
            uploadError: 'Error de càrrega',
            previewFile: 'Vista prèvia del fitxer',
            downloadFile: 'Baixar el fitxer'
        },
        Empty: {
            description: 'Sense dades'
        },
        Icon: {
            icon: 'icona'
        },
        Text: {
            edit: 'Editar',
            copy: 'Copiar',
            copied: 'Copiat',
            expand: 'Ampliar'
        },
        Form: {
            optional: '(opcional)',
            defaultValidateMessages: {
                default: 'Error de validació del camp ${label}',
                required: 'Introdueix ${label}',
                enum: '${label} ha de ser un de [${enum}]',
                whitespace: '${label} no pot ser un caràcter en blanc',
                date: {
                    format: 'El format de la data de ${label} és invàlid',
                    parse: '${label} no es pot convertir a cap data',
                    invalid: '${label} és una data invàlida'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ha de ser de ${len} caràcters',
                    min: '${label} ha de tenir com a mínim ${min} caràcters',
                    max: '${label} ha de tenir com a màxim ${max} caràcters',
                    range: '${label} ha d’estar entre ${min} i ${max} caràcters'
                },
                number: {
                    len: '${label} ha de ser igual a ${len}',
                    min: '${label} ha de tenir un valor mínim de ${min}',
                    max: '${label} ha de tenir un valor màxim de ${max}',
                    range: '${label} ha de tenir un valor entre ${min} i ${max}'
                },
                array: {
                    len: 'La llargada de ${label} ha de ser de ${len}',
                    min: 'La llargada de ${label} ha de ser com a mínim de ${min}',
                    max: 'La llargada de ${label} ha de ser com a màxim de ${max}',
                    range: 'La llargada de ${label} ha d’estar entre ${min} i ${max}'
                },
                pattern: {
                    mismatch: '${label} no coincideix amb el patró ${pattern}'
                }
            }
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    70: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ strana',
        jump_to: 'Přejít',
        jump_to_confirm: 'potvrdit',
        page: '',
        // Pagination
        prev_page: 'Předchozí strana',
        next_page: 'Následující strana',
        prev_5: 'Předchozích 5 stran',
        next_5: 'Následujících 5 stran',
        prev_3: 'Předchozí 3 strany',
        next_3: 'Následující 3 strany',
        page_size: 'velikost stránky'
    };
    var _default = exports.default = locale;
    }}),
    7325: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'cs_CZ',
        today: 'Dnes',
        now: 'Nyní',
        backToToday: 'Zpět na dnešek',
        ok: 'OK',
        clear: 'Vymazat',
        week: 'Týden',
        month: 'Měsíc',
        year: 'Rok',
        timeSelect: 'Vybrat čas',
        dateSelect: 'Vybrat datum',
        monthSelect: 'Vyberte měsíc',
        yearSelect: 'Vyberte rok',
        decadeSelect: 'Vyberte dekádu',
        dateFormat: 'D.M.YYYY',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        previousMonth: 'Předchozí měsíc (PageUp)',
        nextMonth: 'Následující (PageDown)',
        previousYear: 'Předchozí rok (Control + left)',
        nextYear: 'Následující rok (Control + right)',
        previousDecade: 'Předchozí dekáda',
        nextDecade: 'Následující dekáda',
        previousCentury: 'Předchozí století',
        nextCentury: 'Následující století'
    });
    var _default = exports.default = locale;
    }}),
    4738: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/cs_CZ.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4738);
    var __TURBOPACK__imported__module__70__ = __turbopack_context__.i(70);
    // MERGED MODULE: [project]/components/calendar/locale/cs_CZ.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/cs_CZ.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7325__ = __turbopack_context__.i(7325);
    // MERGED MODULE: [project]/components/time-picker/locale/cs_CZ.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Vybrat čas'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Vybrat datum',
            rangePlaceholder: [
                'Od',
                'Do'
            ],
            ...__TURBOPACK__imported__module__7325__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} není platný ${type}';
    const localeValues = {
        locale: 'cs',
        Pagination: __TURBOPACK__imported__module__70__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Prosím vyber',
            close: 'Zavřít'
        },
        Table: {
            filterTitle: 'Filtr',
            filterConfirm: 'Potvrdit',
            filterReset: 'Obnovit',
            filterEmptyText: 'Žádné filtry',
            filterCheckAll: 'Vybrat všechny položky',
            filterSearchPlaceholder: 'Vyhledat ve filtrech',
            emptyText: 'Žádná data',
            selectAll: 'Vybrat všechny řádky na současné stránce',
            selectInvert: 'Invertovat výběr na současné stránce',
            selectNone: 'Odznačit vše',
            selectionAll: 'Vybrat všechny řádky',
            sortTitle: 'Řadit',
            expand: 'Rozbalit řádek',
            collapse: 'Zabalit řádek',
            triggerDesc: 'Klikni pro sestupné řazení',
            triggerAsc: 'Klikni pro vzestupné řazení',
            cancelSort: 'Klikni pro zrušení řazení'
        },
        Tour: {
            Next: 'Další',
            Previous: 'Předchozí',
            Finish: 'Dokončit'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Zrušit',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Zrušit'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Vyhledávání',
            itemUnit: 'položka',
            itemsUnit: 'položek',
            remove: 'Odstranit',
            selectCurrent: 'Vybrat aktuální stranu',
            removeCurrent: 'Smazat aktuální stranu',
            selectAll: 'Označit vše',
            removeAll: 'Odznačit vše',
            selectInvert: 'Opačný výběr'
        },
        Upload: {
            uploading: 'Nahrávání...',
            removeFile: 'Odstranit soubor',
            uploadError: 'Chyba při nahrávání',
            previewFile: 'Zobrazit soubor',
            downloadFile: 'Stáhnout soubor'
        },
        Empty: {
            description: 'Žádná data'
        },
        Icon: {
            icon: 'ikona'
        },
        Text: {
            edit: 'Upravit',
            copy: 'Kopírovat',
            copied: 'Zkopírované',
            expand: 'Zvětšit'
        },
        Form: {
            optional: '(nepovinné)',
            defaultValidateMessages: {
                default: 'Validační chyba pole pro ${label}',
                required: 'Prosím vložte ${label}',
                enum: '${label} musí být jeden z [${enum}]',
                whitespace: '${label} nemůže být prázdný znak',
                date: {
                    format: '${label} formát datumu je neplatný',
                    parse: '${label} není možné konvertovat na datum',
                    invalid: '${label} je neplatné datum'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} musí být ${len} znaků',
                    min: '${label} musí být alespoň ${min} znaků',
                    max: '${label} musí být do ${max} znaků',
                    range: '${label} musí být mezi ${min}-${max} znaky'
                },
                number: {
                    len: '${label} musí být stejný jako ${len}',
                    min: '${label} musí být minimálně ${min}',
                    max: '${label} musí být maximálně ${max}',
                    range: '${label} musí být mezi ${min}-${max}'
                },
                array: {
                    len: 'Musí být ${len} ${label}',
                    min: 'Alespoň ${min} ${label}',
                    max: 'Nejvíc ${max} ${label}',
                    range: 'Počet ${label} musí být mezi ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} neodpovídá vzoru ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Náhled'
        },
        QRCode: {
            expired: 'QR kód vypršel',
            refresh: 'Obnovit',
            scanned: 'Naskenováno'
        },
        ColorPicker: {
            presetEmpty: 'Prázdné',
            transparent: 'Průhledné',
            singleColor: 'Jednobarevné',
            gradientColor: 'Přechodové'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6342: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ side',
        jump_to: 'Gå til',
        jump_to_confirm: 'bekræft',
        page: 'Side',
        // Pagination
        prev_page: 'Forrige Side',
        next_page: 'Næste Side',
        prev_5: 'Forrige 5 Sider',
        next_5: 'Næste 5 Sider',
        prev_3: 'Forrige 3 Sider',
        next_3: 'Næste 3 Sider',
        page_size: 'sidestørrelse'
    };
    var _default = exports.default = locale;
    }}),
    1964: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'da_DK',
        today: 'I dag',
        now: 'Nu',
        backToToday: 'Gå til i dag',
        ok: 'OK',
        clear: 'Ryd',
        week: 'Uge',
        month: 'Måned',
        year: 'År',
        timeSelect: 'Vælg tidspunkt',
        dateSelect: 'Vælg dato',
        monthSelect: 'Vælg måned',
        yearSelect: 'Vælg år',
        decadeSelect: 'Vælg årti',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Forrige måned (Page Up)',
        nextMonth: 'Næste måned (Page Down)',
        previousYear: 'Forrige år (Ctrl-venstre pil)',
        nextYear: 'Næste år (Ctrl-højre pil)',
        previousDecade: 'Forrige årti',
        nextDecade: 'Næste årti',
        previousCentury: 'Forrige århundrede',
        nextCentury: 'Næste århundrede'
    });
    var _default = exports.default = locale;
    }}),
    3636: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/da_DK.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 3636);
    var __TURBOPACK__imported__module__6342__ = __turbopack_context__.i(6342);
    // MERGED MODULE: [project]/components/calendar/locale/da_DK.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/da_DK.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__1964__ = __turbopack_context__.i(1964);
    // MERGED MODULE: [project]/components/time-picker/locale/da_DK.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Vælg tid',
        rangePlaceholder: [
            'Starttidspunkt',
            'Sluttidspunkt'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Vælg dato',
            rangePlaceholder: [
                'Startdato',
                'Slutdato'
            ],
            ...__TURBOPACK__imported__module__1964__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} er ikke en gyldig ${type}';
    const localeValues = {
        locale: 'da',
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        Pagination: __TURBOPACK__imported__module__6342__["default"],
        global: {
            close: 'Luk'
        },
        Table: {
            filterTitle: 'Filtermenu',
            filterConfirm: 'OK',
            filterReset: 'Nulstil',
            filterEmptyText: 'Ingen filtre',
            emptyText: 'Ingen data',
            selectAll: 'Vælg alle',
            selectNone: 'Ryd alt data',
            selectInvert: 'Invertér valg',
            selectionAll: 'Vælg alt data',
            sortTitle: 'Sortér',
            expand: 'Udvid række',
            collapse: 'Flet række',
            triggerDesc: 'Klik for at sortere faldende',
            triggerAsc: 'Klik for at sortere stigende',
            cancelSort: 'Klik for at annullere sortering'
        },
        Tour: {
            Next: 'Næste',
            Previous: 'Forrige',
            Finish: 'Færdiggørelse'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Afbryd',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Afbryd'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Søg her',
            itemUnit: 'element',
            itemsUnit: 'elementer'
        },
        Upload: {
            uploading: 'Uploader...',
            removeFile: 'Fjern fil',
            uploadError: 'Fejl ved upload',
            previewFile: 'Forhåndsvisning',
            downloadFile: 'Download fil'
        },
        Empty: {
            description: 'Ingen data'
        },
        Form: {
            optional: '(valgfrit)',
            defaultValidateMessages: {
                default: 'Feltvalideringsfejl ${label}',
                required: 'Indtast venligst ${label}',
                enum: '${label} skal være en af [${enum}]',
                whitespace: '${label} kan ikke være et tomt tegn',
                date: {
                    format: '${label} Datoformatet er ugyldigt',
                    parse: '${label} kan ikke konverteres til en dato',
                    invalid: '${label} er en ugyldig dato'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} skal være ${len} tegn',
                    min: '${label} mindst ${min} tegn',
                    max: '${label} op til ${max} tegn',
                    range: '${label} skal være mellem ${min} og ${max} tegn'
                },
                number: {
                    len: '${label} skal være lig med ${len}',
                    min: '${label} Minimumsværdien er ${min}',
                    max: '${label} maksimal værdi er ${max}',
                    range: '${label} skal være mellem ${min}-${max}'
                },
                array: {
                    len: 'Skal være ${len} ${label}',
                    min: 'Mindst  ${min} ${label}',
                    max: 'Højst ${max} ${label}',
                    range: 'Mængden af ${label} skal være mellem ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} stemmer ikke overens med mønsteret ${pattern}'
                }
            }
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    465: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ Seite',
        jump_to: 'Gehe zu',
        jump_to_confirm: 'bestätigen',
        page: 'Seite',
        // Pagination
        prev_page: 'Vorherige Seite',
        next_page: 'Nächste Seite',
        prev_5: '5 Seiten zurück',
        next_5: '5 Seiten vor',
        prev_3: '3 Seiten zurück',
        next_3: '3 Seiten vor',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    580: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'de_DE',
        today: 'Heute',
        now: 'Jetzt',
        backToToday: 'Zurück zu Heute',
        ok: 'OK',
        clear: 'Zurücksetzen',
        week: 'Woche',
        month: 'Monat',
        year: 'Jahr',
        timeSelect: 'Zeit wählen',
        dateSelect: 'Datum wählen',
        monthSelect: 'Wähle einen Monat',
        yearSelect: 'Wähle ein Jahr',
        decadeSelect: 'Wähle ein Jahrzehnt',
        dateFormat: 'D.M.YYYY',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        previousMonth: 'Vorheriger Monat (PageUp)',
        nextMonth: 'Nächster Monat (PageDown)',
        previousYear: 'Vorheriges Jahr (Ctrl + left)',
        nextYear: 'Nächstes Jahr (Ctrl + right)',
        previousDecade: 'Vorheriges Jahrzehnt',
        nextDecade: 'Nächstes Jahrzehnt',
        previousCentury: 'Vorheriges Jahrhundert',
        nextCentury: 'Nächstes Jahrhundert'
    });
    var _default = exports.default = locale;
    }}),
    6561: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/de_DE.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 6561);
    var __TURBOPACK__imported__module__465__ = __turbopack_context__.i(465);
    // MERGED MODULE: [project]/components/calendar/locale/de_DE.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/de_DE.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__580__ = __turbopack_context__.i(580);
    // MERGED MODULE: [project]/components/time-picker/locale/de_DE.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Zeit auswählen',
        rangePlaceholder: [
            'Startzeit',
            'Endzeit'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Datum auswählen',
            rangePlaceholder: [
                'Startdatum',
                'Enddatum'
            ],
            shortWeekDays: [
                'So',
                'Mo',
                'Di',
                'Mi',
                'Do',
                'Fr',
                'Sa'
            ],
            shortMonths: [
                'Jan',
                'Feb',
                'Mär',
                'Apr',
                'Mai',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Okt',
                'Nov',
                'Dez'
            ],
            ...__TURBOPACK__imported__module__580__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} ist nicht gültig. ${type} erwartet';
    const localeValues = {
        locale: 'de',
        Pagination: __TURBOPACK__imported__module__465__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Bitte auswählen',
            close: 'Schließen'
        },
        Table: {
            filterTitle: 'Filter-Menü',
            filterConfirm: 'OK',
            filterReset: 'Zurücksetzen',
            filterEmptyText: 'Keine Filter',
            filterSearchPlaceholder: 'Suche in Filtern',
            filterCheckAll: 'Alle auswählen',
            selectAll: 'Selektiere Alle',
            selectInvert: 'Selektion Invertieren',
            selectionAll: 'Wählen Sie alle Daten aus',
            sortTitle: 'Sortieren',
            emptyText: 'Keine Daten',
            expand: 'Zeile erweitern',
            collapse: 'Zeile reduzieren',
            triggerDesc: 'Klicken zur absteigenden Sortierung',
            triggerAsc: 'Klicken zur aufsteigenden Sortierung',
            cancelSort: 'Klicken zum Abbrechen der Sortierung'
        },
        Tour: {
            Next: 'Weiter',
            Previous: 'Zurück',
            Finish: 'Fertig'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Abbrechen',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Abbrechen'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Suchen',
            itemUnit: 'Eintrag',
            itemsUnit: 'Einträge',
            remove: 'Entfernen',
            selectCurrent: 'Alle auf aktueller Seite auswählen',
            removeCurrent: 'Auswahl auf aktueller Seite aufheben',
            selectAll: 'Alle auswählen',
            deselectAll: 'Alle abwählen',
            removeAll: 'Auswahl aufheben',
            selectInvert: 'Auswahl umkehren'
        },
        Upload: {
            uploading: 'Hochladen...',
            removeFile: 'Datei entfernen',
            uploadError: 'Fehler beim Hochladen',
            previewFile: 'Dateivorschau',
            downloadFile: 'Download-Datei'
        },
        Empty: {
            description: 'Keine Daten'
        },
        Text: {
            edit: 'Bearbeiten',
            copy: 'Kopieren',
            copied: 'Kopiert',
            expand: 'Erweitern'
        },
        Form: {
            defaultValidateMessages: {
                default: 'Feld-Validierungsfehler: ${label}',
                required: 'Bitte geben Sie ${label} an',
                enum: '${label} muss eines der folgenden sein [${enum}]',
                whitespace: '${label} darf kein Leerzeichen sein',
                date: {
                    format: '${label} ist ein ungültiges Datumsformat',
                    parse: '${label} kann nicht in ein Datum umgewandelt werden',
                    invalid: '${label} ist ein ungültiges Datum'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} muss genau ${len} Zeichen lang sein',
                    min: '${label} muss mindestens ${min} Zeichen lang sein',
                    max: '${label} darf höchstens ${max} Zeichen lang sein',
                    range: '${label} muss zwischen ${min} und ${max} Zeichen lang sein'
                },
                number: {
                    len: '${label} muss gleich ${len} sein',
                    min: '${label} muss mindestens ${min} sein',
                    max: '${label} darf maximal ${max} sein',
                    range: '${label} muss zwischen ${min} und ${max} liegen'
                },
                array: {
                    len: 'Es müssen ${len} ${label} sein',
                    min: 'Es müssen mindestens ${min} ${label} sein',
                    max: 'Es dürfen maximal ${max} ${label} sein',
                    range: 'Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen'
                },
                pattern: {
                    mismatch: '${label} entspricht nicht dem ${pattern} Muster'
                }
            }
        },
        Image: {
            preview: 'Vorschau'
        },
        QRCode: {
            expired: 'QR-Code abgelaufen',
            refresh: 'Aktualisieren'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    2825: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ σελίδα',
        jump_to: 'Μετάβαση',
        jump_to_confirm: 'επιβεβαιώνω',
        page: '',
        // Pagination
        prev_page: 'Προηγούμενη Σελίδα',
        next_page: 'Επόμενη Σελίδα',
        prev_5: 'Προηγούμενες 5 Σελίδες',
        next_5: 'Επόμενες 5 σελίδες',
        prev_3: 'Προηγούμενες 3 Σελίδες',
        next_3: 'Επόμενες 3 Σελίδες',
        page_size: 'Μέγεθος σελίδας'
    };
    var _default = exports.default = locale;
    }}),
    1413: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'el_GR',
        today: 'Σήμερα',
        now: 'Τώρα',
        backToToday: 'Πίσω στη σημερινή μέρα',
        ok: 'OK',
        clear: 'Καθαρισμός',
        week: 'Εβδομάδα',
        month: 'Μήνας',
        year: 'Έτος',
        timeSelect: 'Επιλογή ώρας',
        dateSelect: 'Επιλογή ημερομηνίας',
        monthSelect: 'Επιλογή μήνα',
        yearSelect: 'Επιλογή έτους',
        decadeSelect: 'Επιλογή δεκαετίας',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Προηγούμενος μήνας (PageUp)',
        nextMonth: 'Επόμενος μήνας (PageDown)',
        previousYear: 'Προηγούμενο έτος (Control + αριστερά)',
        nextYear: 'Επόμενο έτος (Control + δεξιά)',
        previousDecade: 'Προηγούμενη δεκαετία',
        nextDecade: 'Επόμενη δεκαετία',
        previousCentury: 'Προηγούμενος αιώνας',
        nextCentury: 'Επόμενος αιώνας'
    });
    var _default = exports.default = locale;
    }}),
    706: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/el_GR.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 706);
    var __TURBOPACK__imported__module__2825__ = __turbopack_context__.i(2825);
    // MERGED MODULE: [project]/components/calendar/locale/el_GR.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/el_GR.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__1413__ = __turbopack_context__.i(1413);
    // MERGED MODULE: [project]/components/time-picker/locale/el_GR.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Επιλέξτε ώρα'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Επιλέξτε ημερομηνία',
            yearPlaceholder: 'Επιλέξτε έτος',
            quarterPlaceholder: 'Επιλέξτε τρίμηνο',
            monthPlaceholder: 'Επιλέξτε μήνα',
            weekPlaceholder: 'Επιλέξτε εβδομάδα',
            rangePlaceholder: [
                'Αρχική ημερομηνία',
                'Τελική ημερομηνία'
            ],
            rangeYearPlaceholder: [
                'Αρχικό έτος',
                'Τελικό έτος'
            ],
            rangeMonthPlaceholder: [
                'Αρχικός μήνας',
                'Τελικός μήνας'
            ],
            rangeQuarterPlaceholder: [
                'Αρχικό τρίμηνο',
                'Τελικό τρίμηνο'
            ],
            rangeWeekPlaceholder: [
                'Αρχική εβδομάδα',
                'Τελική εβδομάδα'
            ],
            ...__TURBOPACK__imported__module__1413__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = 'Το ${label} δεν είναι έγκυρο ${type}';
    const localeValues = {
        locale: 'el',
        Pagination: __TURBOPACK__imported__module__2825__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Παρακαλώ επιλέξτε',
            close: 'Κλείσιμο'
        },
        Table: {
            filterTitle: 'Μενού φίλτρων',
            filterConfirm: 'ΟΚ',
            filterReset: 'Επαναφορά',
            filterEmptyText: 'Χωρίς φίλτρα',
            filterCheckAll: 'Επιλογή όλων',
            filterSearchPlaceholder: 'Αναζήτηση στα φίλτρα',
            emptyText: 'Δεν υπάρχουν δεδομένα',
            selectAll: 'Επιλογή τρέχουσας σελίδας',
            selectInvert: 'Αντιστροφή τρέχουσας σελίδας',
            selectNone: 'Εκκαθάριση όλων των δεδομένων',
            selectionAll: 'Επιλογή όλων των δεδομένων',
            sortTitle: 'Ταξινόμηση',
            expand: 'Ανάπτυξη σειράς',
            collapse: 'Σύμπτυξη σειράς',
            triggerDesc: 'Κλικ για φθίνουσα ταξινόμηση',
            triggerAsc: 'Κλικ για αύξουσα ταξινόμηση',
            cancelSort: 'Κλικ για ακύρωση ταξινόμησης'
        },
        Modal: {
            okText: 'ΟΚ',
            cancelText: 'Άκυρο',
            justOkText: 'Εντάξει'
        },
        Tour: {
            Next: 'Επόμενο',
            Previous: 'Προηγούμενο',
            Finish: 'Τέλος'
        },
        Popconfirm: {
            okText: 'ΟΚ',
            cancelText: 'Άκυρο'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Αναζήτηση',
            itemUnit: 'αντικείμενο',
            itemsUnit: 'αντικείμενα',
            remove: 'Αφαίρεση',
            selectCurrent: 'Επιλογή τρέχουσας σελίδας',
            removeCurrent: 'Αφαίρεση τρέχουσας σελίδας',
            selectAll: 'Επιλογή όλων των δεδομένων',
            removeAll: 'Αφαίρεση όλων των δεδομένων',
            selectInvert: 'Αντιστροφή τρέχουσας σελίδας'
        },
        Upload: {
            uploading: 'Μεταφόρτωση...',
            removeFile: 'Αφαίρεση αρχείου',
            uploadError: 'Σφάλμα μεταφόρτωσης',
            previewFile: 'Προεπισκόπηση αρχείου',
            downloadFile: 'Λήψη αρχείου'
        },
        Empty: {
            description: 'Δεν υπάρχουν δεδομένα'
        },
        Icon: {
            icon: 'εικονίδιο'
        },
        Text: {
            edit: 'Επεξεργασία',
            copy: 'Αντιγραφή',
            copied: 'Αντιγράφηκε',
            expand: 'Ανάπτυξη',
            collapse: 'Σύμπτυξη'
        },
        Form: {
            optional: '(προαιρετικό)',
            defaultValidateMessages: {
                default: 'Σφάλμα επικύρωσης πεδίου για ${label}',
                required: 'Παρακαλώ εισάγετε ${label}',
                enum: 'Το ${label} πρέπει να είναι ένα από [${enum}]',
                whitespace: 'Το ${label} δεν μπορεί να είναι κενός χαρακτήρας',
                date: {
                    format: 'Η μορφή ημερομηνίας του ${label} είναι άκυρη',
                    parse: 'Το ${label} δεν μπορεί να μετατραπεί σε ημερομηνία',
                    invalid: 'Το ${label} είναι μια άκυρη ημερομηνία'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: 'Το ${label} πρέπει να είναι ${len} χαρακτήρες',
                    min: 'Το ${label} πρέπει να είναι τουλάχιστον ${min} χαρακτήρες',
                    max: 'Το ${label} πρέπει να είναι το πολύ ${max} χαρακτήρες',
                    range: 'Το ${label} πρέπει να είναι μεταξύ ${min}-${max} χαρακτήρων'
                },
                number: {
                    len: 'Το ${label} πρέπει να είναι ίσο με ${len}',
                    min: 'Το ${label} πρέπει να είναι τουλάχιστον ${min}',
                    max: 'Το ${label} πρέπει να είναι το πολύ ${max}',
                    range: 'Το ${label} πρέπει να είναι μεταξύ ${min}-${max}'
                },
                array: {
                    len: 'Πρέπει να είναι ${len} ${label}',
                    min: 'Τουλάχιστον ${min} ${label}',
                    max: 'Το πολύ ${max} ${label}',
                    range: 'Το ποσό του ${label} πρέπει να είναι μεταξύ ${min}-${max}'
                },
                pattern: {
                    mismatch: 'Το ${label} δεν ταιριάζει με το μοτίβο ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Προεπισκόπηση'
        },
        QRCode: {
            expired: 'Ο κωδικός QR έληξε',
            refresh: 'Ανανέωση',
            scanned: 'Σαρώθηκε'
        },
        ColorPicker: {
            presetEmpty: 'Κενό',
            transparent: 'Διαφανές',
            singleColor: 'Μονόχρωμο',
            gradientColor: 'Διαβάθμιση χρώματος'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    3606: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ page',
        jump_to: 'Go to',
        jump_to_confirm: 'confirm',
        page: 'Page',
        // Pagination
        prev_page: 'Previous Page',
        next_page: 'Next Page',
        prev_5: 'Previous 5 Pages',
        next_5: 'Next 5 Pages',
        prev_3: 'Previous 3 Pages',
        next_3: 'Next 3 Pages',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    7085: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'en_GB',
        today: 'Today',
        now: 'Now',
        backToToday: 'Back to today',
        ok: 'OK',
        clear: 'Clear',
        week: 'Week',
        month: 'Month',
        year: 'Year',
        timeSelect: 'Select time',
        dateSelect: 'Select date',
        monthSelect: 'Choose a month',
        yearSelect: 'Choose a year',
        decadeSelect: 'Choose a decade',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Previous month (PageUp)',
        nextMonth: 'Next month (PageDown)',
        previousYear: 'Last year (Control + left)',
        nextYear: 'Next year (Control + right)',
        previousDecade: 'Last decade',
        nextDecade: 'Next decade',
        previousCentury: 'Last century',
        nextCentury: 'Next century'
    });
    var _default = exports.default = locale;
    }}),
    2613: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/en_GB.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 2613);
    var __TURBOPACK__imported__module__3606__ = __turbopack_context__.i(3606);
    // MERGED MODULE: [project]/components/calendar/locale/en_GB.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/en_GB.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7085__ = __turbopack_context__.i(7085);
    // MERGED MODULE: [project]/components/time-picker/locale/en_GB.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Select time'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Select date',
            yearPlaceholder: 'Select year',
            quarterPlaceholder: 'Select quarter',
            monthPlaceholder: 'Select month',
            weekPlaceholder: 'Select week',
            rangePlaceholder: [
                'Start date',
                'End date'
            ],
            rangeYearPlaceholder: [
                'Start year',
                'End year'
            ],
            rangeQuarterPlaceholder: [
                'Start quarter',
                'End quarter'
            ],
            rangeMonthPlaceholder: [
                'Start month',
                'End month'
            ],
            rangeWeekPlaceholder: [
                'Start week',
                'End week'
            ],
            ...__TURBOPACK__imported__module__7085__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} is not a valid ${type}';
    const localeValues = {
        locale: 'en-gb',
        Pagination: __TURBOPACK__imported__module__3606__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Please select',
            close: 'Close'
        },
        Table: {
            filterTitle: 'Filter menu',
            filterConfirm: 'OK',
            filterReset: 'Reset',
            filterEmptyText: 'No filters',
            filterCheckAll: 'Select all items',
            filterSearchPlaceholder: 'Search in filters',
            emptyText: 'No data',
            selectAll: 'Select current page',
            selectInvert: 'Invert current page',
            selectNone: 'Clear all data',
            selectionAll: 'Select all data',
            sortTitle: 'Sort',
            expand: 'Expand row',
            collapse: 'Collapse row',
            triggerDesc: 'Click to sort descending',
            triggerAsc: 'Click to sort ascending',
            cancelSort: 'Click to cancel sorting'
        },
        Tour: {
            Next: 'Next',
            Previous: 'Previous',
            Finish: 'Finish'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Cancel',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Cancel'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Search here',
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Remove',
            selectCurrent: 'Select current page',
            removeCurrent: 'Remove current page',
            selectAll: 'Select all data',
            removeAll: 'Remove all data',
            selectInvert: 'Invert current page'
        },
        Upload: {
            uploading: 'Uploading...',
            removeFile: 'Remove file',
            uploadError: 'Upload error',
            previewFile: 'Preview file',
            downloadFile: 'Download file'
        },
        Empty: {
            description: 'No Data'
        },
        Icon: {
            icon: 'icon'
        },
        Text: {
            edit: 'Edit',
            copy: 'Copy',
            copied: 'Copied',
            expand: 'Expand'
        },
        Form: {
            optional: '(optional)',
            defaultValidateMessages: {
                default: 'Field validation error for ${label}',
                required: 'Please enter ${label}',
                enum: '${label} must be one of [${enum}]',
                whitespace: '${label} cannot be a blank character',
                date: {
                    format: '${label} date format is invalid',
                    parse: '${label} cannot be converted to a date',
                    invalid: '${label} is an invalid date'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} must be ${len} characters',
                    min: '${label} must be at least ${min} characters',
                    max: '${label} must be up to ${max} characters',
                    range: '${label} must be between ${min}-${max} characters'
                },
                number: {
                    len: '${label} must be equal to ${len}',
                    min: '${label} must be minimum ${min}',
                    max: '${label} must be maximum ${max}',
                    range: '${label} must be between ${min}-${max}'
                },
                array: {
                    len: 'Must be ${len} ${label}',
                    min: 'At least ${min} ${label}',
                    max: 'At most ${max} ${label}',
                    range: 'The amount of ${label} must be between ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} does not match the pattern ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Preview'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    5622: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ page',
        jump_to: 'Go to',
        jump_to_confirm: 'confirm',
        page: 'Page',
        // Pagination
        prev_page: 'Previous Page',
        next_page: 'Next Page',
        prev_5: 'Previous 5 Pages',
        next_5: 'Next 5 Pages',
        prev_3: 'Previous 3 Pages',
        next_3: 'Next 3 Pages',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    5320: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'en_US',
        today: 'Today',
        now: 'Now',
        backToToday: 'Back to today',
        ok: 'OK',
        clear: 'Clear',
        week: 'Week',
        month: 'Month',
        year: 'Year',
        timeSelect: 'select time',
        dateSelect: 'select date',
        weekSelect: 'Choose a week',
        monthSelect: 'Choose a month',
        yearSelect: 'Choose a year',
        decadeSelect: 'Choose a decade',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'Previous month (PageUp)',
        nextMonth: 'Next month (PageDown)',
        previousYear: 'Last year (Control + left)',
        nextYear: 'Next year (Control + right)',
        previousDecade: 'Last decade',
        nextDecade: 'Next decade',
        previousCentury: 'Last century',
        nextCentury: 'Next century'
    });
    var _default = exports.default = locale;
    }}),
    4330: [((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/calendar/locale/en_US.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__2
    }, 4330);
    // MERGED MODULE: [project]/components/date-picker/locale/en_US.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__1
    }, 148);
    var __TURBOPACK__imported__module__5320__ = __turbopack_context__.i(5320);
    // MERGED MODULE: [project]/components/time-picker/locale/en_US.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    }, 9625);
    const locale = {
        placeholder: 'Select time',
        rangePlaceholder: [
            'Start time',
            'End time'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Select date',
            yearPlaceholder: 'Select year',
            quarterPlaceholder: 'Select quarter',
            monthPlaceholder: 'Select month',
            weekPlaceholder: 'Select week',
            rangePlaceholder: [
                'Start date',
                'End date'
            ],
            rangeYearPlaceholder: [
                'Start year',
                'End year'
            ],
            rangeQuarterPlaceholder: [
                'Start quarter',
                'End quarter'
            ],
            rangeMonthPlaceholder: [
                'Start month',
                'End month'
            ],
            rangeWeekPlaceholder: [
                'Start week',
                'End week'
            ],
            ...__TURBOPACK__imported__module__5320__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    }), [9625,148]]
    ,
    8433: ((__turbopack_context__) => {
    "use strict";
    
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    });
    var __TURBOPACK__imported__module__5622__ = __turbopack_context__.i(5622);
    var __TURBOPACK__imported__module__4330__ = __turbopack_context__.i(4330);
    var __TURBOPACK__imported__module__148__ = __turbopack_context__.i(148);
    var __TURBOPACK__imported__module__9625__ = __turbopack_context__.i(9625);
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} is not a valid ${type}';
    const localeValues = {
        locale: 'en',
        Pagination: __TURBOPACK__imported__module__5622__["default"],
        DatePicker: __TURBOPACK__imported__module__148__["default"],
        TimePicker: __TURBOPACK__imported__module__9625__["default"],
        Calendar: __TURBOPACK__imported__module__4330__["default"],
        global: {
            placeholder: 'Please select',
            close: 'Close'
        },
        Table: {
            filterTitle: 'Filter menu',
            filterConfirm: 'OK',
            filterReset: 'Reset',
            filterEmptyText: 'No filters',
            filterCheckAll: 'Select all items',
            filterSearchPlaceholder: 'Search in filters',
            emptyText: 'No data',
            selectAll: 'Select current page',
            selectInvert: 'Invert current page',
            selectNone: 'Clear all data',
            selectionAll: 'Select all data',
            sortTitle: 'Sort',
            expand: 'Expand row',
            collapse: 'Collapse row',
            triggerDesc: 'Click to sort descending',
            triggerAsc: 'Click to sort ascending',
            cancelSort: 'Click to cancel sorting'
        },
        Tour: {
            Next: 'Next',
            Previous: 'Previous',
            Finish: 'Finish'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Cancel',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Cancel'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Search here',
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Remove',
            selectCurrent: 'Select current page',
            removeCurrent: 'Remove current page',
            selectAll: 'Select all data',
            deselectAll: 'Deselect all data',
            removeAll: 'Remove all data',
            selectInvert: 'Invert current page'
        },
        Upload: {
            uploading: 'Uploading...',
            removeFile: 'Remove file',
            uploadError: 'Upload error',
            previewFile: 'Preview file',
            downloadFile: 'Download file'
        },
        Empty: {
            description: 'No data'
        },
        Icon: {
            icon: 'icon'
        },
        Text: {
            edit: 'Edit',
            copy: 'Copy',
            copied: 'Copied',
            expand: 'Expand',
            collapse: 'Collapse'
        },
        Form: {
            optional: '(optional)',
            defaultValidateMessages: {
                default: 'Field validation error for ${label}',
                required: 'Please enter ${label}',
                enum: '${label} must be one of [${enum}]',
                whitespace: '${label} cannot be a blank character',
                date: {
                    format: '${label} date format is invalid',
                    parse: '${label} cannot be converted to a date',
                    invalid: '${label} is an invalid date'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} must be ${len} characters',
                    min: '${label} must be at least ${min} characters',
                    max: '${label} must be up to ${max} characters',
                    range: '${label} must be between ${min}-${max} characters'
                },
                number: {
                    len: '${label} must be equal to ${len}',
                    min: '${label} must be minimum ${min}',
                    max: '${label} must be maximum ${max}',
                    range: '${label} must be between ${min}-${max}'
                },
                array: {
                    len: 'Must be ${len} ${label}',
                    min: 'At least ${min} ${label}',
                    max: 'At most ${max} ${label}',
                    range: 'The amount of ${label} must be between ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} does not match the pattern ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Preview'
        },
        QRCode: {
            expired: 'QR code expired',
            refresh: 'Refresh',
            scanned: 'Scanned'
        },
        ColorPicker: {
            presetEmpty: 'Empty',
            transparent: 'Transparent',
            singleColor: 'Single',
            gradientColor: 'Gradient'
        }
    };
    const __TURBOPACK__default__export__ = localeValues;
    }),
    8380: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ página',
        jump_to: 'Ir a',
        jump_to_confirm: 'confirmar',
        page: 'Página',
        // Pagination
        prev_page: 'Página anterior',
        next_page: 'Página siguiente',
        prev_5: '5 páginas previas',
        next_5: '5 páginas siguientes',
        prev_3: '3 páginas previas',
        next_3: '3 páginas siguientes',
        page_size: 'tamaño de página'
    };
    var _default = exports.default = locale;
    }}),
    9812: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'es_ES',
        today: 'Hoy',
        now: 'Ahora',
        backToToday: 'Volver a hoy',
        ok: 'Aceptar',
        clear: 'Limpiar',
        week: 'Semana',
        month: 'Mes',
        year: 'Año',
        timeSelect: 'Seleccionar hora',
        dateSelect: 'Seleccionar fecha',
        monthSelect: 'Elegir un mes',
        yearSelect: 'Elegir un año',
        decadeSelect: 'Elegir una década',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Mes anterior (PageUp)',
        nextMonth: 'Mes siguiente (PageDown)',
        previousYear: 'Año anterior (Control + left)',
        nextYear: 'Año siguiente (Control + right)',
        previousDecade: 'Década anterior',
        nextDecade: 'Década siguiente',
        previousCentury: 'Siglo anterior',
        nextCentury: 'Siglo siguiente'
    });
    var _default = exports.default = locale;
    }}),
    7746: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/es_ES.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 7746);
    var __TURBOPACK__imported__module__8380__ = __turbopack_context__.i(8380);
    // MERGED MODULE: [project]/components/calendar/locale/es_ES.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/es_ES.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__9812__ = __turbopack_context__.i(9812);
    // MERGED MODULE: [project]/components/time-picker/locale/es_ES.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Seleccionar hora'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Seleccionar fecha',
            rangePlaceholder: [
                'Fecha inicial',
                'Fecha final'
            ],
            shortWeekDays: [
                'Dom',
                'Lun',
                'Mar',
                'Mié',
                'Jue',
                'Vie',
                'Sáb'
            ],
            shortMonths: [
                'Ene',
                'Feb',
                'Mar',
                'Abr',
                'May',
                'Jun',
                'Jul',
                'Ago',
                'Sep',
                'Oct',
                'Nov',
                'Dic'
            ],
            ...__TURBOPACK__imported__module__9812__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} no es un ${type} válido';
    const localeValues = {
        locale: 'es',
        Pagination: __TURBOPACK__imported__module__8380__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Seleccione',
            close: 'Cerrar'
        },
        Table: {
            filterTitle: 'Filtrar menú',
            filterConfirm: 'Aceptar',
            filterReset: 'Reiniciar',
            filterEmptyText: 'Sin filtros',
            filterCheckAll: 'Seleccionar todo',
            filterSearchPlaceholder: 'Buscar en filtros',
            emptyText: 'Sin datos',
            selectAll: 'Seleccionar todo',
            selectInvert: 'Invertir selección',
            selectNone: 'Vacíe todo',
            selectionAll: 'Seleccionar todos los datos',
            sortTitle: 'Ordenar',
            expand: 'Expandir fila',
            collapse: 'Colapsar fila',
            triggerDesc: 'Click para ordenar en orden descendente',
            triggerAsc: 'Click para ordenar en orden ascendente',
            cancelSort: 'Click para cancelar ordenamiento'
        },
        Tour: {
            Next: 'Siguiente',
            Previous: 'Anterior',
            Finish: 'Finalizar'
        },
        Modal: {
            okText: 'Aceptar',
            cancelText: 'Cancelar',
            justOkText: 'Aceptar'
        },
        Popconfirm: {
            okText: 'Aceptar',
            cancelText: 'Cancelar'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Buscar aquí',
            itemUnit: 'elemento',
            itemsUnit: 'elementos',
            remove: 'Eliminar',
            selectCurrent: 'Seleccionar página actual',
            removeCurrent: 'Eliminar página actual',
            selectAll: 'Seleccionar todos los datos',
            removeAll: 'Eliminar todos los datos',
            selectInvert: 'Invertir página actual'
        },
        Upload: {
            uploading: 'Subiendo...',
            removeFile: 'Eliminar archivo',
            uploadError: 'Error al subir el archivo',
            previewFile: 'Vista previa',
            downloadFile: 'Descargar archivo'
        },
        Empty: {
            description: 'No hay datos'
        },
        Icon: {
            icon: 'ícono'
        },
        Text: {
            edit: 'Editar',
            copy: 'Copiar',
            copied: 'Copiado',
            expand: 'Expandir'
        },
        Form: {
            optional: '(opcional)',
            defaultValidateMessages: {
                default: 'Error de validación del campo ${label}',
                required: 'Por favor, rellena ${label}',
                enum: '${label} debe ser uno de [${enum}]',
                whitespace: '${label} no puede ser un carácter en blanco',
                date: {
                    format: 'El formato de fecha de ${label} es inválido',
                    parse: '${label} no se puede convertir a una fecha',
                    invalid: '${label} es una fecha inválida'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} debe tener ${len} caracteres',
                    min: '${label} debe tener al menos ${min} caracteres',
                    max: '${label} debe tener hasta ${max} caracteres',
                    range: '${label} debe tener entre ${min}-${max} caracteres'
                },
                number: {
                    len: '${label} debe ser igual a ${len}',
                    min: '${label} valor mínimo es ${min}',
                    max: '${label} valor máximo es ${max}',
                    range: '${label} debe ser entre ${min}-${max}'
                },
                array: {
                    len: 'Debe ser ${len} ${label}',
                    min: 'Al menos ${min} ${label}',
                    max: 'Como máximo ${max} ${label}',
                    range: 'El valor de ${label} debe estar entre ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} no coincide con el patrón ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Previsualización'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    402: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ leheküljel',
        jump_to: 'Hüppa',
        jump_to_confirm: 'Kinnitage',
        page: '',
        // Pagination
        prev_page: 'Eelmine leht',
        next_page: 'Järgmine leht',
        prev_5: 'Eelmised 5 lehekülge',
        next_5: 'Järgmised 5 lehekülge',
        prev_3: 'Eelmised 3 lehekülge',
        next_3: 'Järgmised 3 lehekülge',
        page_size: 'lehe suurus'
    };
    var _default = exports.default = locale;
    }}),
    9685: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'et_EE',
        today: 'Täna',
        now: 'Praegu',
        backToToday: 'Tagasi tänase juurde',
        ok: 'OK',
        clear: 'Tühista',
        week: 'Nädal',
        month: 'Kuu',
        year: 'Aasta',
        timeSelect: 'Vali aeg',
        dateSelect: 'Vali kuupäev',
        monthSelect: 'Vali kuu',
        yearSelect: 'Vali aasta',
        decadeSelect: 'Vali dekaad',
        dateFormat: 'D.M.YYYY',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        previousMonth: 'Eelmine kuu (PageUp)',
        nextMonth: 'Järgmine kuu (PageDown)',
        previousYear: 'Eelmine aasta (Control + left)',
        nextYear: 'Järgmine aasta (Control + right)',
        previousDecade: 'Eelmine dekaad',
        nextDecade: 'Järgmine dekaad',
        previousCentury: 'Eelmine sajand',
        nextCentury: 'Järgmine sajand'
    });
    var _default = exports.default = locale;
    }}),
    3272: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/et_EE.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 3272);
    var __TURBOPACK__imported__module__402__ = __turbopack_context__.i(402);
    // MERGED MODULE: [project]/components/calendar/locale/et_EE.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/et_EE.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__9685__ = __turbopack_context__.i(9685);
    // MERGED MODULE: [project]/components/time-picker/locale/et_EE.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Vali aeg'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // 统一合并为完整的 Locale
    const locale1 = {
        lang: {
            placeholder: 'Vali kuupäev',
            rangePlaceholder: [
                'Algus kuupäev',
                'Lõpu kuupäev'
            ],
            ...__TURBOPACK__imported__module__9685__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} ei ole kehtiv ${type}';
    const localeValues = {
        locale: 'et',
        Pagination: __TURBOPACK__imported__module__402__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Palun vali',
            close: 'Sulge'
        },
        Table: {
            filterTitle: 'Filtri menüü',
            filterConfirm: 'OK',
            filterReset: 'Nulli',
            filterEmptyText: 'Filtreid pole',
            filterCheckAll: 'Vali kõik',
            filterSearchPlaceholder: 'Otsi filtritest',
            emptyText: 'Andmed puuduvad',
            selectAll: 'Vali kõik',
            selectInvert: 'Inverteeri valik',
            selectNone: 'Kustuta kõik andmed',
            selectionAll: 'Vali kõik andmed',
            sortTitle: 'Sorteeri',
            expand: 'Laienda rida',
            collapse: 'Ahenda rida',
            triggerDesc: 'Klõpsa kahanevalt sortimiseks',
            triggerAsc: 'Klõpsa kasvavalt sortimiseks',
            cancelSort: 'Klõpsa sortimise tühistamiseks'
        },
        Tour: {
            Next: 'Järgmine',
            Previous: 'Eelmine',
            Finish: 'Lõpetada'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Tühista',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Tühista'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Otsi siit',
            itemUnit: 'kogus',
            itemsUnit: 'kogused',
            remove: 'Eemalda',
            selectCurrent: 'Vali praegune leht',
            removeCurrent: 'Eemalda praegune leht',
            selectAll: 'Vali kõik',
            removeAll: 'Eemalda kõik andmed',
            selectInvert: 'Inverteeri valik'
        },
        Upload: {
            uploading: 'Üleslaadimine...',
            removeFile: 'Eemalda fail',
            uploadError: 'Üleslaadimise tõrge',
            previewFile: 'Faili eelvaade',
            downloadFile: 'Lae fail alla'
        },
        Empty: {
            description: 'Andmed puuduvad'
        },
        Icon: {
            icon: 'ikoon'
        },
        Text: {
            edit: 'Muuda',
            copy: 'Kopeeri',
            copied: 'Kopeeritud',
            expand: 'Laienda'
        },
        Form: {
            optional: '(valikuline)',
            defaultValidateMessages: {
                default: '${label} välja valideerimise viga',
                required: 'Palun sisesta ${label}',
                enum: '${label} peab olema üks järgmistest: [${enum}]',
                whitespace: '${label} ei saa olla tühi märk',
                date: {
                    format: '${label} kuupäevavorming on kehtetu',
                    parse: '${label} ei saa kuupäevaks teisendada',
                    invalid: '${label} on vale kuupäev'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} peab koosnema ${len} tähemärgist',
                    min: '${label} peab olema vähemalt ${min} tähemärki',
                    max: '${label} peab olema kuni ${max} tähemärki',
                    range: '${label} peab olema vahemikus ${min}–${max} tähemärki'
                },
                number: {
                    len: '${label} must be equal to ${len}',
                    min: '${label} peab olema vähemalt ${min}',
                    max: '${label} peab olema maksimaalne ${max}',
                    range: '${label} peab olema vahemikus ${min}–${max}'
                },
                array: {
                    len: 'Peab olema ${len} ${label}',
                    min: 'Vähemalt ${min} ${label}',
                    max: 'Maksimaalselt ${max} ${label}',
                    range: '${label} summa peab olema vahemikus ${min}–${max}'
                },
                pattern: {
                    mismatch: '${label} ei vasta mustrile ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Eelvaade'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    1959: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ orrialde',
        jump_to: '-ra joan',
        jump_to_confirm: 'baieztatu',
        page: 'Orrialde',
        // Pagination
        prev_page: 'Aurreko orrialdea',
        next_page: 'Hurrengo orrialdea',
        prev_5: 'aurreko 5 orrialde',
        next_5: 'hurrengo 5 orrialde',
        prev_3: 'aurreko 3 orrialde',
        next_3: 'hurrengo 3 orrialde',
        page_size: 'orrien tamaina'
    };
    var _default = exports.default = locale;
    }}),
    532: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'eu_ES',
        today: 'Gaur',
        now: 'Orain',
        backToToday: 'Gaur itzuli',
        ok: 'OK',
        clear: 'Garbitu',
        week: 'Asteko',
        month: 'Hilabete',
        year: 'Urte',
        timeSelect: 'Ordua aukeratu',
        dateSelect: 'Eguna aukeratu',
        weekSelect: 'Astea aukeratu',
        monthSelect: 'Hilabetea aukeratu',
        yearSelect: 'Urtea aukeratu',
        decadeSelect: 'Hamarkada aukeratu',
        dateFormat: 'YYYY/M/D',
        dateTimeFormat: 'YYYY/M/D HH:mm:ss',
        monthBeforeYear: false,
        previousMonth: 'Aurreko hilabetea (RePag)',
        nextMonth: 'Urrengo hilabetea (AvPag)',
        previousYear: 'Aurreko urtea (Control + ezkerra)',
        nextYear: 'Urrento urtea (Control + eskuina)',
        previousDecade: 'Aurreko hamarkada',
        nextDecade: 'Urrengo hamarkada',
        previousCentury: 'Aurreko mendea',
        nextCentury: 'Urrengo mendea'
    });
    var _default = exports.default = locale;
    }}),
    6849: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/eu_ES.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 6849);
    var __TURBOPACK__imported__module__1959__ = __turbopack_context__.i(1959);
    // MERGED MODULE: [project]/components/calendar/locale/eu_ES.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/eu_ES.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__532__ = __turbopack_context__.i(532);
    // MERGED MODULE: [project]/components/time-picker/locale/eu_ES.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Aukeratu ordua'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Hautatu data',
            rangePlaceholder: [
                'Hasierako data',
                'Amaiera data'
            ],
            ...__TURBOPACK__imported__module__532__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} ez da ${type} balioduna';
    const localeValues = {
        locale: 'eu',
        Pagination: __TURBOPACK__imported__module__1959__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Aukeratu',
            close: 'Itxi'
        },
        Table: {
            filterTitle: 'Iragazi menua',
            filterConfirm: 'Onartu',
            filterReset: 'Garbitu',
            filterEmptyText: 'Iragazkirik gabe',
            filterCheckAll: 'Hautatu dena',
            filterSearchPlaceholder: 'Bilatu iragazkietan',
            emptyText: 'Daturik gabe',
            selectAll: 'Hautatu dena',
            selectInvert: 'Alderantzikatu hautaketa',
            selectNone: 'Hustu dena',
            selectionAll: 'Hautatu datu guztiak',
            sortTitle: 'Ordenatu',
            expand: 'Zabaldu',
            collapse: 'Itxi',
            triggerDesc: 'Egin klik beheranzko ordenean ordenatzeko',
            triggerAsc: 'Egin klik goranzko ordenean ordenatzeko',
            cancelSort: 'Egin klik ordenamendua ezeztatzeko'
        },
        Tour: {
            Next: 'Hurrengoa',
            Previous: 'Aurrekoa',
            Finish: 'Bukatu'
        },
        Modal: {
            okText: 'Onartu',
            cancelText: 'Utzi',
            justOkText: 'Onartu'
        },
        Popconfirm: {
            okText: 'Onartu',
            cancelText: 'Utzi'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Bilatu hemen',
            itemUnit: 'elementu',
            itemsUnit: 'elementuak',
            remove: 'Ezabatu',
            selectCurrent: 'Hautatu uneko orria',
            removeCurrent: 'Uneko orria ezabatu',
            selectAll: 'Datu guztiak hautatu',
            removeAll: 'Ezabatu datu guztiak',
            selectInvert: 'Uneko orrialdea alderantzikatu'
        },
        Upload: {
            uploading: 'Igotzen...',
            removeFile: 'Fitxategia ezabatu',
            uploadError: 'Errorea fitxategia igotzerakoan',
            previewFile: 'Aurrebista',
            downloadFile: 'Fitxategia deskargatu'
        },
        Empty: {
            description: 'Ez dago daturik'
        },
        Icon: {
            icon: 'ikono'
        },
        Text: {
            edit: 'Editatu',
            copy: 'Kopiatu',
            copied: 'Kopiatuta',
            expand: 'Zabaldu'
        },
        Form: {
            optional: '(aukerakoa)',
            defaultValidateMessages: {
                default: '${label} eremuaren balidazio errorea',
                required: 'Mesedez, sartu ${label}',
                enum: '${label} [${enum}] -tako bat izan behar da',
                whitespace: '${label} ezin da izan karaktere zuri bat',
                date: {
                    format: '${label} dataren formatua baliogabea da',
                    parse: '${label} ezin da data batera doitu',
                    invalid: '${label} data baliogabea da'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} eremuak ${len} karaktere izan dehar ditu',
                    min: '${label} eremuak gutxienez ${min} karaktere izan behar ditu',
                    max: '${label} eremuak gehienez ${max} karaktere izan behar ditu',
                    range: '${label} eremuak ${min}-${max} karaktere artean izan behar ditu'
                },
                number: {
                    len: '${label} eremuaren balioa ${len} izan behar da',
                    min: '${label} eremuaren balio minimoa ${min} da',
                    max: '${label} eremuaren balio maximoa ${max} da',
                    range: '${label} eremuaren balioa ${min}-${max} artekoa izan behar da'
                },
                array: {
                    len: '${len} ${label} izan behar dira',
                    min: 'Gutxienez ${min} ${label}',
                    max: 'Gehienez ${max} ${label}',
                    range: '${label} kopuruak ${min}-${max} -ra bitartekoa izan behar du'
                },
                pattern: {
                    mismatch: '${label} ez dator bat ${pattern} patroiarekin'
                }
            }
        },
        Image: {
            preview: 'Aurrebista'
        },
        QRCode: {
            expired: 'QR kodea kadukatuta',
            refresh: 'Freskatu'
        },
        ColorPicker: {
            presetEmpty: 'Hustu',
            transparent: 'Gardena',
            singleColor: 'Kolore bakarra',
            gradientColor: 'Gradiente kolorea'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6503: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ صفحه',
        jump_to: 'برو به',
        jump_to_confirm: 'تایید',
        page: '',
        // Pagination
        prev_page: 'صفحه قبلی',
        next_page: 'صفحه بعدی',
        prev_5: '۵ صفحه قبلی',
        next_5: '۵ صفحه بعدی',
        prev_3: '۳ صفحه قبلی',
        next_3: '۳ صفحه بعدی',
        page_size: 'اندازه صفحه'
    };
    var _default = exports.default = locale;
    }}),
    5728: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'fa_IR',
        today: 'امروز',
        now: 'اکنون',
        backToToday: 'بازگشت به روز',
        ok: 'باشه',
        clear: 'پاک کردن',
        week: 'هفته',
        month: 'ماه',
        year: 'سال',
        timeSelect: 'انتخاب زمان',
        dateSelect: 'انتخاب تاریخ',
        monthSelect: 'یک ماه را انتخاب کنید',
        yearSelect: 'یک سال را انتخاب کنید',
        decadeSelect: 'یک دهه را انتخاب کنید',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'ماه قبل (PageUp)',
        nextMonth: 'ماه بعد (PageDown)',
        previousYear: 'سال قبل (Control + left)',
        nextYear: 'سال بعد (Control + right)',
        previousDecade: 'دهه قبل',
        nextDecade: 'دهه بعد',
        previousCentury: 'قرن قبل',
        nextCentury: 'قرن بعد'
    });
    var _default = exports.default = locale;
    }}),
    4112: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/fa_IR.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4112);
    var __TURBOPACK__imported__module__6503__ = __turbopack_context__.i(6503);
    // MERGED MODULE: [project]/components/calendar/locale/fa_IR.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/fa_IR.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__5728__ = __turbopack_context__.i(5728);
    // MERGED MODULE: [project]/components/time-picker/locale/fa_IR.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'انتخاب زمان',
        rangePlaceholder: [
            'زمان شروع',
            'زمان پایان'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'انتخاب تاریخ',
            yearPlaceholder: 'انتخاب سال',
            quarterPlaceholder: 'انتخاب فصل',
            monthPlaceholder: 'انتخاب ماه',
            weekPlaceholder: 'انتخاب هفته',
            rangePlaceholder: [
                'تاریخ شروع',
                'تاریخ پایان'
            ],
            rangeYearPlaceholder: [
                'سال شروع',
                'سال پایان'
            ],
            rangeQuarterPlaceholder: [
                'فصل شروع',
                'فصل پایان'
            ],
            rangeMonthPlaceholder: [
                'ماه شروع',
                'ماه پایان'
            ],
            rangeWeekPlaceholder: [
                'هفته شروع',
                'هفته پایان'
            ],
            ...__TURBOPACK__imported__module__5728__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} از نوع ${type} معتبر نیست';
    const localeValues = {
        locale: 'fa',
        Pagination: __TURBOPACK__imported__module__6503__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'لطفاً انتخاب کنید',
            close: 'بستن'
        },
        Table: {
            filterTitle: 'منوی فیلتر',
            filterConfirm: 'تایید',
            filterReset: 'پاک کردن',
            filterEmptyText: 'بدون فیلتر',
            filterCheckAll: 'انتخاب همه‌ی موارد',
            filterSearchPlaceholder: 'جستجو در فیلترها',
            emptyText: 'بدون داده',
            selectAll: 'انتخاب صفحه‌ی کنونی',
            selectInvert: 'معکوس کردن انتخاب‌ها در صفحه‌ی کنونی',
            selectNone: 'انتخاب هیچکدام',
            selectionAll: 'انتخاب همه‌ی داده‌ها',
            sortTitle: 'مرتب سازی',
            expand: 'باز شدن ردیف',
            collapse: 'بستن ردیف',
            triggerDesc: 'ترتیب نزولی',
            triggerAsc: 'ترتیب صعودی',
            cancelSort: 'لغوِ ترتیبِ داده شده'
        },
        Tour: {
            Next: 'بعدی',
            Previous: 'قبلی',
            Finish: 'پایان'
        },
        Modal: {
            okText: 'تایید',
            cancelText: 'لغو',
            justOkText: 'تایید'
        },
        Popconfirm: {
            okText: 'تایید',
            cancelText: 'لغو'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'جستجو',
            itemUnit: 'عدد',
            itemsUnit: 'عدد',
            remove: 'حذف',
            selectCurrent: 'انتخاب صفحه فعلی',
            removeCurrent: 'پاک کردن انتخاب‌های صفحه فعلی',
            selectAll: 'انتخاب همه',
            deselectAll: 'لغو انتخاب همه',
            removeAll: 'پاک کردن همه انتخاب‌ها',
            selectInvert: 'معکوس کردن انتخاب‌ها در صفحه‌ی کنونی'
        },
        Upload: {
            uploading: 'در حال آپلود...',
            removeFile: 'حذف فایل',
            uploadError: 'خطا در آپلود',
            previewFile: 'مشاهده‌ی فایل',
            downloadFile: 'دریافت فایل'
        },
        Empty: {
            description: 'داده‌ای موجود نیست'
        },
        Icon: {
            icon: 'آیکن'
        },
        Text: {
            edit: 'ویرایش',
            copy: 'کپی',
            copied: 'کپی شد',
            expand: 'توسعه',
            collapse: 'بستن'
        },
        Form: {
            optional: '(اختیاری)',
            defaultValidateMessages: {
                default: 'خطا در ${label}',
                required: 'فیلد ${label} اجباریست',
                enum: '${label} باید یکی از [${enum}] باشد',
                whitespace: '${label} نمیتواند خالی باشد',
                date: {
                    format: 'ساختار تاریخ در ${label} نامعتبر است',
                    parse: '${label} قابل تبدیل به تاریخ نیست',
                    invalid: '${label} تاریخی نا معتبر است'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} باید ${len} کاراکتر باشد',
                    min: '${label} باید حداقل ${min} کاراکتر باشد',
                    max: '${label} باید حداکثر ${max} کاراکتر باشد',
                    range: '${label} باید بین ${min}-${max} کاراکتر باشد'
                },
                number: {
                    len: '${label} باید برابر ${len}',
                    min: '${label} حداقل میتواند ${min} باشد',
                    max: '${label} حداکثر میتواند ${max} باشد',
                    range: '${label} باید بین ${min}-${max} باشد'
                },
                array: {
                    len: 'تعداد ${label} باید ${len} باشد.',
                    min: 'تعداد ${label} حداقل باید ${min} باشد',
                    max: 'تعداد ${label} حداکثر باید ${max} باشد',
                    range: 'مقدار ${label} باید بین ${min}-${max} باشد'
                },
                pattern: {
                    mismatch: 'الگوی ${label} با ${pattern} برابری نمی‌کند'
                }
            }
        },
        Image: {
            preview: 'پیش‌نمایش'
        },
        QRCode: {
            expired: 'کد QR منقضی شد',
            refresh: 'به‌روزرسانی',
            scanned: 'اسکن شد'
        },
        ColorPicker: {
            presetEmpty: 'خالی',
            transparent: 'شفاف',
            singleColor: 'تک‌رنگ',
            gradientColor: 'گرادینت'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6607: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ sivu',
        jump_to: 'Mene',
        jump_to_confirm: 'Potvrdite',
        page: 'Sivu',
        // Pagination
        prev_page: 'Edellinen sivu',
        next_page: 'Seuraava sivu',
        prev_5: 'Edelliset 5 sivua',
        next_5: 'Seuraavat 5 sivua',
        prev_3: 'Edelliset 3 sivua',
        next_3: 'Seuraavat 3 sivua',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    3646: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'fi_FI',
        today: 'Tänään',
        now: 'Nyt',
        backToToday: 'Tämä päivä',
        ok: 'OK',
        clear: 'Tyhjennä',
        week: 'Viikko',
        month: 'Kuukausi',
        year: 'Vuosi',
        timeSelect: 'Valise aika',
        dateSelect: 'Valitse päivä',
        monthSelect: 'Valitse kuukausi',
        yearSelect: 'Valitse vuosi',
        decadeSelect: 'Valitse vuosikymmen',
        dateFormat: 'D.M.YYYY',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        previousMonth: 'Edellinen kuukausi (PageUp)',
        nextMonth: 'Seuraava kuukausi (PageDown)',
        previousYear: 'Edellinen vuosi (Control + left)',
        nextYear: 'Seuraava vuosi (Control + right)',
        previousDecade: 'Edellinen vuosikymmen',
        nextDecade: 'Seuraava vuosikymmen',
        previousCentury: 'Edellinen vuosisata',
        nextCentury: 'Seuraava vuosisata'
    });
    var _default = exports.default = locale;
    }}),
    7649: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/fi_FI.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 7649);
    var __TURBOPACK__imported__module__6607__ = __turbopack_context__.i(6607);
    // MERGED MODULE: [project]/components/calendar/locale/fi_FI.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/fi_FI.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__3646__ = __turbopack_context__.i(3646);
    // MERGED MODULE: [project]/components/time-picker/locale/fi_FI.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Valitse aika'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Valitse päivä',
            rangePlaceholder: [
                'Alkamispäivä',
                'Päättymispäivä'
            ],
            ...__TURBOPACK__imported__module__3646__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const localeValues = {
        locale: 'fi',
        Pagination: __TURBOPACK__imported__module__6607__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'Sulje'
        },
        Table: {
            filterTitle: 'Suodatus valikko',
            filterConfirm: 'OK',
            filterReset: 'Tyhjennä',
            selectAll: 'Valitse kaikki',
            selectInvert: 'Valitse päinvastoin',
            sortTitle: 'Lajittele',
            triggerDesc: 'Lajittele laskevasti',
            triggerAsc: 'Lajittele nousevasti',
            cancelSort: 'Peruuta lajittelu'
        },
        Tour: {
            Next: 'Seuraava',
            Previous: 'Edellinen',
            Finish: 'Valmis'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Peruuta',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Peruuta'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Etsi täältä',
            itemUnit: 'kohde',
            itemsUnit: 'kohdetta'
        },
        Upload: {
            uploading: 'Lähetetään...',
            removeFile: 'Poista tiedosto',
            uploadError: 'Virhe lähetyksessä',
            previewFile: 'Esikatsele tiedostoa',
            downloadFile: 'Lataa tiedosto'
        },
        Empty: {
            description: 'Ei kohteita'
        },
        Text: {
            edit: 'Muokkaa',
            copy: 'Kopioi',
            copied: 'Kopioitu',
            expand: 'Näytä lisää'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    5712: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ page',
        jump_to: 'Aller à',
        jump_to_confirm: 'confirmer',
        page: '',
        // Pagination
        prev_page: 'Page précédente',
        next_page: 'Page suivante',
        prev_5: '5 Pages précédentes',
        next_5: '5 Pages suivantes',
        prev_3: '3 Pages précédentes',
        next_3: '3 Pages suivantes',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    2883: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'fr_BE',
        today: "Aujourd'hui",
        now: 'Maintenant',
        backToToday: "Aujourd'hui",
        ok: 'OK',
        clear: 'Rétablir',
        week: 'Semaine',
        month: 'Mois',
        year: 'Année',
        timeSelect: "Sélectionner l'heure",
        dateSelect: "Sélectionner l'heure",
        monthSelect: 'Choisissez un mois',
        yearSelect: 'Choisissez une année',
        decadeSelect: 'Choisissez une décennie',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Mois précédent (PageUp)',
        nextMonth: 'Mois suivant (PageDown)',
        previousYear: 'Année précédente (Ctrl + gauche)',
        nextYear: 'Année prochaine (Ctrl + droite)',
        previousDecade: 'Décennie précédente',
        nextDecade: 'Décennie suivante',
        previousCentury: 'Siècle précédent',
        nextCentury: 'Siècle suivant'
    });
    var _default = exports.default = locale;
    }}),
    9976: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/fr_BE.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 9976);
    var __TURBOPACK__imported__module__5712__ = __turbopack_context__.i(5712);
    // MERGED MODULE: [project]/components/calendar/locale/fr_BE.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/fr_BE.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__2883__ = __turbopack_context__.i(2883);
    // MERGED MODULE: [project]/components/time-picker/locale/fr_BE.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: "Sélectionner l'heure",
        rangePlaceholder: [
            'Heure de début',
            'Heure de fin'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Sélectionner une date',
            yearPlaceholder: 'Sélectionner une année',
            quarterPlaceholder: 'Sélectionner un trimestre',
            monthPlaceholder: 'Sélectionner un mois',
            weekPlaceholder: 'Sélectionner une semaine',
            rangePlaceholder: [
                'Date de début',
                'Date de fin'
            ],
            rangeYearPlaceholder: [
                'Année de début',
                'Année de fin'
            ],
            rangeMonthPlaceholder: [
                'Mois de début',
                'Mois de fin'
            ],
            rangeWeekPlaceholder: [
                'Semaine de début',
                'Semaine de fin'
            ],
            ...__TURBOPACK__imported__module__2883__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = "La valeur du champ ${label} n'est pas valide pour le type ${type}";
    const localeValues = {
        locale: 'fr',
        Pagination: __TURBOPACK__imported__module__5712__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'Fermer'
        },
        Table: {
            filterTitle: 'Filtrer',
            filterConfirm: 'OK',
            filterReset: 'Réinitialiser',
            filterEmptyText: 'Aucun filtre',
            filterCheckAll: 'Tout sélectionner',
            filterSearchPlaceholder: 'Chercher dans les filtres',
            emptyText: 'Aucune donnée',
            selectAll: 'Sélectionner la page actuelle',
            selectInvert: 'Inverser la sélection de la page actuelle',
            selectNone: 'Désélectionner toutes les données',
            selectionAll: 'Sélectionner toutes les données',
            sortTitle: 'Trier',
            expand: 'Développer la ligne',
            collapse: 'Réduire la ligne',
            triggerDesc: 'Trier par ordre décroissant',
            triggerAsc: 'Trier par ordre croissant',
            cancelSort: 'Annuler le tri'
        },
        Tour: {
            Next: 'Étape suivante',
            Previous: 'Étape précédente',
            Finish: 'Fin de la visite guidée'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Annuler',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Annuler'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Rechercher',
            itemUnit: 'élément',
            itemsUnit: 'éléments',
            remove: 'Désélectionner',
            selectCurrent: 'Sélectionner la page actuelle',
            removeCurrent: 'Désélectionner la page actuelle',
            selectAll: 'Sélectionner toutes les données',
            removeAll: 'Désélectionner toutes les données',
            selectInvert: 'Inverser la sélection de la page actuelle'
        },
        Upload: {
            uploading: 'Téléchargement...',
            removeFile: 'Effacer le fichier',
            uploadError: 'Erreur de téléchargement',
            previewFile: 'Fichier de prévisualisation',
            downloadFile: 'Télécharger un fichier'
        },
        Empty: {
            description: 'Aucune donnée'
        },
        Icon: {
            icon: 'icône'
        },
        Text: {
            edit: 'Éditer',
            copy: 'Copier',
            copied: 'Copie effectuée',
            expand: 'Développer'
        },
        Form: {
            optional: '(optionnel)',
            defaultValidateMessages: {
                default: 'Erreur de validation pour le champ ${label}',
                required: 'Le champ ${label} est obligatoire',
                enum: 'La valeur du champ ${label} doit être parmi [${enum}]',
                whitespace: 'La valeur du champ ${label} ne peut pas être vide',
                date: {
                    format: "La valeur du champ ${label} n'est pas au format date",
                    parse: 'La valeur du champ ${label} ne peut pas être convertie vers une date',
                    invalid: "La valeur du champ ${label} n'est pas une date valide"
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: 'La taille du champ ${label} doit être de ${len} caractères',
                    min: 'La taille du champ ${label} doit être au minimum de ${min} caractères',
                    max: 'La taille du champ ${label} doit être au maximum de ${max} caractères',
                    range: 'La taille du champ ${label} doit être entre ${min} et ${max} caractères'
                },
                number: {
                    len: 'La valeur du champ ${label} doit être égale à ${len}',
                    min: 'La valeur du champ ${label} doit être plus grande que ${min}',
                    max: 'La valeur du champ ${label} doit être plus petit que ${max}',
                    range: 'La valeur du champ ${label} doit être entre ${min} et ${max}'
                },
                array: {
                    len: 'La taille du tableau ${label} doit être de ${len}',
                    min: 'La taille du tableau ${label} doit être au minimum de ${min}',
                    max: 'La taille du tableau ${label} doit être au maximum de ${max}',
                    range: 'La taille du tableau ${label} doit être entre ${min}-${max}'
                },
                pattern: {
                    mismatch: 'La valeur du champ ${label} ne correspond pas au modèle ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Aperçu'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    5030: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ page',
        jump_to: 'Aller à',
        jump_to_confirm: 'confirmer',
        page: 'Page',
        // Pagination
        prev_page: 'Page précédente',
        next_page: 'Page suivante',
        prev_5: '5 Pages précédentes',
        next_5: '5 Pages suivantes',
        prev_3: '3 Pages précédentes',
        next_3: '3 Pages suivantes',
        page_size: 'taille de la page'
    };
    var _default = exports.default = locale;
    }}),
    9612: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'fr_CA',
        today: "Aujourd'hui",
        now: 'Maintenant',
        backToToday: "Aujourd'hui",
        ok: 'OK',
        clear: 'Rétablir',
        week: 'Semaine',
        month: 'Mois',
        year: 'Année',
        timeSelect: "Sélectionner l'heure",
        dateSelect: 'Sélectionner la date',
        monthSelect: 'Choisissez un mois',
        yearSelect: 'Choisissez une année',
        decadeSelect: 'Choisissez une décennie',
        dateFormat: 'DD/MM/YYYY',
        dayFormat: 'DD',
        dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
        previousMonth: 'Mois précédent (PageUp)',
        nextMonth: 'Mois suivant (PageDown)',
        previousYear: 'Année précédente (Ctrl + gauche)',
        nextYear: 'Année prochaine (Ctrl + droite)',
        previousDecade: 'Décennie précédente',
        nextDecade: 'Décennie suivante',
        previousCentury: 'Siècle précédent',
        nextCentury: 'Siècle suivant'
    });
    var _default = exports.default = locale;
    }}),
    2440: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/fr_CA.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 2440);
    var __TURBOPACK__imported__module__5030__ = __turbopack_context__.i(5030);
    // MERGED MODULE: [project]/components/calendar/locale/fr_CA.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/fr_CA.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__9612__ = __turbopack_context__.i(9612);
    // MERGED MODULE: [project]/components/time-picker/locale/fr_CA.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: "Sélectionner l'heure",
        rangePlaceholder: [
            'Heure de début',
            'Heure de fin'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Sélectionner une date',
            yearPlaceholder: 'Sélectionner une année',
            quarterPlaceholder: 'Sélectionner un trimestre',
            monthPlaceholder: 'Sélectionner un mois',
            weekPlaceholder: 'Sélectionner une semaine',
            rangePlaceholder: [
                'Date de début',
                'Date de fin'
            ],
            rangeYearPlaceholder: [
                'Année de début',
                'Année de fin'
            ],
            rangeMonthPlaceholder: [
                'Mois de début',
                'Mois de fin'
            ],
            rangeWeekPlaceholder: [
                'Semaine de début',
                'Semaine de fin'
            ],
            ...__TURBOPACK__imported__module__9612__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = "La valeur du champ ${label} n'est pas valide pour le type ${type}";
    const localeValues = {
        locale: 'fr',
        Pagination: __TURBOPACK__imported__module__5030__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'Fermer'
        },
        Table: {
            filterTitle: 'Filtrer',
            filterConfirm: 'OK',
            filterReset: 'Réinitialiser',
            filterEmptyText: 'Aucun filtre',
            filterCheckAll: 'Tout sélectionner',
            filterSearchPlaceholder: 'Chercher dans les filtres',
            emptyText: 'Aucune donnée',
            selectAll: 'Sélectionner la page actuelle',
            selectInvert: 'Inverser la sélection de la page actuelle',
            selectNone: 'Désélectionner toutes les données',
            selectionAll: 'Sélectionner toutes les données',
            sortTitle: 'Trier',
            expand: 'Développer la ligne',
            collapse: 'Réduire la ligne',
            triggerDesc: 'Trier par ordre décroissant',
            triggerAsc: 'Trier par ordre croissant',
            cancelSort: 'Annuler le tri'
        },
        Tour: {
            Next: 'Suivant',
            Previous: 'Précédent',
            Finish: 'Terminer'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Annuler',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Annuler'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Rechercher',
            itemUnit: 'élément',
            itemsUnit: 'éléments',
            remove: 'Désélectionner',
            selectCurrent: 'Sélectionner la page actuelle',
            removeCurrent: 'Désélectionner la page actuelle',
            selectAll: 'Sélectionner toutes les données',
            removeAll: 'Désélectionner toutes les données',
            selectInvert: 'Inverser la sélection de la page actuelle'
        },
        Upload: {
            uploading: 'Téléchargement...',
            removeFile: 'Effacer le fichier',
            uploadError: 'Erreur de téléchargement',
            previewFile: 'Fichier de prévisualisation',
            downloadFile: 'Télécharger un fichier'
        },
        Empty: {
            description: 'Aucune donnée'
        },
        Icon: {
            icon: 'icône'
        },
        Text: {
            edit: 'Éditer',
            copy: 'Copier',
            copied: 'Copie effectuée',
            expand: 'Développer'
        },
        Form: {
            optional: '(optionnel)',
            defaultValidateMessages: {
                default: 'Erreur de validation pour le champ ${label}',
                required: 'Le champ ${label} est obligatoire',
                enum: 'La valeur du champ ${label} doit être parmi [${enum}]',
                whitespace: 'La valeur du champ ${label} ne peut pas être vide',
                date: {
                    format: "La valeur du champ ${label} n'est pas au format date",
                    parse: 'La valeur du champ ${label} ne peut pas être convertie vers une date',
                    invalid: "La valeur du champ ${label} n'est pas une date valide"
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: 'La taille du champ ${label} doit être de ${len} caractères',
                    min: 'La taille du champ ${label} doit être au minimum de ${min} caractères',
                    max: 'La taille du champ ${label} doit être au maximum de ${max} caractères',
                    range: 'La taille du champ ${label} doit être entre ${min} et ${max} caractères'
                },
                number: {
                    len: 'La valeur du champ ${label} doit être égale à ${len}',
                    min: 'La valeur du champ ${label} doit être plus grande que ${min}',
                    max: 'La valeur du champ ${label} doit être plus petit que ${max}',
                    range: 'La valeur du champ ${label} doit être entre ${min} et ${max}'
                },
                array: {
                    len: 'La taille du tableau ${label} doit être de ${len}',
                    min: 'La taille du tableau ${label} doit être au minimum de ${min}',
                    max: 'La taille du tableau ${label} doit être au maximum de ${max}',
                    range: 'La taille du tableau ${label} doit être entre ${min}-${max}'
                },
                pattern: {
                    mismatch: 'La valeur du champ ${label} ne correspond pas au modèle ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Aperçu'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    4955: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ page',
        jump_to: 'Aller à',
        jump_to_confirm: 'confirmer',
        page: 'Page',
        // Pagination
        prev_page: 'Page précédente',
        next_page: 'Page suivante',
        prev_5: '5 Pages précédentes',
        next_5: '5 Pages suivantes',
        prev_3: '3 Pages précédentes',
        next_3: '3 Pages suivantes',
        page_size: 'taille de la page'
    };
    var _default = exports.default = locale;
    }}),
    3444: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'fr_FR',
        today: "Aujourd'hui",
        now: 'Maintenant',
        backToToday: "Aujourd'hui",
        ok: 'OK',
        clear: 'Rétablir',
        week: 'Semaine',
        month: 'Mois',
        year: 'Année',
        timeSelect: "Sélectionner l'heure",
        dateSelect: 'Sélectionner la date',
        monthSelect: 'Choisissez un mois',
        yearSelect: 'Choisissez une année',
        decadeSelect: 'Choisissez une décennie',
        dateFormat: 'DD/MM/YYYY',
        dayFormat: 'DD',
        dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
        previousMonth: 'Mois précédent (PageUp)',
        nextMonth: 'Mois suivant (PageDown)',
        previousYear: 'Année précédente (Ctrl + gauche)',
        nextYear: 'Année prochaine (Ctrl + droite)',
        previousDecade: 'Décennie précédente',
        nextDecade: 'Décennie suivante',
        previousCentury: 'Siècle précédent',
        nextCentury: 'Siècle suivant'
    });
    var _default = exports.default = locale;
    }}),
    9599: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/fr_FR.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 9599);
    var __TURBOPACK__imported__module__4955__ = __turbopack_context__.i(4955);
    // MERGED MODULE: [project]/components/calendar/locale/fr_FR.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/fr_FR.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__3444__ = __turbopack_context__.i(3444);
    // MERGED MODULE: [project]/components/time-picker/locale/fr_FR.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: "Sélectionner l'heure",
        rangePlaceholder: [
            'Heure de début',
            'Heure de fin'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Sélectionner une date',
            yearPlaceholder: 'Sélectionner une année',
            quarterPlaceholder: 'Sélectionner un trimestre',
            monthPlaceholder: 'Sélectionner un mois',
            weekPlaceholder: 'Sélectionner une semaine',
            rangePlaceholder: [
                'Date de début',
                'Date de fin'
            ],
            rangeYearPlaceholder: [
                'Année de début',
                'Année de fin'
            ],
            rangeMonthPlaceholder: [
                'Mois de début',
                'Mois de fin'
            ],
            rangeWeekPlaceholder: [
                'Semaine de début',
                'Semaine de fin'
            ],
            ...__TURBOPACK__imported__module__3444__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = "La valeur du champ ${label} n'est pas valide pour le type ${type}";
    const localeValues = {
        locale: 'fr',
        Pagination: __TURBOPACK__imported__module__4955__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'Fermer'
        },
        Table: {
            filterTitle: 'Filtrer',
            filterConfirm: 'OK',
            filterReset: 'Réinitialiser',
            filterEmptyText: 'Aucun filtre',
            filterCheckAll: 'Tout sélectionner',
            filterSearchPlaceholder: 'Chercher dans les filtres',
            emptyText: 'Aucune donnée',
            selectAll: 'Sélectionner la page actuelle',
            selectInvert: 'Inverser la sélection de la page actuelle',
            selectNone: 'Désélectionner toutes les données',
            selectionAll: 'Sélectionner toutes les données',
            sortTitle: 'Trier',
            expand: 'Développer la ligne',
            collapse: 'Réduire la ligne',
            triggerDesc: 'Trier par ordre décroissant',
            triggerAsc: 'Trier par ordre croissant',
            cancelSort: 'Annuler le tri'
        },
        Tour: {
            Next: 'Étape suivante',
            Previous: 'Étape précédente',
            Finish: 'Fin de la visite guidée'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Annuler',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Annuler'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Rechercher',
            itemUnit: 'élément',
            itemsUnit: 'éléments',
            remove: 'Désélectionner',
            selectCurrent: 'Sélectionner la page actuelle',
            removeCurrent: 'Désélectionner la page actuelle',
            selectAll: 'Sélectionner toutes les données',
            removeAll: 'Désélectionner toutes les données',
            selectInvert: 'Inverser la sélection de la page actuelle'
        },
        Upload: {
            uploading: 'Téléchargement...',
            removeFile: 'Effacer le fichier',
            uploadError: 'Erreur de téléchargement',
            previewFile: 'Fichier de prévisualisation',
            downloadFile: 'Télécharger un fichier'
        },
        Empty: {
            description: 'Aucune donnée'
        },
        Icon: {
            icon: 'icône'
        },
        Text: {
            edit: 'Éditer',
            copy: 'Copier',
            copied: 'Copie effectuée',
            expand: 'Développer'
        },
        Form: {
            optional: '(optionnel)',
            defaultValidateMessages: {
                default: 'Erreur de validation pour le champ ${label}',
                required: 'Le champ ${label} est obligatoire',
                enum: 'La valeur du champ ${label} doit être parmi [${enum}]',
                whitespace: 'La valeur du champ ${label} ne peut pas être vide',
                date: {
                    format: "La valeur du champ ${label} n'est pas au format date",
                    parse: 'La valeur du champ ${label} ne peut pas être convertie vers une date',
                    invalid: "La valeur du champ ${label} n'est pas une date valide"
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: 'La taille du champ ${label} doit être de ${len} caractères',
                    min: 'La taille du champ ${label} doit être au minimum de ${min} caractères',
                    max: 'La taille du champ ${label} doit être au maximum de ${max} caractères',
                    range: 'La taille du champ ${label} doit être entre ${min} et ${max} caractères'
                },
                number: {
                    len: 'La valeur du champ ${label} doit être égale à ${len}',
                    min: 'La valeur du champ ${label} doit être plus grande que ${min}',
                    max: 'La valeur du champ ${label} doit être plus petit que ${max}',
                    range: 'La valeur du champ ${label} doit être entre ${min} et ${max}'
                },
                array: {
                    len: 'La taille du tableau ${label} doit être de ${len}',
                    min: 'La taille du tableau ${label} doit être au minimum de ${min}',
                    max: 'La taille du tableau ${label} doit être au maximum de ${max}',
                    range: 'La taille du tableau ${label} doit être entre ${min}-${max}'
                },
                pattern: {
                    mismatch: 'La valeur du champ ${label} ne correspond pas au modèle ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Aperçu'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    8758: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ leathanach',
        jump_to: 'Téigh',
        jump_to_confirm: 'dheimhnigh',
        page: '',
        // Pagination
        prev_page: 'Leathanach Roimhe Seo',
        next_page: 'An chéad leathanach eile',
        prev_5: '5 leathanach roimhe seo',
        next_5: 'Ar Aghaidh 5 Leathanaigh',
        prev_3: '3 leathanach roimhe seo',
        next_3: 'Ar Aghaidh 3 Leathanaigh',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    2068: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ga_IE',
        today: 'inniu',
        now: 'anois',
        backToToday: 'Ar ais inniu',
        ok: 'ceart go leor',
        clear: 'soiléir',
        week: 'seachtain',
        month: 'mhí',
        year: 'bhliain',
        timeSelect: 'roghnaigh am',
        dateSelect: 'roghnaigh dáta',
        weekSelect: 'Roghnaigh seachtain',
        monthSelect: 'Roghnaigh mí',
        yearSelect: 'Roghnaigh bliain',
        decadeSelect: 'Roghnaigh deich mbliana',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'An mhí roimhe seo (PageUp)',
        nextMonth: 'An mhí seo chugainn (PageDown)',
        previousYear: 'Anuraidh (Control + left)',
        nextYear: 'An bhliain seo chugainn (Control + right)',
        previousDecade: 'Le deich mbliana anuas',
        nextDecade: 'Deich mbliana amach romhainn',
        previousCentury: 'An chéid seo caite',
        nextCentury: 'An chéad aois eile'
    });
    var _default = exports.default = locale;
    }}),
    5347: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ga_IE.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 5347);
    var __TURBOPACK__imported__module__8758__ = __turbopack_context__.i(8758);
    // MERGED MODULE: [project]/components/calendar/locale/ga_IE.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ga_IE.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__2068__ = __turbopack_context__.i(2068);
    // MERGED MODULE: [project]/components/time-picker/locale/ga_IE.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Roghnaigh am',
        rangePlaceholder: [
            'Am tosaigh',
            'Am deiridh'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Roghnaigh dáta',
            yearPlaceholder: 'Roghnaigh bliain',
            quarterPlaceholder: 'Roghnaigh ráithe',
            monthPlaceholder: 'Roghnaigh mí',
            weekPlaceholder: 'Roghnaigh seachtain',
            rangePlaceholder: [
                'Dáta tosaigh',
                'Dáta deiridh'
            ],
            rangeYearPlaceholder: [
                'Tús na bliana',
                'Deireadh na bliana'
            ],
            rangeMonthPlaceholder: [
                'Tosaigh mhí',
                'Deireadh mhí'
            ],
            rangeWeekPlaceholder: [
                'Tosaigh an tseachtain',
                'Deireadh na seachtaine'
            ],
            ...__TURBOPACK__imported__module__2068__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} is not a valid ${type}';
    const localeValues = {
        locale: 'ga',
        Pagination: __TURBOPACK__imported__module__8758__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Please select',
            close: 'Dún'
        },
        Table: {
            filterTitle: 'Filter menu',
            filterConfirm: 'OK',
            filterReset: 'Reset',
            selectAll: 'Select current page',
            selectInvert: 'Invert current page',
            selectionAll: 'Select all data',
            sortTitle: 'Sort',
            expand: 'Expand row',
            collapse: 'Collapse row',
            triggerDesc: 'Click to sort descending',
            triggerAsc: 'Click to sort ascending',
            cancelSort: 'Click to cancel sorting'
        },
        Tour: {
            Next: 'Aghaidh',
            Previous: 'Roimh',
            Finish: 'Dhéanamh'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Cancel',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Cancel'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Search here',
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Remove',
            selectCurrent: 'Select current page',
            removeCurrent: 'Remove current page',
            selectAll: 'Select all data',
            removeAll: 'Remove all data',
            selectInvert: 'Invert current page'
        },
        Upload: {
            uploading: 'Uploading...',
            removeFile: 'Remove file',
            uploadError: 'Upload error',
            previewFile: 'Preview file',
            downloadFile: 'Download file'
        },
        Empty: {
            description: 'No Data'
        },
        Icon: {
            icon: 'icon'
        },
        Text: {
            edit: 'Edit',
            copy: 'Copy',
            copied: 'Copied',
            expand: 'Expand'
        },
        Form: {
            defaultValidateMessages: {
                default: 'Field validation error for ${label}',
                required: 'Please enter ${label}',
                enum: '${label} must be one of [${enum}]',
                whitespace: '${label} cannot be a blank character',
                date: {
                    format: '${label} date format is invalid',
                    parse: '${label} cannot be converted to a date',
                    invalid: '${label} is an invalid date'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} must be ${len} characters',
                    min: '${label} must be at least ${min} characters',
                    max: '${label} must be up to ${max} characters',
                    range: '${label} must be between ${min}-${max} characters'
                },
                number: {
                    len: '${label} must be equal to ${len}',
                    min: '${label} must be minimum ${min}',
                    max: '${label} must be maximum ${max}',
                    range: '${label} must be between ${min}-${max}'
                },
                array: {
                    len: 'Must be ${len} ${label}',
                    min: 'At least ${min} ${label}',
                    max: 'At most ${max} ${label}',
                    range: 'The amount of ${label} must be between ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} does not match the pattern ${pattern}'
                }
            }
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6764: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ páxina',
        jump_to: 'Ir a',
        jump_to_confirm: 'confirmar',
        page: '',
        // Pagination
        prev_page: 'Páxina anterior',
        next_page: 'Páxina seguinte',
        prev_5: '5 páxinas previas',
        next_5: '5 páxinas seguintes',
        prev_3: '3 páxinas previas',
        next_3: '3 páxinas seguintes',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    9453: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'gl_ES',
        today: 'Hoxe',
        now: 'Agora',
        backToToday: 'Voltar a hoxe',
        ok: 'Aceptar',
        clear: 'Limpar',
        week: 'Semana',
        month: 'Mes',
        year: 'Ano',
        timeSelect: 'Seleccionar hora',
        dateSelect: 'Seleccionar data',
        monthSelect: 'Elexir un mes',
        yearSelect: 'Elexir un año',
        decadeSelect: 'Elexir unha década',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Mes anterior (PageUp)',
        nextMonth: 'Mes seguinte (PageDown)',
        previousYear: 'Ano anterior (Control + left)',
        nextYear: 'Ano seguinte (Control + right)',
        previousDecade: 'Década anterior',
        nextDecade: 'Década seguinte',
        previousCentury: 'Século anterior',
        nextCentury: 'Século seguinte'
    });
    var _default = exports.default = locale;
    }}),
    4361: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/gl_ES.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4361);
    var __TURBOPACK__imported__module__6764__ = __turbopack_context__.i(6764);
    // MERGED MODULE: [project]/components/calendar/locale/gl_ES.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/gl_ES.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__9453__ = __turbopack_context__.i(9453);
    // MERGED MODULE: [project]/components/time-picker/locale/gl_ES.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Escolla hora'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Escolla data',
            rangePlaceholder: [
                'Data inicial',
                'Data final'
            ],
            ...__TURBOPACK__imported__module__9453__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} non é un ${type} válido';
    const localeValues = {
        locale: 'gl',
        Pagination: __TURBOPACK__imported__module__6764__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Escolla',
            close: 'Cerrar'
        },
        Table: {
            filterTitle: 'Filtrar menú',
            filterConfirm: 'Aceptar',
            filterReset: 'Reiniciar',
            selectAll: 'Seleccionar todo',
            selectInvert: 'Invertir selección',
            sortTitle: 'Ordenar'
        },
        Tour: {
            Next: 'Avanzar',
            Previous: 'Anterior',
            Finish: 'Finalizar'
        },
        Modal: {
            okText: 'Aceptar',
            cancelText: 'Cancelar',
            justOkText: 'Aceptar'
        },
        Popconfirm: {
            okText: 'Aceptar',
            cancelText: 'Cancelar'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Buscar aquí',
            itemUnit: 'elemento',
            itemsUnit: 'elementos'
        },
        Upload: {
            uploading: 'Subindo...',
            removeFile: 'Eliminar arquivo',
            uploadError: 'Error ao subir o arquivo',
            previewFile: 'Vista previa',
            downloadFile: 'Descargar arquivo'
        },
        Empty: {
            description: 'Non hai datos'
        },
        Icon: {
            icon: 'icona'
        },
        Text: {
            edit: 'editar',
            copy: 'copiar',
            copied: 'copiado',
            expand: 'expandir'
        },
        Form: {
            defaultValidateMessages: {
                default: 'Error de validación do campo ${label}',
                required: 'Por favor complete ${label}',
                enum: '${label} ten que ser un de [${enum}]',
                whitespace: '${label} non pode ter ningún caracter en branco',
                date: {
                    format: 'O formato de data ${label} non é válido',
                    parse: '${label} non se pode convertir a unha data',
                    invalid: '${label} é unha data inválida'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} debe ter ${len} caracteres',
                    min: '${label} debe ter como mínimo ${min} caracteres',
                    max: '${label} debe ter ata ${max} caracteres',
                    range: '${label} debe ter entre ${min}-${max} caracteres'
                },
                number: {
                    len: '${label} debe ser igual a ${len}',
                    min: '${label} valor mínimo é ${min}',
                    max: '${label} valor máximo é ${max}',
                    range: '${label} debe estar entre ${min}-${max}'
                },
                array: {
                    len: 'Debe ser ${len} ${label}',
                    min: 'Como mínimo ${min} ${label}',
                    max: 'Como máximo ${max} ${label}',
                    range: 'O valor de ${label} debe estar entre ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} non coincide co patrón ${pattern}'
                }
            }
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    2247: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ עמוד',
        jump_to: 'עבור אל',
        jump_to_confirm: 'אישור',
        page: '',
        // Pagination
        prev_page: 'העמוד הקודם',
        next_page: 'העמוד הבא',
        prev_5: '5 עמודים קודמים',
        next_5: '5 עמודים הבאים',
        prev_3: '3 עמודים קודמים',
        next_3: '3 עמודים הבאים',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    8583: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'he_IL',
        today: 'היום',
        now: 'עכשיו',
        backToToday: 'חזור להיום',
        ok: 'אישור',
        clear: 'איפוס',
        week: 'שבוע',
        month: 'חודש',
        year: 'שנה',
        timeSelect: 'בחר שעה',
        dateSelect: 'בחר תאריך',
        weekSelect: 'בחר שבוע',
        monthSelect: 'בחר חודש',
        yearSelect: 'בחר שנה',
        decadeSelect: 'בחר עשור',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'חודש קודם (PageUp)',
        nextMonth: 'חודש הבא (PageDown)',
        previousYear: 'שנה שעברה (Control + left)',
        nextYear: 'שנה הבאה (Control + right)',
        previousDecade: 'העשור הקודם',
        nextDecade: 'העשור הבא',
        previousCentury: 'המאה הקודמת',
        nextCentury: 'המאה הבאה'
    });
    var _default = exports.default = locale;
    }}),
    1382: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/he_IL.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 1382);
    var __TURBOPACK__imported__module__2247__ = __turbopack_context__.i(2247);
    // MERGED MODULE: [project]/components/calendar/locale/he_IL.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/he_IL.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__8583__ = __turbopack_context__.i(8583);
    // MERGED MODULE: [project]/components/time-picker/locale/he_IL.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'בחר שעה'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'בחר תאריך',
            rangePlaceholder: [
                'תאריך התחלה',
                'תאריך סיום'
            ],
            ...__TURBOPACK__imported__module__8583__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} הוא לא ${type} תקין';
    const localeValues = {
        locale: 'he',
        Pagination: __TURBOPACK__imported__module__2247__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'אנא בחר',
            close: 'סגור'
        },
        Table: {
            filterTitle: 'תפריט סינון',
            filterConfirm: 'אישור',
            filterReset: 'איפוס',
            selectAll: 'בחר הכל',
            selectInvert: 'הפוך בחירה',
            selectionAll: 'בחר את כל הנתונים',
            sortTitle: 'מיון',
            expand: 'הרחב שורה',
            collapse: 'צמצם שורה',
            triggerDesc: 'לחץ למיון לפי סדר יורד',
            triggerAsc: 'לחץ למיון לפי סדר עולה',
            cancelSort: 'לחץ כדי לבטל את המיון'
        },
        Tour: {
            Next: 'הבא',
            Previous: 'הקודם',
            Finish: 'סיום'
        },
        Modal: {
            okText: 'אישור',
            cancelText: 'ביטול',
            justOkText: 'אישור'
        },
        Popconfirm: {
            okText: 'אישור',
            cancelText: 'ביטול'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'חפש כאן',
            itemUnit: 'פריט',
            itemsUnit: 'פריטים'
        },
        Upload: {
            uploading: 'מעלה...',
            removeFile: 'הסר קובץ',
            uploadError: 'שגיאת העלאה',
            previewFile: 'הצג קובץ',
            downloadFile: 'הורד קובץ'
        },
        Empty: {
            description: 'אין מידע'
        },
        Icon: {
            icon: 'סמל'
        },
        Text: {
            edit: 'ערוך',
            copy: 'העתק',
            copied: 'הועתק',
            expand: 'הרחב'
        },
        Form: {
            defaultValidateMessages: {
                default: 'ערך השדה שגוי ${label}',
                required: 'בבקשה הזן ${label}',
                enum: '${label} חייב להיות אחד מערכים אלו [${enum}]',
                whitespace: '${label} לא יכול להיות ריק',
                date: {
                    format: '${label} תאריך לא תקין',
                    parse: '${label} לא ניתן להמיר לתאריך',
                    invalid: '${label} הוא לא תאריך תקין'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} חייב להיות ${len} תווים',
                    min: '${label} חייב להיות ${min} תווים',
                    max: '${label} מקסימום ${max} תווים',
                    range: '${label} חייב להיות בין ${min}-${max} תווים'
                },
                number: {
                    len: '${label} חייב להיות שווה ל ${len}',
                    min: '${label} ערך מינימלי הוא ${min}',
                    max: '${label} ערך מקסימלי הוא ${max}',
                    range: '${label} חייב להיות בין ${min}-${max}'
                },
                array: {
                    len: 'חייב להיות ${len} ${label}',
                    min: 'מינימום ${min} ${label}',
                    max: 'מקסימום ${max} ${label}',
                    range: 'הסכום של ${label} חייב להיות בין ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} לא תואם לתבנית ${pattern}'
                }
            }
        },
        Image: {
            preview: 'תצוגה מקדימה'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    5081: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ पृष्ठ',
        jump_to: 'इस पर चलें',
        jump_to_confirm: 'पुष्टि करें',
        page: '',
        // Pagination
        prev_page: 'पिछला पृष्ठ',
        next_page: 'अगला पृष्ठ',
        prev_5: 'पिछले 5 पृष्ठ',
        next_5: 'अगले 5 पृष्ठ',
        prev_3: 'पिछले 3 पृष्ठ',
        next_3: 'अगले 3 पेज',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    8676: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'hi_IN',
        today: 'आज',
        now: 'अभी',
        backToToday: 'आज तक',
        ok: 'ठीक',
        clear: 'स्पष्ट',
        week: 'सप्ताह',
        month: 'महीना',
        year: 'साल',
        timeSelect: 'समय का चयन करें',
        dateSelect: 'तारीख़ चुनें',
        weekSelect: 'एक सप्ताह चुनें',
        monthSelect: 'एक महीना चुनें',
        yearSelect: 'एक वर्ष चुनें',
        decadeSelect: 'एक दशक चुनें',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'पिछला महीना (पेजअप)',
        nextMonth: 'अगले महीने (पेजडाउन)',
        previousYear: 'पिछले साल (Ctrl + बाएं)',
        nextYear: 'अगले साल (Ctrl + दाहिना)',
        previousDecade: 'पिछला दशक',
        nextDecade: 'अगले दशक',
        previousCentury: 'पीछ्ली शताब्दी',
        nextCentury: 'अगली सदी'
    });
    var _default = exports.default = locale;
    }}),
    8529: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/hi_IN.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 8529);
    var __TURBOPACK__imported__module__5081__ = __turbopack_context__.i(5081);
    // MERGED MODULE: [project]/components/calendar/locale/hi_IN.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/hi_IN.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__8676__ = __turbopack_context__.i(8676);
    // MERGED MODULE: [project]/components/time-picker/locale/hi_IN.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'समय का चयन करें',
        rangePlaceholder: [
            'आरंभिक समय',
            'अंत समय'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'तारीख़ चुनें',
            yearPlaceholder: 'वर्ष चुनें',
            quarterPlaceholder: 'तिमाही चुनें',
            monthPlaceholder: 'महीना चुनिए',
            weekPlaceholder: 'सप्ताह चुनें',
            rangePlaceholder: [
                'प्रारंभ तिथि',
                'समाप्ति तिथि'
            ],
            rangeYearPlaceholder: [
                'आरंभिक वर्ष',
                'अंत वर्ष'
            ],
            rangeMonthPlaceholder: [
                'आरंभिक महीना',
                'अंत महीना'
            ],
            rangeWeekPlaceholder: [
                'आरंभिक सप्ताह',
                'अंत सप्ताह'
            ],
            ...__TURBOPACK__imported__module__8676__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} मान्य ${type} नहीं है';
    const localeValues = {
        locale: 'hi',
        Pagination: __TURBOPACK__imported__module__5081__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'कृपया चुनें',
            close: 'बंद'
        },
        Table: {
            filterTitle: 'सूची बंद करें',
            filterConfirm: 'अच्छी तरह से',
            filterReset: 'रीसेट',
            filterEmptyText: 'कोई फ़िल्टर नहीं',
            emptyText: 'कोई जानकारी नहीं',
            selectAll: 'वर्तमान पृष्ठ का चयन करें',
            selectInvert: 'वर्तमान पृष्ठ घुमाएं',
            selectNone: 'सभी डेटा साफ़ करें',
            selectionAll: 'सभी डेटा का चयन करें',
            sortTitle: 'द्वारा क्रमबद्ध करें',
            expand: 'पंक्ति का विस्तार करें',
            collapse: 'पंक्ति संक्षिप्त करें',
            triggerDesc: 'अवरोही क्रमित करने के लिए क्लिक करें',
            triggerAsc: 'आरोही क्रमित करने के लिए क्लिक करें',
            cancelSort: 'छँटाई रद्द करने के लिए क्लिक करें'
        },
        Tour: {
            Next: 'अगाड़ा',
            Previous: 'पिछला',
            Finish: 'समाप्त करें'
        },
        Modal: {
            okText: 'अच्छी तरह से',
            cancelText: 'रद्द करना',
            justOkText: 'अच्छी तरह से'
        },
        Popconfirm: {
            okText: 'अच्छी तरह से',
            cancelText: 'रद्द करना'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'यहां खोजें',
            itemUnit: 'तत्त्व',
            itemsUnit: 'विषय-वस्तु',
            remove: 'हटाए',
            selectCurrent: 'वर्तमान पृष्ठ का चयन करें',
            removeCurrent: 'वर्तमान पृष्ठ हटाएं',
            selectAll: 'सभी डेटा का चयन करें',
            removeAll: 'सभी डेटा हटाएं',
            selectInvert: 'वर्तमान पृष्ठ को उल्टा करें'
        },
        Upload: {
            uploading: 'अपलोड हो रहा...',
            removeFile: 'फ़ाइल निकालें',
            uploadError: 'अपलोड में त्रुटि',
            previewFile: 'फ़ाइल पूर्वावलोकन',
            downloadFile: 'फ़ाइल डाउनलोड करें'
        },
        Empty: {
            description: 'कोई आकड़ा उपलब्ध नहीं है'
        },
        Icon: {
            icon: 'आइकन'
        },
        Text: {
            edit: 'संपादित करें',
            copy: 'प्रतिलिपि',
            copied: 'कॉपी किया गया',
            expand: 'विस्तार'
        },
        Form: {
            optional: '(ऐच्छिक)',
            defaultValidateMessages: {
                default: '${label} के लिए फील्ड सत्यापन त्रुटि',
                required: 'कृपया ${label} दर्ज करें',
                enum: '${label} [${enum}] में से एक होना चाहिए',
                whitespace: '${label} एक खाली अक्षर नहीं हो सकता',
                date: {
                    format: '${label} तिथि प्रारूप अमान्य है',
                    parse: '${label} को तारीख में नहीं बदला जा सकता',
                    invalid: '${label} एक अमान्य तिथि है'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ${len} अक्षर का होना चाहिए',
                    min: '${label} कम से कम ${min} वर्णों का होना चाहिए',
                    max: '${label} अधिकतम ${max} वर्णों का होना चाहिए',
                    range: '${label} ${min}-${max} वर्णों के बीच होना चाहिए'
                },
                number: {
                    len: '${label} ${len} के बराबर होना चाहिए',
                    min: '${label} कम से कम ${min} होना चाहिए',
                    max: '${label} अधिकतम ${max} होना चाहिए',
                    range: '${label} ${min}-${max} के बीच होना चाहिए'
                },
                array: {
                    len: '${len} ${label} होना चाहिए',
                    min: 'कम से कम ${min} ${label}',
                    max: 'ज्यादा से ज्यादा ${max} ${label}',
                    range: '${label} की राशि ${min}-${max} के बीच होनी चाहिए'
                },
                pattern: {
                    mismatch: '${label} ${pattern} पैटर्न से मेल नहीं खाता'
                }
            }
        },
        Image: {
            preview: 'पूर्वावलोकन'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    3267: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ str',
        jump_to: 'Idi na',
        jump_to_confirm: 'potvrdi',
        page: '',
        // Pagination
        prev_page: 'Prijašnja stranica',
        next_page: 'Sljedeća stranica',
        prev_5: 'Prijašnjih 5 stranica',
        next_5: 'Sljedećih 5 stranica',
        prev_3: 'Prijašnje 3 stranice',
        next_3: 'Sljedeće 3 stranice',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    7928: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'hr_HR',
        today: 'Danas',
        now: 'Sad',
        backToToday: 'Natrag na danas',
        ok: 'OK',
        clear: 'Očisti',
        week: 'Sedmica',
        month: 'Mjesec',
        year: 'Godina',
        timeSelect: 'odaberite vrijeme',
        dateSelect: 'odaberite datum',
        weekSelect: 'Odaberite tjedan',
        monthSelect: 'Odaberite mjesec',
        yearSelect: 'Odaberite godinu',
        decadeSelect: 'Odaberite desetljeće',
        dateFormat: 'D.M.YYYY',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        previousMonth: 'Prošli mjesec (PageUp)',
        nextMonth: 'Sljedeći mjesec (PageDown)',
        previousYear: 'Prošla godina (Control + left)',
        nextYear: 'Sljedeća godina (Control + right)',
        previousDecade: 'Prošlo desetljeće',
        nextDecade: 'Sljedeće desetljeće',
        previousCentury: 'Prošlo stoljeće',
        nextCentury: 'Sljedeće stoljeće'
    });
    var _default = exports.default = locale;
    }}),
    9610: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/hr_HR.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 9610);
    var __TURBOPACK__imported__module__3267__ = __turbopack_context__.i(3267);
    // MERGED MODULE: [project]/components/calendar/locale/hr_HR.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/hr_HR.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7928__ = __turbopack_context__.i(7928);
    // MERGED MODULE: [project]/components/time-picker/locale/hr_HR.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Odaberite vrijeme',
        rangePlaceholder: [
            'Vrijeme početka',
            'Vrijeme završetka'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Odaberite datum',
            yearPlaceholder: 'Odaberite godinu',
            quarterPlaceholder: 'Odaberite četvrtinu',
            monthPlaceholder: 'Odaberite mjesec',
            weekPlaceholder: 'Odaberite tjedan',
            rangePlaceholder: [
                'Početni datum',
                'Završni datum'
            ],
            rangeYearPlaceholder: [
                'Početna godina',
                'Završna godina'
            ],
            rangeMonthPlaceholder: [
                'Početni mjesec',
                'Završni mjesec'
            ],
            rangeWeekPlaceholder: [
                'Početni tjedan',
                'Završni tjedan'
            ],
            ...__TURBOPACK__imported__module__7928__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} nije valjan ${type}';
    const localeValues = {
        locale: 'hr',
        Pagination: __TURBOPACK__imported__module__3267__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Molimo označite',
            close: 'Zatvori'
        },
        Table: {
            filterTitle: 'Filter meni',
            filterConfirm: 'OK',
            filterReset: 'Reset',
            filterEmptyText: 'Nema filtera',
            emptyText: 'Nema podataka',
            selectAll: 'Označi trenutnu stranicu',
            selectInvert: 'Invertiraj trenutnu stranicu',
            selectionAll: 'Odaberite sve podatke',
            sortTitle: 'Sortiraj',
            expand: 'Proširi redak',
            collapse: 'Sažmi redak',
            triggerDesc: 'Kliknite za sortiranje silazno',
            triggerAsc: 'Kliknite za sortiranje uzlazno',
            cancelSort: 'Kliknite da biste otkazali sortiranje'
        },
        Tour: {
            Next: 'Slijedeći',
            Previous: 'Prethodni',
            Finish: 'Završi'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Odustani',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Odustani'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Pretraži ovdje',
            itemUnit: 'stavka',
            itemsUnit: 'stavke',
            remove: 'Ukloniti',
            selectCurrent: 'Odaberite trenutnu stranicu',
            removeCurrent: 'Ukloni trenutnu stranicu',
            selectAll: 'Odaberite sve podatke',
            removeAll: 'Uklonite sve podatke',
            selectInvert: 'Obrni trenutnu stranicu'
        },
        Upload: {
            uploading: 'Upload u tijeku...',
            removeFile: 'Makni datoteku',
            uploadError: 'Greška kod uploada',
            previewFile: 'Pogledaj datoteku',
            downloadFile: 'Preuzmi datoteku'
        },
        Empty: {
            description: 'Nema podataka'
        },
        Icon: {
            icon: 'ikona'
        },
        Text: {
            edit: 'Uredi',
            copy: 'Kopiraj',
            copied: 'Kopiranje uspješno',
            expand: 'Proširi'
        },
        Form: {
            optional: '(neobavezno)',
            defaultValidateMessages: {
                default: 'Pogreška provjere valjanosti polja za ${label}',
                required: 'Molimo unesite ${label}',
                enum: '${label} mora biti jedan od [${enum}]',
                whitespace: '${label} ne može biti prazan znak',
                date: {
                    format: '${label} format datuma je nevažeći',
                    parse: '${label} ne može se pretvoriti u datum',
                    invalid: '${label} je nevažeći datum'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} mora biti ${len} slova',
                    min: '${label} mora biti najmanje ${min} slova',
                    max: '${label} mora biti do ${max} slova',
                    range: '${label} mora biti između ${min}-${max} slova'
                },
                number: {
                    len: '${label} mora biti jednak ${len}',
                    min: '${label} mora biti minimalano ${min}',
                    max: '${label} mora biti maksimalano ${max}',
                    range: '${label} mora biti između ${min}-${max}'
                },
                array: {
                    len: 'Mora biti ${len} ${label}',
                    min: 'Najmanje ${min} ${label}',
                    max: 'Najviše ${max} ${label}',
                    range: 'Količina ${label} mora biti između ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} ne odgovara obrascu ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Pregled'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6552: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ oldal',
        // '/ page',
        jump_to: 'Ugrás',
        // 'Goto',
        jump_to_confirm: 'megerősít',
        // 'confirm',
        page: '',
        // Pagination
        prev_page: 'Előző oldal',
        // 'Previous Page',
        next_page: 'Következő oldal',
        // 'Next Page',
        prev_5: 'Előző 5 oldal',
        // 'Previous 5 Pages',
        next_5: 'Következő 5 oldal',
        // 'Next 5 Pages',
        prev_3: 'Előző 3 oldal',
        // 'Previous 3 Pages',
        next_3: 'Következő 3 oldal',
        // 'Next 3 Pages',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    663: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'hu_HU',
        today: 'Ma',
        // 'Today',
        now: 'Most',
        // 'Now',
        backToToday: 'Vissza a mai napra',
        // 'Back to today',
        ok: 'OK',
        clear: 'Törlés',
        // 'Clear',
        week: 'Hét',
        month: 'Hónap',
        // 'Month',
        year: 'Év',
        // 'Year',
        timeSelect: 'Időpont kiválasztása',
        // 'Select time',
        dateSelect: 'Dátum kiválasztása',
        // 'Select date',
        monthSelect: 'Hónap kiválasztása',
        // 'Choose a month',
        yearSelect: 'Év kiválasztása',
        // 'Choose a year',
        decadeSelect: 'Évtized kiválasztása',
        // 'Choose a decade',
        dateFormat: 'YYYY/MM/DD',
        // 'M/D/YYYY',
        dayFormat: 'DD',
        // 'D',
        dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
        // 'M/D/YYYY HH:mm:ss',
        previousMonth: 'Előző hónap (PageUp)',
        // 'Previous month (PageUp)',
        nextMonth: 'Következő hónap (PageDown)',
        // 'Next month (PageDown)',
        previousYear: 'Múlt év (Control + left)',
        // 'Last year (Control + left)',
        nextYear: 'Jövő év (Control + right)',
        // 'Next year (Control + right)',
        previousDecade: 'Előző évtized',
        // 'Last decade',
        nextDecade: 'Következő évtized',
        // 'Next decade',
        previousCentury: 'Múlt évszázad',
        // 'Last century',
        nextCentury: 'Jövő évszázad' // 'Next century',
    });
    var _default = exports.default = locale;
    }}),
    1683: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/hu_HU.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 1683);
    var __TURBOPACK__imported__module__6552__ = __turbopack_context__.i(6552);
    // MERGED MODULE: [project]/components/calendar/locale/hu_HU.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/hu_HU.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__663__ = __turbopack_context__.i(663);
    // MERGED MODULE: [project]/components/time-picker/locale/hu_HU.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Válasszon időt'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Válasszon dátumot',
            rangePlaceholder: [
                'Kezdő dátum',
                'Befejezés dátuma'
            ],
            ...__TURBOPACK__imported__module__663__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const localeValues = {
        locale: 'hu',
        Pagination: __TURBOPACK__imported__module__6552__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'Bezárás'
        },
        Table: {
            filterTitle: 'Szűrők',
            filterConfirm: 'Alkalmazás',
            filterReset: 'Visszaállítás',
            selectAll: 'Jelenlegi oldal kiválasztása',
            selectInvert: 'Jelenlegi oldal inverze',
            sortTitle: 'Rendezés'
        },
        Modal: {
            okText: 'Alkalmazás',
            cancelText: 'Visszavonás',
            justOkText: 'Alkalmazás'
        },
        Popconfirm: {
            okText: 'Alkalmazás',
            cancelText: 'Visszavonás'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Keresés',
            itemUnit: 'elem',
            itemsUnit: 'elemek'
        },
        Upload: {
            uploading: 'Feltöltés...',
            removeFile: 'Fájl eltávolítása',
            uploadError: 'Feltöltési hiba',
            previewFile: 'Fájl előnézet',
            downloadFile: 'Fájl letöltése'
        },
        Empty: {
            description: 'Nincs adat'
        },
        Tour: {
            Next: 'Következő',
            Previous: 'Előző',
            Finish: 'Befejezés'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    7795: ((__turbopack_context__) => {
    "use strict";
    
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    });
    const datePickerLocale = {
        lang: {
            locale: 'hy-am',
            placeholder: 'Ընտրեք ամսաթիվը',
            rangePlaceholder: [
                'Մեկնարկի ամսաթիվ',
                'Ավարտի ամսաթիվը'
            ],
            today: 'Այսօր',
            now: 'Հիմա',
            backToToday: 'Վերադառնալ այսօր',
            ok: 'Օկ',
            clear: 'Մաքրել',
            week: 'Շաբաթ',
            month: 'Ամիս',
            year: 'Տարի',
            timeSelect: 'ընտրեք ժամը',
            dateSelect: 'ընտրեք ամսաթիվը',
            weekSelect: 'Ընտրեք շաբաթը',
            monthSelect: 'Ընտրեք ամիսը',
            yearSelect: 'Ընտրեք տարին',
            decadeSelect: 'Ընտրեք տասնամյակը',
            yearFormat: 'YYYY',
            dayFormat: 'DD',
            monthBeforeYear: true,
            previousMonth: 'Անցած ամիս (PageUp)',
            nextMonth: 'Մյուս ամիս (PageDown)',
            previousYear: 'Անցած տարի (Control + left)',
            nextYear: 'Մյուս տարի (Control + right)',
            previousDecade: 'Անցած տասնամյակ',
            nextDecade: 'Մյուս տասնամյակ',
            previousCentury: 'Անցած դար',
            nextCentury: 'Մյուս դար'
        },
        timePickerLocale: {
            placeholder: 'Ընտրեք ժամը'
        }
    };
    const localeValues = {
        locale: 'hy-am',
        Pagination: {
            // Options.jsx
            items_per_page: '/ էջ',
            jump_to: 'Գնալ',
            jump_to_confirm: 'հաստատել',
            page: '',
            // Pagination.jsx
            prev_page: 'Նախորդ Էջ',
            next_page: 'Հաջորդ Էջ',
            prev_5: 'Նախորդ 5 Էջերը',
            next_5: 'Հաջորդ 5 Էջերը',
            prev_3: 'Նախորդ 3 Էջերը',
            next_3: 'Հաջորդ 3 Էջերը'
        },
        DatePicker: datePickerLocale,
        TimePicker: {
            placeholder: 'Ընտրեք ժամը'
        },
        Calendar: datePickerLocale,
        global: {
            placeholder: 'Ընտրեք',
            close: 'Դադարեցնել'
        },
        Table: {
            filterTitle: 'ֆիլտրի ընտրացանկ',
            filterConfirm: 'ֆիլտրել',
            filterReset: 'Զրոյացնել',
            selectAll: 'Ընտրեք ընթացիկ էջը',
            selectInvert: 'Փոխարկել ընթացիկ էջը',
            sortTitle: 'Տեսակավորել',
            expand: 'Ընդլայնեք տողը',
            collapse: 'Կրճատել տողը'
        },
        Tour: {
            Next: 'Հաջորդ',
            Previous: 'Նախորդ',
            Finish: 'Ավարտել'
        },
        Modal: {
            okText: 'Օկ',
            cancelText: 'Չեղարկել',
            justOkText: 'Օկ'
        },
        Popconfirm: {
            okText: 'Հաստատել',
            cancelText: 'Մերժել'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Որոնեք այստեղ',
            itemUnit: 'պարագան',
            itemsUnit: 'պարագաները'
        },
        Upload: {
            uploading: 'Ներբեռնում...',
            removeFile: 'Հեռացնել ֆայլը',
            uploadError: 'Ներբեռնման սխալ',
            previewFile: 'Դիտել ֆայլը',
            downloadFile: 'Ներբեռնել ֆայլը'
        },
        Empty: {
            description: 'Տվյալներ չկան'
        },
        Icon: {
            icon: 'պատկեր'
        },
        Text: {
            edit: 'Խմբագրել',
            copy: 'Պատճենել',
            copied: 'Պատճենվել է',
            expand: 'Տեսնել ավելին'
        }
    };
    const __TURBOPACK__default__export__ = localeValues;
    }),
    4336: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ halaman',
        jump_to: 'Menuju',
        jump_to_confirm: 'konfirmasi',
        page: 'Halaman',
        // Pagination
        prev_page: 'Halaman Sebelumnya',
        next_page: 'Halaman Berikutnya',
        prev_5: '5 Halaman Sebelumnya',
        next_5: '5 Halaman Berikutnya',
        prev_3: '3 Halaman Sebelumnya',
        next_3: '3 Halaman Berikutnya',
        page_size: 'ukuran halaman'
    };
    var _default = exports.default = locale;
    }}),
    7163: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'id_ID',
        today: 'Hari ini',
        now: 'Sekarang',
        backToToday: 'Kembali ke hari ini',
        ok: 'Baik',
        clear: 'Bersih',
        week: 'Minggu',
        month: 'Bulan',
        year: 'Tahun',
        timeSelect: 'pilih waktu',
        dateSelect: 'pilih tanggal',
        weekSelect: 'Pilih satu minggu',
        monthSelect: 'Pilih satu bulan',
        yearSelect: 'Pilih satu tahun',
        decadeSelect: 'Pilih satu dekade',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Bulan sebelumnya (PageUp)',
        nextMonth: 'Bulan selanjutnya (PageDown)',
        previousYear: 'Tahun lalu (Control + kiri)',
        nextYear: 'Tahun selanjutnya (Kontrol + kanan)',
        previousDecade: 'Dekade terakhir',
        nextDecade: 'Dekade berikutnya',
        previousCentury: 'Abad terakhir',
        nextCentury: 'Abad berikutnya'
    });
    var _default = exports.default = locale;
    }}),
    5065: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/id_ID.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 5065);
    var __TURBOPACK__imported__module__4336__ = __turbopack_context__.i(4336);
    // MERGED MODULE: [project]/components/calendar/locale/id_ID.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/id_ID.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7163__ = __turbopack_context__.i(7163);
    // MERGED MODULE: [project]/components/time-picker/locale/id_ID.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Pilih waktu',
        rangePlaceholder: [
            'Waktu awal',
            'Waktu akhir'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Pilih tanggal',
            yearPlaceholder: 'Pilih tahun',
            quarterPlaceholder: 'Pilih kuartal',
            monthPlaceholder: 'Pilih bulan',
            weekPlaceholder: 'Pilih minggu',
            rangePlaceholder: [
                'Tanggal awal',
                'Tanggal akhir'
            ],
            rangeYearPlaceholder: [
                'Tahun awal',
                'Tahun akhir'
            ],
            rangeQuarterPlaceholder: [
                'Kuartal awal',
                'Kuartal akhir'
            ],
            rangeMonthPlaceholder: [
                'Bulan awal',
                'Bulan akhir'
            ],
            rangeWeekPlaceholder: [
                'Minggu awal',
                'Minggu akhir'
            ],
            ...__TURBOPACK__imported__module__7163__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} tidak valid ${type}';
    const localeValues = {
        locale: 'id',
        Pagination: __TURBOPACK__imported__module__4336__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Silahkan pilih',
            close: 'Tutup'
        },
        Table: {
            filterTitle: 'Menu filter',
            filterConfirm: 'OK',
            filterReset: 'Reset',
            filterEmptyText: 'Tidak ada filter',
            filterCheckAll: 'Pilih semua item',
            filterSearchPlaceholder: 'Cari di filter',
            emptyText: 'Tidak ada data',
            selectAll: 'Pilih halaman saat ini',
            selectInvert: 'Balikkan halaman saat ini',
            selectNone: 'Hapus semua data',
            selectionAll: 'Pilih semua data',
            sortTitle: 'Urutkan',
            expand: 'Perluas baris',
            collapse: 'Perkecil baris',
            triggerDesc: 'Klik untuk mengurutkan secara menurun',
            triggerAsc: 'Klik untuk mengurutkan secara menaik',
            cancelSort: 'Klik untuk membatalkan pengurutan'
        },
        Tour: {
            Next: 'Selanjutnya',
            Previous: 'Sebelumnya',
            Finish: 'Selesai'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Batal',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Batal'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Cari di sini',
            itemUnit: 'data',
            itemsUnit: 'data',
            remove: 'Hapus',
            selectCurrent: 'Pilih halaman saat ini',
            removeCurrent: 'Hapus halaman saat ini',
            selectAll: 'Pilih semua data',
            deselectAll: 'Batal pilih semua data',
            removeAll: 'Hapus semua data',
            selectInvert: 'Balikkan halaman saat ini'
        },
        Upload: {
            uploading: 'Mengunggah...',
            removeFile: 'Hapus file',
            uploadError: 'Kesalahan pengunggahan',
            previewFile: 'Pratinjau file',
            downloadFile: 'Unduh file'
        },
        Empty: {
            description: 'Tidak ada data'
        },
        Icon: {
            icon: 'ikon'
        },
        Text: {
            edit: 'Ubah',
            copy: 'Salin',
            copied: 'Disalin',
            expand: 'Perluas',
            collapse: 'Perkecil'
        },
        Form: {
            optional: '(optional)',
            defaultValidateMessages: {
                default: 'Kesalahan validasi untuk ${label}',
                required: 'Tolong masukkan ${label}',
                enum: '${label} harus menjadi salah satu dari [${enum}]',
                whitespace: '${label} tidak boleh berupa karakter kosong',
                date: {
                    format: '${label} format tanggal tidak valid',
                    parse: '${label} tidak dapat diubah menjadi tanggal',
                    invalid: '${label} adalah tanggal yang tidak valid'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} harus berupa ${len} karakter',
                    min: '${label} harus minimal ${min} karakter',
                    max: '${label} harus maksimal ${max} karakter',
                    range: '${label} harus diantara ${min}-${max} karakter'
                },
                number: {
                    len: '${label} harus sama dengan ${len}',
                    min: '${label} harus minimal ${min}',
                    max: '${label} harus maksimal ${max}',
                    range: '${label} harus di antara ${min}-${max}'
                },
                array: {
                    len: 'Harus ${len} ${label}',
                    min: 'Minimal ${min} ${label}',
                    max: 'Maksimal ${max} ${label}',
                    range: 'Jumlah ${label} harus di antara ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} tidak sesuai dengan pola ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Pratinjau'
        },
        QRCode: {
            expired: 'Kode QR sudah habis masa berlakunya',
            refresh: 'Segarkan',
            scanned: 'Dipindai'
        },
        ColorPicker: {
            presetEmpty: 'Kosong',
            transparent: 'Transparan',
            singleColor: 'Warna tunggal',
            gradientColor: 'Warna gradien'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    4423: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ síðu',
        jump_to: 'Síða',
        jump_to_confirm: 'staðfest',
        page: '',
        // Pagination
        prev_page: 'Fyrri síða',
        next_page: 'Næsta síða',
        prev_5: 'Til baka 5 síður',
        next_5: 'Áfram 5 síður',
        prev_3: 'Til baka 3 síður',
        next_3: 'Áfram 3 síður',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    3803: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'is_IS',
        today: 'Í dag',
        now: 'Núna',
        backToToday: 'Til baka til dagsins í dag',
        ok: 'Í lagi',
        clear: 'Hreinsa',
        week: 'Vika',
        month: 'Mánuður',
        year: 'Ár',
        timeSelect: 'Velja tíma',
        dateSelect: 'Velja dag',
        monthSelect: 'Velja mánuð',
        yearSelect: 'Velja ár',
        decadeSelect: 'Velja áratug',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Fyrri mánuður (PageUp)',
        nextMonth: 'Næsti mánuður (PageDown)',
        previousYear: 'Fyrra ár (Control + left)',
        nextYear: 'Næsta ár (Control + right)',
        previousDecade: 'Fyrri áratugur',
        nextDecade: 'Næsti áratugur',
        previousCentury: 'Fyrri öld',
        nextCentury: 'Næsta öld'
    });
    var _default = exports.default = locale;
    }}),
    4674: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/is_IS.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4674);
    var __TURBOPACK__imported__module__4423__ = __turbopack_context__.i(4423);
    // MERGED MODULE: [project]/components/calendar/locale/is_IS.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/is_IS.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__3803__ = __turbopack_context__.i(3803);
    // MERGED MODULE: [project]/components/time-picker/locale/is_IS.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Velja tíma'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Veldu dag',
            rangePlaceholder: [
                'Upphafsdagur',
                'Lokadagur'
            ],
            ...__TURBOPACK__imported__module__3803__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} er ekki gilt ${type}';
    const localeValues = {
        locale: 'is',
        Pagination: __TURBOPACK__imported__module__4423__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'Loka'
        },
        Table: {
            filterTitle: 'Afmarkanir',
            filterConfirm: 'Staðfesta',
            filterReset: 'Núllstilla',
            selectAll: 'Velja allt',
            selectInvert: 'Viðsnúa vali'
        },
        Tour: {
            Next: 'Áfram',
            Previous: 'Til baka',
            Finish: 'Lokið'
        },
        Modal: {
            okText: 'Áfram',
            cancelText: 'Hætta við',
            justOkText: 'Í lagi'
        },
        Popconfirm: {
            okText: 'Áfram',
            cancelText: 'Hætta við'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Leita hér',
            itemUnit: 'færsla',
            itemsUnit: 'færslur'
        },
        Upload: {
            uploading: 'Hleð upp...',
            removeFile: 'Fjarlægja skrá',
            uploadError: 'Villa við að hlaða upp',
            previewFile: 'Forskoða skrá',
            downloadFile: 'Hlaða niður skrá'
        },
        Empty: {
            description: 'Engin gögn'
        },
        Form: {
            optional: '（Valfrjálst）',
            defaultValidateMessages: {
                default: 'Villa við staðfestingu reits ${label}',
                required: 'gjörðu svo vel að koma inn ${label}',
                enum: '${label} verður að vera einn af [${enum}]',
                whitespace: '${label} getur ekki verið tómur stafur',
                date: {
                    format: '${label} dagsetningarsnið er ógilt',
                    parse: 'Ekki er hægt að breyta ${label} í dag',
                    invalid: '${label} er ógild dagsetning'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} verður að vera ${len} stafir',
                    min: '${label} er að minnsta kosti ${min} stafir að lengd',
                    max: '${label} getur verið allt að ${max} stafir',
                    range: '${label} verður að vera á milli ${min}-${max} stafir'
                },
                number: {
                    len: '${label} verður að vera jafngildi ${len}',
                    min: 'Lágmarksgildi ${label} er ${mín}',
                    max: 'Hámarksgildi ${label} er ${max}',
                    range: '${label} verður að vera á milli ${min}-${max}'
                },
                array: {
                    len: 'Verður að vera ${len}${label}',
                    min: 'Að minnsta kosti ${min}${label}',
                    max: 'Í mesta lagi ${max}${label}',
                    range: 'Magn ${label} verður að vera á milli ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} passar ekki við mynstur ${pattern}'
                }
            }
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    2675: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ pagina',
        jump_to: 'vai a',
        jump_to_confirm: 'Conferma',
        page: 'Pagina',
        // Pagination
        prev_page: 'Pagina precedente',
        next_page: 'Pagina successiva',
        prev_5: 'Precedente 5 pagine',
        next_5: 'Prossime 5 pagine',
        prev_3: 'Precedente 3 pagine',
        next_3: 'Prossime 3 pagine',
        page_size: 'dimensioni della pagina'
    };
    var _default = exports.default = locale;
    }}),
    6414: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'it_IT',
        today: 'Oggi',
        now: 'Adesso',
        backToToday: 'Torna ad oggi',
        ok: 'OK',
        clear: 'Cancella',
        week: 'Settimana',
        month: 'Mese',
        year: 'Anno',
        timeSelect: "Seleziona l'ora",
        dateSelect: 'Seleziona la data',
        monthSelect: 'Seleziona il mese',
        yearSelect: "Seleziona l'anno",
        decadeSelect: 'Seleziona il decennio',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Il mese scorso (PageUp)',
        nextMonth: 'Il prossimo mese (PageDown)',
        previousYear: "L'anno scorso (Control + sinistra)",
        nextYear: "L'anno prossimo (Control + destra)",
        previousDecade: 'Ultimo decennio',
        nextDecade: 'Prossimo decennio',
        previousCentury: 'Secolo precedente',
        nextCentury: 'Prossimo secolo'
    });
    var _default = exports.default = locale;
    }}),
    3454: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/it_IT.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 3454);
    var __TURBOPACK__imported__module__2675__ = __turbopack_context__.i(2675);
    // MERGED MODULE: [project]/components/calendar/locale/it_IT.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/it_IT.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__6414__ = __turbopack_context__.i(6414);
    // MERGED MODULE: [project]/components/time-picker/locale/it_IT.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: "Selezionare l'orario",
        rangePlaceholder: [
            'Inizio orario',
            'Fine orario'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Selezionare la data',
            rangePlaceholder: [
                "Data d'inizio",
                'Data di fine'
            ],
            ...__TURBOPACK__imported__module__6414__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = ' ${label} non è un ${type} valido';
    const localeValues = {
        locale: 'it',
        Pagination: __TURBOPACK__imported__module__2675__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Selezionare',
            close: 'Chiudi'
        },
        Table: {
            filterTitle: 'Menù Filtro',
            filterConfirm: 'OK',
            filterReset: 'Reset',
            filterEmptyText: 'Senza filtri',
            filterCheckAll: 'Seleziona tutti',
            filterSearchPlaceholder: 'Cerca nei filtri',
            emptyText: 'Senza dati',
            selectAll: 'Seleziona pagina corrente',
            selectInvert: 'Inverti selezione nella pagina corrente',
            selectNone: 'Deseleziona tutto',
            selectionAll: 'Seleziona tutto',
            sortTitle: 'Ordina',
            expand: 'Espandi riga',
            collapse: 'Comprimi riga ',
            triggerDesc: 'Clicca per ordinare in modo discendente',
            triggerAsc: 'Clicca per ordinare in modo ascendente',
            cancelSort: "Clicca per eliminare l'ordinamento"
        },
        Tour: {
            Next: 'Successivo',
            Previous: 'Precedente',
            Finish: 'Termina'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Annulla',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Annulla'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Cerca qui',
            itemUnit: 'elemento',
            itemsUnit: 'elementi',
            remove: 'Elimina',
            selectCurrent: 'Seleziona la pagina corrente',
            removeCurrent: 'Rimuovi la pagina corrente',
            selectAll: 'Seleziona tutti i dati',
            removeAll: 'Rimuovi tutti i dati',
            selectInvert: 'Inverti la pagina corrente'
        },
        Upload: {
            uploading: 'Caricamento...',
            removeFile: 'Rimuovi il file',
            uploadError: 'Errore di caricamento',
            previewFile: 'Anteprima file',
            downloadFile: 'Scarica file'
        },
        Empty: {
            description: 'Nessun dato'
        },
        Icon: {
            icon: 'icona'
        },
        Text: {
            edit: 'modifica',
            copy: 'copia',
            copied: 'copia effettuata',
            expand: 'espandi'
        },
        Form: {
            optional: '(opzionale)',
            defaultValidateMessages: {
                default: 'Errore di convalida del campo ${label}',
                required: 'Si prega di inserire ${label}',
                enum: '${label} deve essere uno di [${enum}]',
                whitespace: '${label} non può essere un carattere vuoto',
                date: {
                    format: 'Il formato della data ${label} non è valido',
                    parse: '${label} non può essere convertito in una data',
                    invalid: '${label} non è una data valida'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} deve avere ${len} caratteri',
                    min: '${label} deve contenere almeno ${min} caratteri',
                    max: '${label} deve contenere fino a ${max} caratteri',
                    range: '${label} deve contenere tra ${min}-${max} caratteri'
                },
                number: {
                    len: '${label} deve essere uguale a ${len}',
                    min: '${label} valore minimo è ${min}',
                    max: '${label} valor e massimo è ${max}',
                    range: '${label} deve essere compreso tra ${min}-${max}'
                },
                array: {
                    len: 'Deve essere ${len} ${label}',
                    min: 'Almeno ${min} ${label}',
                    max: 'Massimo ${max} ${label}',
                    range: 'Il totale di ${label} deve essere compreso tra ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} non corrisponde al modello ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Anteprima'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    1506: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '件 / ページ',
        jump_to: '移動',
        jump_to_confirm: '確認する',
        page: 'ページ',
        // Pagination
        prev_page: '前のページ',
        next_page: '次のページ',
        prev_5: '前 5ページ',
        next_5: '次 5ページ',
        prev_3: '前 3ページ',
        next_3: '次 3ページ',
        page_size: 'ページサイズ'
    };
    var _default = exports.default = locale;
    }}),
    8234: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ja_JP',
        today: '今日',
        now: '現在時刻',
        backToToday: '今日に戻る',
        ok: '確定',
        timeSelect: '時間を選択',
        dateSelect: '日時を選択',
        weekSelect: '週を選択',
        clear: 'クリア',
        week: '週',
        month: '月',
        year: '年',
        previousMonth: '前月 (ページアップキー)',
        nextMonth: '翌月 (ページダウンキー)',
        monthSelect: '月を選択',
        yearSelect: '年を選択',
        decadeSelect: '年代を選択',
        yearFormat: 'YYYY年',
        dateFormat: 'YYYY年M月D日',
        dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
        previousYear: '前年 (Controlを押しながら左キー)',
        nextYear: '翌年 (Controlを押しながら右キー)',
        previousDecade: '前の年代',
        nextDecade: '次の年代',
        previousCentury: '前の世紀',
        nextCentury: '次の世紀',
        monthBeforeYear: false
    });
    var _default = exports.default = locale;
    }}),
    4058: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ja_JP.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4058);
    var __TURBOPACK__imported__module__1506__ = __turbopack_context__.i(1506);
    // MERGED MODULE: [project]/components/calendar/locale/ja_JP.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ja_JP.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__8234__ = __turbopack_context__.i(8234);
    // MERGED MODULE: [project]/components/time-picker/locale/ja_JP.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: '時間を選択',
        rangePlaceholder: [
            '開始時間',
            '終了時間'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: '日付を選択',
            yearPlaceholder: '年を選択',
            quarterPlaceholder: '四半期を選択',
            monthPlaceholder: '月を選択',
            weekPlaceholder: '週を選択',
            rangePlaceholder: [
                '開始日付',
                '終了日付'
            ],
            rangeYearPlaceholder: [
                '開始年',
                '終了年'
            ],
            rangeMonthPlaceholder: [
                '開始月',
                '終了月'
            ],
            rangeQuarterPlaceholder: [
                '開始四半期',
                '終了四半期'
            ],
            rangeWeekPlaceholder: [
                '開始週',
                '終了週'
            ],
            shortWeekDays: [
                '日',
                '月',
                '火',
                '水',
                '木',
                '金',
                '土'
            ],
            shortMonths: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ],
            ...__TURBOPACK__imported__module__8234__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label}は有効な${type}ではありません';
    const localeValues = {
        locale: 'ja',
        Pagination: __TURBOPACK__imported__module__1506__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: '選んでください',
            close: '閉じる'
        },
        Table: {
            filterTitle: 'フィルター',
            filterConfirm: 'OK',
            filterReset: 'リセット',
            filterEmptyText: 'フィルターなし',
            filterCheckAll: 'すべてを選択',
            filterSearchPlaceholder: 'フィルターで検索',
            emptyText: 'データなし',
            selectAll: 'ページ単位で選択',
            selectInvert: 'ページ単位で反転',
            selectNone: 'クリア',
            selectionAll: 'すべてを選択',
            sortTitle: 'ソート',
            expand: '展開する',
            collapse: '折り畳む',
            triggerDesc: 'クリックで降順にソート',
            triggerAsc: 'クリックで昇順にソート',
            cancelSort: 'ソートをキャンセル'
        },
        Tour: {
            Next: '次',
            Previous: '前の',
            Finish: '仕上げる'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'キャンセル',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'キャンセル'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'ここを検索',
            itemUnit: 'アイテム',
            itemsUnit: 'アイテム',
            remove: '削除',
            selectCurrent: '現在のページを選択',
            removeCurrent: '現在のページを削除',
            selectAll: 'ページ単位で選択',
            deselectAll: 'すべてのデータの選択を解除する',
            removeAll: 'ページ単位で削除',
            selectInvert: 'ページ単位で反転'
        },
        Upload: {
            uploading: 'アップロード中...',
            removeFile: 'ファイルを削除',
            uploadError: 'アップロードエラー',
            previewFile: 'ファイルをプレビュー',
            downloadFile: 'ダウンロードファイル'
        },
        Empty: {
            description: 'データがありません'
        },
        Icon: {
            icon: 'アイコン'
        },
        Text: {
            edit: '編集',
            copy: 'コピー',
            copied: 'コピーされました',
            expand: '拡大する',
            collapse: '崩壊'
        },
        Form: {
            optional: '(オプション)',
            defaultValidateMessages: {
                default: '${label}のフィールド検証エラー',
                required: '${label}を入力してください',
                enum: '${label}は[${enum}]のいずれかである必要があります',
                whitespace: '${label}は空白文字にすることはできません',
                date: {
                    format: '${label}の日付形式は不正です',
                    parse: '${label}は日付に変換できません',
                    invalid: '${label}は不正な日付です'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label}は${len}文字である必要があります',
                    min: '${label}は${min}文字以上である必要があります',
                    max: '${label}は${max}文字以下である必要があります',
                    range: '${label}は${min}-${max}文字の範囲である必要があります'
                },
                number: {
                    len: '${label}は${len}と等しい必要があります',
                    min: '${label}の最小値は${min}です',
                    max: '${label}の最大値は${max}です',
                    range: '${label}は${min}-${max}の範囲である必要があります'
                },
                array: {
                    len: '${label}は${len}である必要があります',
                    min: '${label}の最小は${min}です',
                    max: '${label}の最大は${max}です',
                    range: '${label}の合計は${min}-${max}の範囲である必要があります'
                },
                pattern: {
                    mismatch: '${label}はパターン${pattern}と一致しません'
                }
            }
        },
        Image: {
            preview: 'プレビュー'
        },
        QRCode: {
            expired: 'QRコードの有効期限が切れました',
            refresh: 'リフレッシュ',
            scanned: 'スキャン済み'
        },
        ColorPicker: {
            presetEmpty: '空の',
            transparent: '透明',
            singleColor: '単色',
            gradientColor: 'グラデーション'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    9234: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ გვერდი.',
        jump_to: 'გადასვლა',
        jump_to_confirm: 'დადასტურება',
        page: '',
        // Pagination
        prev_page: 'წინა გვერდი',
        next_page: 'შემდეგი გვერდი',
        prev_5: 'წინა 5 გვერდი',
        next_5: 'შემდეგი 5 გვერდი',
        prev_3: 'წინა 3 გვერდი',
        next_3: 'შემდეგი 3 გვერდი',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    9528: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ka_GE',
        today: 'დღეს',
        now: 'ახლა',
        backToToday: 'მიმდინარე თარიღი',
        ok: 'OK',
        clear: 'გასუფთავება',
        week: 'კვირა',
        month: 'თვე',
        year: 'წელი',
        timeSelect: 'დროის არჩევა',
        dateSelect: 'თარიღის არჩევა',
        weekSelect: 'კვირის არჩევა',
        monthSelect: 'თვის არჩევა',
        yearSelect: 'წლის არჩევა',
        decadeSelect: 'ათწლეულის არჩევა',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'წინა თვე (PageUp)',
        nextMonth: 'მომდევნო თვე (PageDown)',
        previousYear: 'წინა წელი (Control + left)',
        nextYear: 'მომდევნო წელი (Control + right)',
        previousDecade: 'წინა ათწლეული',
        nextDecade: 'მომდევნო ათწლეული',
        previousCentury: 'გასული საუკუნე',
        nextCentury: 'მომდევნო საუკუნე'
    });
    var _default = exports.default = locale;
    }}),
    6067: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ka_GE.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 6067);
    var __TURBOPACK__imported__module__9234__ = __turbopack_context__.i(9234);
    // MERGED MODULE: [project]/components/calendar/locale/ka_GE.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ka_GE.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__9528__ = __turbopack_context__.i(9528);
    // MERGED MODULE: [project]/components/time-picker/locale/ka_GE.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'აირჩიეთ დრო',
        rangePlaceholder: [
            'საწყისი თარიღი',
            'საბოლოო თარიღი'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    const locale1 = {
        lang: {
            placeholder: 'აირჩიეთ თარიღი',
            yearPlaceholder: 'აირჩიეთ წელი',
            quarterPlaceholder: 'აირჩიეთ მეოთხედი',
            monthPlaceholder: 'აირჩიეთ თვე',
            weekPlaceholder: 'აირჩიეთ კვირა',
            rangePlaceholder: [
                'საწყისი თარიღი',
                'საბოლოო თარიღი'
            ],
            rangeYearPlaceholder: [
                'საწყისი წელი',
                'საბოლოო წელი'
            ],
            rangeMonthPlaceholder: [
                'საწყისი თვე',
                'საბოლოო თვე'
            ],
            rangeWeekPlaceholder: [
                'საწყისი კვირა',
                'საბოლოო კვირა'
            ],
            ...__TURBOPACK__imported__module__9528__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} არ არის სწორი ${type}';
    const localeValues = {
        locale: 'ka',
        Pagination: __TURBOPACK__imported__module__9234__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'გთხოვთ აირჩიოთ',
            close: 'დახურვა'
        },
        Table: {
            filterTitle: 'ფილტრის მენიუ',
            filterConfirm: 'კარგი',
            filterReset: 'გასუფთავება',
            filterEmptyText: 'ფილტრები არაა',
            emptyText: 'ინფორმაცია არაა',
            selectAll: 'აირჩიეთ მიმდინარე გვერდი',
            selectInvert: 'შეაბრუნეთ მიმდინარე გვერდი',
            selectNone: 'მონაცემების გასუფთავება',
            selectionAll: 'ყველას მონიშვნა',
            sortTitle: 'დალაგება',
            expand: 'სტრიქონის გაშლა',
            collapse: 'სტრიქონის შეკუმშვა',
            triggerDesc: 'დაღმავალი დალაგება',
            triggerAsc: 'აღმავალი დალაგება',
            cancelSort: 'დალაგების გაუქმება'
        },
        Tour: {
            Next: 'მომდევნო',
            Previous: 'წინა',
            Finish: 'დასრულება'
        },
        Modal: {
            okText: 'კარგი',
            cancelText: 'გაუქმება',
            justOkText: 'ოკ'
        },
        Popconfirm: {
            okText: 'კარგი',
            cancelText: 'გაუქმება'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'მოძებნე აქ',
            itemUnit: 'ერთეული',
            itemsUnit: 'ერთეულები',
            remove: 'ამოშლა',
            selectCurrent: 'მიმდინარე გვერდის არჩევა',
            removeCurrent: 'მიმდინარე გვერდის ამოშლა',
            selectAll: 'ყველას მონიშვნა',
            removeAll: 'ყველას წაშლა',
            selectInvert: 'მიმდინარე გვერდის შებრუნება'
        },
        Upload: {
            uploading: 'იტვირთება...',
            removeFile: 'ფაილის ამოშლა',
            uploadError: 'ატვირთვის შეცდომა',
            previewFile: 'ფაილის გადახედვა',
            downloadFile: 'ფაილის ჩამოტვირთვა'
        },
        Empty: {
            description: 'ინფორმაცია არაა'
        },
        Icon: {
            icon: 'ხატულა'
        },
        Text: {
            edit: 'რედაქტირება',
            copy: 'ასლი',
            copied: 'ასლი აღებულია',
            expand: 'გაშლა'
        },
        Form: {
            optional: '(არასავალდებულო)',
            defaultValidateMessages: {
                default: 'ველის შემოწმების შეცდომა ${label}-ისთვის',
                required: 'გთხოვთ შეიყვანეთ ${label}',
                enum: '${label} უნდა იყოს ერთ-ერთი [${enum}]-დან',
                whitespace: '${label} არ შეიძლება იყოს ცარიელი სიმბოლო',
                date: {
                    format: '${label} თარიღის ფორმატი არასწორია',
                    parse: '${label} თარიღში კონვერტირება არ არის შესაძლებელი',
                    invalid: '${label} არასწორი თარიღია'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} უნდა იყოს ${len} სიმბოლო',
                    min: '${label} უნდა იყოს სულ მცირე ${min} სიმბოლო',
                    max: '${label} უნდა იყოს მაქსიმუმ ${max} სიმბოლო',
                    range: '${label} უნდა იყოს ${min}-${max} სიმბოლოს შორის'
                },
                number: {
                    len: '${label} უნდა იყოს ${len} ტოლი',
                    min: '${label} უნდა იყოს მინუმიმ ${min}',
                    max: '${label} უნდა იყოს მაქსიმუმ ${max}',
                    range: '${label} უნდა იყოს ${min}-${max} შორის'
                },
                array: {
                    len: 'უნდა იყოს ${len} ${label}',
                    min: 'სულ მცირე ${min} ${label}',
                    max: 'არაუმეტეს ${max} ${label}',
                    range: '${label}-ის რაოდენობა უნდა იყოს ${min}-${max} შორის'
                },
                pattern: {
                    mismatch: '${label} არ ერგება შაბლონს ${pattern}'
                }
            }
        },
        Image: {
            preview: 'გადახედვა'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    1182: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ бет',
        jump_to: 'Секіру',
        jump_to_confirm: 'Растау',
        page: '',
        // Pagination
        prev_page: 'Артқа',
        next_page: 'Алға',
        prev_5: 'Алдыңғы 5',
        next_5: 'Келесі 5',
        prev_3: 'Алдыңғы 3',
        next_3: 'Келесі 3',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    7890: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'kk_KZ',
        today: 'Бүгін',
        now: 'Қазір',
        backToToday: 'Ағымдағы күн',
        ok: 'Таңдау',
        clear: 'Таза',
        week: 'Апта',
        month: 'Ай',
        year: 'Жыл',
        timeSelect: 'Уақытты таңдау',
        dateSelect: 'Күнді таңдау',
        monthSelect: 'Айды таңдаңыз',
        yearSelect: 'Жылды таңдаңыз',
        decadeSelect: 'Онжылды таңдаңыз',
        dateFormat: 'D-M-YYYY',
        dateTimeFormat: 'D-M-YYYY HH:mm:ss',
        previousMonth: 'Алдыңғы ай (PageUp)',
        nextMonth: 'Келесі ай (PageDown)',
        previousYear: 'Алдыңғы жыл (Control + left)',
        nextYear: 'Келесі жыл (Control + right)',
        previousDecade: 'Алдыңғы онжылдық',
        nextDecade: 'Келесі онжылдық',
        previousCentury: 'Алдыңғы ғасыр',
        nextCentury: 'Келесі ғасыр'
    });
    var _default = exports.default = locale;
    }}),
    5705: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/kk_KZ.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 5705);
    var __TURBOPACK__imported__module__1182__ = __turbopack_context__.i(1182);
    // MERGED MODULE: [project]/components/calendar/locale/kk_KZ.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/kk_KZ.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7890__ = __turbopack_context__.i(7890);
    // MERGED MODULE: [project]/components/time-picker/locale/kk_KZ.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Уақытты таңдаңыз',
        rangePlaceholder: [
            'Бастау уақыты',
            'Аяқталу уақыты'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Күнді таңдаңыз',
            yearPlaceholder: 'Жылды таңдаңыз',
            quarterPlaceholder: 'Тоқсанды таңдаңыз',
            monthPlaceholder: 'Айды таңдаңыз',
            weekPlaceholder: 'Аптаны таңдаңыз',
            rangePlaceholder: [
                'Бастау күні',
                'Аяқталу күні'
            ],
            rangeYearPlaceholder: [
                'Бастау жылы',
                'Аяқталу жылы'
            ],
            rangeMonthPlaceholder: [
                'Бастау айы',
                'Аяқталу айы'
            ],
            rangeWeekPlaceholder: [
                'Бастау апта',
                'Аяқталу апта'
            ],
            ...__TURBOPACK__imported__module__7890__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} ${type} типі емес';
    const localeValues = {
        locale: 'kk',
        Pagination: __TURBOPACK__imported__module__1182__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Таңдаңыз',
            close: 'Жабу'
        },
        Table: {
            filterTitle: 'Фильтр',
            filterConfirm: 'OK',
            filterReset: 'Тазарту',
            filterEmptyText: 'Фильтр жоқ',
            emptyText: 'Деректер жоқ',
            selectAll: 'Барлығын таңдау',
            selectInvert: 'Таңдауды төңкеру',
            selectionAll: 'Барлық деректерді таңдаңыз',
            sortTitle: 'Сұрыптау',
            expand: 'Жолды жазу',
            collapse: 'Жолды бүктеу',
            triggerDesc: 'Төмендеуді сұрыптау үшін басыңыз',
            triggerAsc: 'Өсу ретімен сұрыптау үшін басыңыз',
            cancelSort: 'Сұрыптаудан бас тарту үшін басыңыз'
        },
        Tour: {
            Next: 'Келесі',
            Previous: 'Алдыңғы',
            Finish: 'Аяқтау'
        },
        Modal: {
            okText: 'Жарайды',
            cancelText: 'Болдырмау',
            justOkText: 'Жарайды'
        },
        Popconfirm: {
            okText: 'Жарайды',
            cancelText: 'Болдырмау'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Іздеу',
            itemUnit: 'элемент.',
            itemsUnit: 'элемент.',
            remove: 'Жою',
            selectAll: 'Барлық деректерді таңдау',
            selectCurrent: 'Ағымдағы бетті таңдау',
            selectInvert: 'Кері тәртіпте көрсету',
            removeAll: 'Барлық деректерді жою',
            removeCurrent: 'Ағымдағы парақты өшіру'
        },
        Upload: {
            uploading: 'Жүктеу...',
            removeFile: 'Файлды жою',
            uploadError: 'Жүктеу кезінде қате пайда болды',
            previewFile: 'Файлды алдын ала қарау',
            downloadFile: 'Файлды жүктеу'
        },
        Empty: {
            description: 'Деректер жоқ'
        },
        Icon: {
            icon: 'белгішесі'
        },
        Text: {
            edit: 'Өңдеу',
            copy: 'Көшіру',
            copied: 'Көшірілді',
            expand: 'Жазу'
        },
        Form: {
            defaultValidateMessages: {
                default: '${label} өрісін тексеру қателігі',
                required: '${label} енгізіңіз',
                enum: '${label} [${enum}] қатарынан болуы керек',
                whitespace: '${label} бос болмауы керек',
                date: {
                    format: '${label} жарамды күн форматы емес',
                    parse: '${label} күнге түрлендірілмейді',
                    invalid: '${label} жарамды күн емес'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ${len} таңбадан тұруы керек',
                    min: '${label} ${min} таңбадан үлкен немесе оған тең болуы керек',
                    max: '${label} ${max} таңбадан кем немесе оған тең болуы керек',
                    range: '${label} ұзындығы ${min}-${max} таңба аралығында болуы керек'
                },
                number: {
                    len: '${label} ${len} тең болуы керек',
                    min: '${label} ${min} мәнінен үлкен немесе оған тең болуы керек',
                    max: '${label} ${max} мәнінен аз немесе оған тең болуы керек'
                },
                array: {
                    len: '${label} элементтерінің саны ${len} тең болуы керек',
                    min: '${label} элементтерінің саны ${min} көп немесе оған тең болуы керек',
                    max: '${label} элементтерінің саны ${max} аз немесе оған тең болуы керек',
                    range: '${label} элементтерінің саны ${min} - ${max} аралығында болуы керек'
                },
                pattern: {
                    mismatch: '${label} ${pattern} мен сәйкес келмейді'
                }
            }
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6744: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ ទំព័រ',
        jump_to: 'លោត​ទៅ',
        jump_to_confirm: 'បញ្ជាក់',
        page: 'ទំព័រ',
        // Pagination
        prev_page: 'ទំព័រ​មុន',
        next_page: 'ទំព័រ​​បន្ទាប់',
        prev_5: '៥ ទំព័រថយក្រោយ',
        next_5: '៥ ទំព័រទៅមុខ',
        prev_3: '៣ ទំព័រថយក្រោយ',
        next_3: '៣ ទំព័រទៅមុខ',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    5014: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'km',
        today: 'ថ្ងៃនេះ',
        now: 'ឥឡូវ​នេះ',
        backToToday: 'ត្រលប់ទៅថ្ងៃនេះ',
        ok: 'កំណត់',
        timeSelect: 'រយៈពេលជ្រើសរើស',
        dateSelect: 'ជ្រើសរើសកាលបរិច្ឆេទ',
        weekSelect: 'ជ្រើសរើសសប្តាហ៍',
        clear: 'ច្បាស់',
        week: 'សប្តាហ៍',
        month: 'ខែ',
        year: 'ឆ្នាំ',
        previousMonth: 'ខែមុន (ឡើងទំព័រ)',
        nextMonth: 'ខែបន្ទាប់ (ប៊ូតុងចុះទំព័រ)',
        monthSelect: 'ជ្រើសរើសខែ',
        yearSelect: 'ជ្រើសរើសឆ្នាំ',
        decadeSelect: 'ជ្រើសរើសអាយុ',
        dateFormat: 'YYYY-M-D',
        dateTimeFormat: 'YYYY-M-D HH:mm:ss',
        previousYear: 'ឆ្នាំមុន (Controlគ្រាប់ចុចបូកព្រួញខាងឆ្វេង)',
        nextYear: 'ឆ្នាំក្រោយ (Control គ្រាប់ចុចបូកព្រួញស្ដាំ)',
        previousDecade: 'ជំនាន់ចុងក្រោយ',
        nextDecade: 'ជំនាន់​ក្រោយ',
        previousCentury: 'សតវត្សចុងក្រោយ',
        nextCentury: 'សតវត្សរ៍បន្ទាប់',
        monthBeforeYear: false
    });
    var _default = exports.default = locale;
    }}),
    1200: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/km_KH.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 1200);
    var __TURBOPACK__imported__module__6744__ = __turbopack_context__.i(6744);
    // MERGED MODULE: [project]/components/calendar/locale/km_KH.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/km_KH.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__5014__ = __turbopack_context__.i(5014);
    // MERGED MODULE: [project]/components/time-picker/locale/km_KH.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'រើសម៉ោង',
        rangePlaceholder: [
            'ម៉ោងចប់ផ្ដើម',
            'ម៉ោងបញ្ចប់'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'រើសថ្ងៃ',
            yearPlaceholder: 'រើសឆ្នាំ',
            quarterPlaceholder: 'រើសត្រីមាស',
            monthPlaceholder: 'រើសខែ',
            weekPlaceholder: 'រើសសប្តាហ៍',
            rangePlaceholder: [
                'ថ្ងៃចាប់ផ្ដើម',
                'ថ្ងៃបញ្ចប់'
            ],
            rangeYearPlaceholder: [
                'ឆ្នាំចាប់ផ្ដើម',
                'ឆ្នាំបញ្ចប់'
            ],
            rangeMonthPlaceholder: [
                'ខែចាប់ផ្ដើម',
                'ខែបញ្ចប់'
            ],
            rangeWeekPlaceholder: [
                'សប្ដាហ៍ចាប់ផ្ដើម',
                'សប្ដាហ៍បញ្ចប់'
            ],
            ...__TURBOPACK__imported__module__5014__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} is not a valid ${type}';
    const localeValues = {
        locale: 'km',
        Pagination: __TURBOPACK__imported__module__6744__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'បិទ'
        },
        Table: {
            filterTitle: 'បញ្ចីតម្រៀប',
            filterConfirm: 'យល់ព្រម',
            filterReset: 'ត្រឡប់ដើម',
            filterEmptyText: 'គ្មានបញ្ចីតម្រៀប',
            emptyText: 'គ្មានទិន្នន័យ',
            selectAll: 'រើសក្នុងទំព័រនេះ',
            selectInvert: 'បញ្ច្រាសក្នុងទំព័រនេះ',
            selectNone: 'លុបចេញទាំងអស់',
            selectionAll: 'រើសយកទាំងអស់',
            sortTitle: 'តម្រៀប',
            expand: 'ពន្លាត',
            collapse: 'បិតបាំង',
            triggerDesc: 'ចុចដើម្បីរៀបតាមលំដាប់ធំ',
            triggerAsc: 'ចុចដើម្បីរៀបតាមលំដាប់តូច​',
            cancelSort: 'ចុចដើម្បីបោះបង់'
        },
        Modal: {
            okText: 'យល់ព្រម',
            cancelText: 'បោះបង់',
            justOkText: 'យល់ព្រម'
        },
        Popconfirm: {
            okText: 'យល់ព្រម',
            cancelText: 'បោះបង់'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'ស្វែងរកនៅទីនេះ',
            itemUnit: '',
            itemsUnit: 'items'
        },
        Upload: {
            uploading: 'កំពុងបញ្ចូលឡើង...',
            removeFile: 'លុបឯកសារ',
            uploadError: 'បញ្ចូលមិនជោកជ័យ',
            previewFile: 'មើលឯកសារ',
            downloadFile: 'ទាញយកឯកសារ'
        },
        Empty: {
            description: 'គ្មានទិន្នន័យ'
        },
        Form: {
            defaultValidateMessages: {
                default: 'Field validation error for ${label}',
                required: 'Please enter ${label}',
                enum: '${label} must be one of [${enum}]',
                whitespace: '${label} cannot be a blank character',
                date: {
                    format: '${label} date format is invalid',
                    parse: '${label} cannot be converted to a date',
                    invalid: '${label} is an invalid date'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} must be ${len} characters',
                    min: '${label} must be at least ${min} characters',
                    max: '${label} must be up to ${max} characters',
                    range: '${label} must be between ${min}-${max} characters'
                },
                number: {
                    len: '${label} must be equal to ${len}',
                    min: '${label} must be minimum ${min}',
                    max: '${label} must be maximum ${max}',
                    range: '${label} must be between ${min}-${max}'
                },
                array: {
                    len: 'Must be ${len} ${label}',
                    min: 'At least ${min} ${label}',
                    max: 'At most ${max} ${label}',
                    range: 'The amount of ${label} must be between ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} does not match the pattern ${pattern}'
                }
            }
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6738: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ rûpel',
        jump_to: 'Biçe',
        jump_to_confirm: 'piştrast bike',
        page: '',
        // Pagination
        prev_page: 'Rûpelê Pêş',
        next_page: 'Rûpelê Paş',
        prev_5: '5 Rûpelên Pêş',
        next_5: '5 Rûpelên Paş',
        prev_3: '3 Rûpelên Pêş',
        next_3: '3 Rûpelên Paş',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    9703: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ku',
        today: 'Îro',
        now: 'Niha',
        backToToday: 'Vegere îro',
        ok: 'Temam',
        clear: 'Paqij bike',
        week: 'Sêbê',
        month: 'Meh',
        year: 'Sal',
        timeSelect: 'Demê hilbijêre',
        dateSelect: 'Dîrok hilbijêre',
        monthSelect: 'Meh hilbijêre',
        yearSelect: 'Sal hilbijêre',
        decadeSelect: 'Dehsal hilbijêre',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Meha peş (PageUp))',
        nextMonth: 'Meha paş (PageDown)',
        previousYear: 'Sala peş (Control + şep)',
        nextYear: 'Sala paş (Control + rast)',
        previousDecade: 'Dehsalen peş',
        nextDecade: 'Dehsalen paş',
        previousCentury: 'Sedsalen peş',
        nextCentury: 'Sedsalen paş'
    });
    var _default = exports.default = locale;
    }}),
    7465: [((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/calendar/locale/kmr_IQ.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__2
    }, 7465);
    // MERGED MODULE: [project]/components/date-picker/locale/kmr_IQ.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__1
    }, 1645);
    var __TURBOPACK__imported__module__9703__ = __turbopack_context__.i(9703);
    // MERGED MODULE: [project]/components/time-picker/locale/kmr_IQ.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    }, 4854);
    const locale = {
        placeholder: 'Demê hilbijêre'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Dîrok hilbijêre',
            rangePlaceholder: [
                'Dîroka destpêkê',
                'Dîroka dawîn'
            ],
            ...__TURBOPACK__imported__module__9703__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    }), [4854,1645]]
    ,
    4832: ((__turbopack_context__) => {
    "use strict";
    
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    });
    var __TURBOPACK__imported__module__6738__ = __turbopack_context__.i(6738);
    var __TURBOPACK__imported__module__7465__ = __turbopack_context__.i(7465);
    var __TURBOPACK__imported__module__1645__ = __turbopack_context__.i(1645);
    var __TURBOPACK__imported__module__4854__ = __turbopack_context__.i(4854);
    ;
    ;
    ;
    ;
    const localeValues = {
        locale: 'ku',
        Pagination: __TURBOPACK__imported__module__6738__["default"],
        DatePicker: __TURBOPACK__imported__module__1645__["default"],
        TimePicker: __TURBOPACK__imported__module__4854__["default"],
        Calendar: __TURBOPACK__imported__module__7465__["default"],
        global: {
            close: 'Betal ke'
        },
        Table: {
            filterTitle: 'Menuê peldanka',
            filterConfirm: 'Temam',
            filterReset: 'Jê bibe',
            selectAll: 'Hemî hilbijêre',
            selectInvert: 'Hilbijartinan veguhere'
        },
        Tour: {
            Next: 'Temam',
            Previous: 'Betal ke',
            Finish: 'Temam'
        },
        Modal: {
            okText: 'Temam',
            cancelText: 'Betal ke',
            justOkText: 'Temam'
        },
        Popconfirm: {
            okText: 'Temam',
            cancelText: 'Betal ke'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Lêgerîn',
            itemUnit: 'tişt',
            itemsUnit: 'tişt'
        },
        Upload: {
            uploading: 'Bardike...',
            removeFile: 'Pelê rabike',
            uploadError: 'Xeta barkirine',
            previewFile: 'Pelê pêşbibîne',
            downloadFile: 'Pelê dakêşin'
        },
        Empty: {
            description: 'Agahî tune'
        }
    };
    const __TURBOPACK__default__export__ = localeValues;
    }),
    217: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ ಪುಟ',
        jump_to: 'ಜಿಗಿತವನ್ನು',
        jump_to_confirm: 'ಖಚಿತಪಡಿಸಲು ಜಿಗಿತವನ್ನು',
        page: '',
        // Pagination
        prev_page: 'ಹಿಂದಿನ ಪುಟ',
        next_page: 'ಮುಂದಿನ ಪುಟ',
        prev_5: 'ಹಿಂದಿನ 5 ಪುಟಗಳು',
        next_5: 'ಮುಂದಿನ 5 ಪುಟಗಳು',
        prev_3: 'ಹಿಂದಿನ 3 ಪುಟಗಳು',
        next_3: 'ಮುಂದಿನ 3 ಪುಟಗಳು',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    7051: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'kn_IN',
        today: 'ಇಂದು',
        now: 'ಈಗ',
        backToToday: 'ಇಂದು ಹಿಂದಿರುಗಿ',
        ok: 'ಸರಿ',
        clear: 'ಸ್ಪಷ್ಟ',
        week: 'ವಾರ',
        month: 'ತಿಂಗಳು',
        year: 'ವರ್ಷ',
        timeSelect: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ',
        dateSelect: 'ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
        weekSelect: 'ಒಂದು ವಾರದ ಆರಿಸಿ',
        monthSelect: 'ಒಂದು ತಿಂಗಳು ಆಯ್ಕೆಮಾಡಿ',
        yearSelect: 'ಒಂದು ವರ್ಷ ಆರಿಸಿ',
        decadeSelect: 'ಒಂದು ದಶಕದ ಆಯ್ಕೆಮಾಡಿ',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'ಹಿಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಅಪ್)',
        nextMonth: 'ಮುಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಡೌನ್)',
        previousYear: 'ಕಳೆದ ವರ್ಷ (Ctrl + ಎಡ)',
        nextYear: 'ಮುಂದಿನ ವರ್ಷ (Ctrl + ಬಲ)',
        previousDecade: 'ಕಳೆದ ದಶಕ',
        nextDecade: 'ಮುಂದಿನ ದಶಕ',
        previousCentury: 'ಕಳೆದ ಶತಮಾನ',
        nextCentury: 'ಮುಂದಿನ ಶತಮಾನ'
    });
    var _default = exports.default = locale;
    }}),
    1119: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/kn_IN.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 1119);
    var __TURBOPACK__imported__module__217__ = __turbopack_context__.i(217);
    // MERGED MODULE: [project]/components/calendar/locale/kn_IN.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/kn_IN.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7051__ = __turbopack_context__.i(7051);
    // MERGED MODULE: [project]/components/time-picker/locale/kn_IN.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ',
            yearPlaceholder: 'ವರ್ಷ ಆಯ್ಕೆಮಾಡಿ',
            rangePlaceholder: [
                'ಪ್ರಾರಂಭ ದಿನಾಂಕ',
                'ಅಂತಿಮ ದಿನಾಂಕ'
            ],
            quarterPlaceholder: 'ಕಾಲುಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            monthPlaceholder: 'ತಿಂಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            weekPlaceholder: 'ವಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            rangeYearPlaceholder: [
                'ಉದ್ಘಾಟನಾ ವರ್ಷ',
                'ಅಂತಿಮ ವರ್ಷ'
            ],
            rangeQuarterPlaceholder: [
                'ತ್ರೈಮಾಸಿಕದ ಆರಂಭ',
                'ಅಂತಿಮ ತ್ರೈಮಾಸಿಕ'
            ],
            rangeMonthPlaceholder: [
                'ಆರಂಭಿಕ ತಿಂಗಳು',
                'ಅಂತಿಮ ತಿಂಗಳು'
            ],
            rangeWeekPlaceholder: [
                'ತೆರೆಯುವ ವಾರ',
                'ಅಂತಿಮ ವಾರ'
            ],
            ...__TURBOPACK__imported__module__7051__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} ಮಾನ್ಯವಾದ ${type} ಅಲ್ಲ';
    const localeValues = {
        locale: 'kn',
        Pagination: __TURBOPACK__imported__module__217__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        // locales for all comoponents
        global: {
            placeholder: 'ದಯವಿಟ್ಟು ಆರಿಸಿ',
            close: 'ಮುಚ್ಚಿ'
        },
        Table: {
            filterTitle: 'ಪಟ್ಟಿ ಸೋಸಿ',
            filterConfirm: 'ಸರಿ',
            filterReset: 'ಮರುಹೊಂದಿಸಿ',
            emptyText: 'ಮಾಹಿತಿ ಇಲ್ಲ',
            selectAll: 'ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            selectInvert: 'ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ತಿರುಗಿಸಿ',
            sortTitle: 'ವಿಂಗಡಿಸಿ',
            filterEmptyText: 'ಫಿಲ್ಟರ್ ಇಲ್ಲ',
            filterCheckAll: 'ಎಲ್ಲಾ ಐಟಂಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            filterSearchPlaceholder: 'ಫಿಲ್ಟರ್‌ಗಳೊಂದಿಗೆ ಹುಡುಕಿ',
            selectNone: 'ಯಾವುದನ್ನೂ ಆಯ್ಕೆ ಮಾಡಬೇಡಿ',
            selectionAll: 'ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            expand: 'ಶ್ರೇಣಿಯನ್ನು ವಿಸ್ತರಿಸಿ',
            collapse: 'ಸಾಲುಗಳನ್ನು ಸಂಕುಚಿಸಿ',
            triggerDesc: 'ಅವರೋಹಣ ಕ್ರಮದಲ್ಲಿ ವಿಂಗಡಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
            triggerAsc: 'ಏರೋಹಣ ಕ್ರಮದಲ್ಲಿ ವಿಂಗಡಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
            cancelSort: 'ವಿಂಗಡಣೆಯನ್ನು ರದ್ದುಗೊಳಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ'
        },
        Tour: {
            Next: 'ಮುಂದುವರೆಸಿ',
            Previous: 'ಹಿಂದೆಯಾಗಿ',
            Finish: 'ಮುಗಿಸಿ'
        },
        Modal: {
            okText: 'ಸರಿ',
            cancelText: 'ರದ್ದು',
            justOkText: 'ಸರಿ'
        },
        Popconfirm: {
            okText: 'ಸರಿ',
            cancelText: 'ರದ್ದು'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            notFoundContent: 'ದೊರೆತಿಲ್ಲ',
            searchPlaceholder: 'ಇಲ್ಲಿ ಹುಡುಕಿ',
            itemUnit: 'ವಿಷಯ',
            itemsUnit: 'ವಿಷಯಗಳು'
        },
        Upload: {
            uploading: 'ಏರಿಸಿ...',
            removeFile: 'ಫೈಲ್ ತೆಗೆದುಹಾಕಿ',
            uploadError: 'ಏರಿಸುವ ದೋಷ',
            previewFile: 'ಫೈಲ್ ಮುನ್ನೋಟ',
            downloadFile: 'ಫೈಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ'
        },
        Empty: {
            description: 'ಮಾಹಿತಿ ಇಲ್ಲ'
        },
        Icon: {
            icon: 'ಚಿಹ್ನೆ'
        },
        Text: {
            edit: 'ಸಂಪಾದಿಸಿ',
            copy: 'ಪ್ರತಿಯನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ',
            copied: 'ನಕಲಿಸಲಾಗಿದೆ',
            expand: 'ಶ್ರೇಣಿಯನ್ನು ವಿಸ್ತರಿಸಿ',
            collapse: 'ಸಾಲುಗಳನ್ನು ಸಂಕುಚಿಸಿ'
        },
        Form: {
            optional: '(ಐಚ್ಛಿಕ)',
            defaultValidateMessages: {
                default: '${label} ಗಾಗಿ ಕ್ಷೇತ್ರ ಮೌಲ್ಯೀಕರಣ ದೋಷ',
                required: '${label} ನಮೂದಿಸಿ',
                enum: '${label} [${enum}] ನಲ್ಲಿ ಒಂದಾಗಿರಬೇಕು.',
                whitespace: '${label} ಖಾಲಿ ಅಕ್ಷರವಾಗಿರಬಾರದು',
                date: {
                    format: '${label} ದಿನಾಂಕ ಸ್ವರೂಪವು ಅಮಾನ್ಯವಾಗಿದೆ',
                    parse: '${label} ಅನ್ನು ದಿನಾಂಕಕ್ಕೆ ಪರಿವರ್ತಿಸಲಾಗುವುದಿಲ್ಲ',
                    invalid: '${label} ಒಂದು ಅಮಾನ್ಯ ದಿನಾಂಕವಾಗಿದೆ'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ${len} ಅಕ್ಷರಗಳಾಗಿರಬೇಕು',
                    min: '${label} ಕನಿಷ್ಠ ${min} ಅಕ್ಷರಗಳಾಗಿರಬೇಕು',
                    max: '${label} ಗರಿಷ್ಠ ${max} ಅಕ್ಷರಗಳಾಗಿರಬೇಕು',
                    range: '${label} ${min}-${max} ಅಕ್ಷರಗಳ ನಡುವೆ ಇರಬೇಕು'
                },
                number: {
                    len: '${label} ${len} ಗೆ ಸಮನಾಗಿರಬೇಕು',
                    min: '${label} ಕನಿಷ್ಠ ${min} ಆಗಿರಬೇಕು',
                    max: '${label} ಹೆಚ್ಚೆಂದರೆ ${max} ಆಗಿರಬೇಕು',
                    range: '${label} ${min}-${max} ನಡುವೆ ಇರಬೇಕು'
                },
                array: {
                    len: '${label} ${len} ಗೆ ಸಮನಾಗಿರಬೇಕು',
                    min: '${label} ಕನಿಷ್ಠ ${min} ಆಗಿರಬೇಕು',
                    max: '${label} ಹೆಚ್ಚೆಂದರೆ ${max} ಆಗಿರಬೇಕು',
                    range: '${label} ${min}-${max} ನಡುವೆ ಇರಬೇಕು'
                },
                pattern: {
                    mismatch: '${label} ಮಾದರಿಯು ${pattern} ಗೆ ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ'
                }
            }
        },
        Image: {
            preview: 'ಮುನ್ನೋಟ'
        },
        QRCode: {
            expired: 'QR ಕೋಡ್ ಅವಧಿ ಮೀರಿದೆ',
            refresh: 'ನವೀಕರಿಸಿ'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6395: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ 페이지',
        jump_to: '이동하기',
        jump_to_confirm: '확인하다',
        page: '페이지',
        // Pagination
        prev_page: '이전 페이지',
        next_page: '다음 페이지',
        prev_5: '이전 5 페이지',
        next_5: '다음 5 페이지',
        prev_3: '이전 3 페이지',
        next_3: '다음 3 페이지',
        page_size: '페이지 크기'
    };
    var _default = exports.default = locale;
    }}),
    549: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ko_KR',
        today: '오늘',
        now: '현재 시각',
        backToToday: '오늘로 돌아가기',
        ok: '확인',
        clear: '지우기',
        week: '주',
        month: '월',
        year: '년',
        timeSelect: '시간 선택',
        dateSelect: '날짜 선택',
        monthSelect: '달 선택',
        yearSelect: '연 선택',
        decadeSelect: '연대 선택',
        yearFormat: 'YYYY년',
        dateFormat: 'YYYY-MM-DD',
        dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
        monthBeforeYear: false,
        previousMonth: '이전 달 (PageUp)',
        nextMonth: '다음 달 (PageDown)',
        previousYear: '이전 해 (Control + left)',
        nextYear: '다음 해 (Control + right)',
        previousDecade: '이전 연대',
        nextDecade: '다음 연대',
        previousCentury: '이전 세기',
        nextCentury: '다음 세기'
    });
    var _default = exports.default = locale;
    }}),
    4958: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ko_KR.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4958);
    var __TURBOPACK__imported__module__6395__ = __turbopack_context__.i(6395);
    // MERGED MODULE: [project]/components/calendar/locale/ko_KR.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ko_KR.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__549__ = __turbopack_context__.i(549);
    // MERGED MODULE: [project]/components/time-picker/locale/ko_KR.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: '시간 선택',
        rangePlaceholder: [
            '시작 시간',
            '종료 시간'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: '날짜 선택',
            yearPlaceholder: '연도 선택',
            quarterPlaceholder: '분기 선택',
            monthPlaceholder: '월 선택',
            weekPlaceholder: '주 선택',
            rangePlaceholder: [
                '시작일',
                '종료일'
            ],
            rangeYearPlaceholder: [
                '시작 연도',
                '종료 연도'
            ],
            rangeMonthPlaceholder: [
                '시작 월',
                '종료 월'
            ],
            rangeQuarterPlaceholder: [
                '시작 분기',
                '종료 분기'
            ],
            rangeWeekPlaceholder: [
                '시작 주',
                '종료 주'
            ],
            shortWeekDays: [
                '일',
                '월',
                '화',
                '수',
                '목',
                '금',
                '토'
            ],
            shortMonths: [
                '1월',
                '2월',
                '3월',
                '4월',
                '5월',
                '6월',
                '7월',
                '8월',
                '9월',
                '10월',
                '11월',
                '12월'
            ],
            ...__TURBOPACK__imported__module__549__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} 유효하지 않은 ${type}';
    const localeValues = {
        locale: 'ko',
        Pagination: __TURBOPACK__imported__module__6395__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: '선택하세요',
            close: '닫기'
        },
        Table: {
            filterTitle: '필터 메뉴',
            filterConfirm: '확인',
            filterReset: '초기화',
            filterEmptyText: '필터 없음',
            filterCheckAll: '전체 선택',
            filterSearchPlaceholder: '필터 검색',
            emptyText: '데이터 없음',
            selectAll: '전체 선택',
            selectInvert: '선택 반전',
            selectNone: '없음',
            selectionAll: '전체 선택',
            sortTitle: '정렬',
            expand: '펼치기',
            collapse: '접기',
            triggerDesc: '내림차순으로 정렬하기',
            triggerAsc: '오름차순으로 정렬하기',
            cancelSort: '정렬 취소하기'
        },
        Tour: {
            Next: '다음',
            Previous: '이전',
            Finish: '종료'
        },
        Modal: {
            okText: '확인',
            cancelText: '취소',
            justOkText: '확인'
        },
        Popconfirm: {
            okText: '확인',
            cancelText: '취소'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: '여기에 검색하세요',
            itemUnit: '개',
            itemsUnit: '개',
            remove: '삭제',
            selectCurrent: '현재 페이지 선택',
            removeCurrent: '현재 페이지 삭제',
            selectAll: '전체 선택',
            removeAll: '전체 삭제',
            selectInvert: '선택 반전'
        },
        Upload: {
            uploading: '업로드 중...',
            removeFile: '파일 삭제',
            uploadError: '업로드 실패',
            previewFile: '파일 미리보기',
            downloadFile: '파일 다운로드'
        },
        Empty: {
            description: '데이터 없음'
        },
        Icon: {
            icon: '아이콘'
        },
        Text: {
            edit: '수정',
            copy: '복사',
            copied: '복사 됨',
            expand: '확장'
        },
        Form: {
            optional: '(선택사항)',
            defaultValidateMessages: {
                default: '필드 유효성 검사 오류 ${label}',
                required: '${label} 값을 입력해 주세요',
                enum: '${label} [${enum}] 중에 하나여야 합니다',
                whitespace: '${label} 비워둘 수 없습니다',
                date: {
                    format: '${label} 유효하지 않은 날짜 형식입니다',
                    parse: '${label} 날짜 형식으로 변환될 수 없습니다',
                    invalid: '${label} 유효하지 않은 날짜입니다'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ${len}글자여야 합니다',
                    min: '${label} 적어도 ${min}글자 이상이어야 합니다',
                    max: '${label} ${max}글자 이하여야 합니다',
                    range: '${label} ${min}-${max}글자 사이어야 합니다'
                },
                number: {
                    len: '${label} 값은 ${len}이어야 합니다',
                    min: '${label} 최솟값은 ${min}입니다',
                    max: '${label} 최댓값은 ${max}입니다',
                    range: '${label} 값은 ${min}-${max} 사이어야 합니다'
                },
                array: {
                    len: '${len}이어야 합니다 ${label}',
                    min: '최소 ${min}이어야 합니다 ${label}',
                    max: '최대 ${max}이어야 합니다 ${label}',
                    range: '${label} ${min}-${max} 사이어야 합니다'
                },
                pattern: {
                    mismatch: '${label} ${pattern} 패턴과 일치하지 않습니다'
                }
            }
        },
        Image: {
            preview: '미리보기'
        },
        QRCode: {
            expired: '만료된 QR 코드',
            refresh: '새로고침'
        },
        ColorPicker: {
            presetEmpty: '미정',
            transparent: '투명',
            singleColor: '단색',
            gradientColor: '그라데이션'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    5968: ((__turbopack_context__) => {
    "use strict";
    
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    });
    var __TURBOPACK__imported__module__6738__ = __turbopack_context__.i(6738);
    var __TURBOPACK__imported__module__7465__ = __turbopack_context__.i(7465);
    var __TURBOPACK__imported__module__1645__ = __turbopack_context__.i(1645);
    var __TURBOPACK__imported__module__4854__ = __turbopack_context__.i(4854);
    ;
    ;
    ;
    ;
    // please use antd/locale/kmr_IQ instead
    // keep this file for compatibility
    // https://github.com/ant-design/ant-design/issues/25778
    const localeValues = {
        locale: 'ku-iq',
        Pagination: __TURBOPACK__imported__module__6738__["default"],
        DatePicker: __TURBOPACK__imported__module__1645__["default"],
        TimePicker: __TURBOPACK__imported__module__4854__["default"],
        Calendar: __TURBOPACK__imported__module__7465__["default"],
        global: {
            close: 'Betal ke'
        },
        Table: {
            filterTitle: 'Menuê peldanka',
            filterConfirm: 'Temam',
            filterReset: 'Jê bibe',
            selectAll: 'Hemî hilbijêre',
            selectInvert: 'Hilbijartinan veguhere'
        },
        Tour: {
            Next: 'Temam',
            Previous: 'Betal ke',
            Finish: 'Temam'
        },
        Modal: {
            okText: 'Temam',
            cancelText: 'Betal ke',
            justOkText: 'Temam'
        },
        Popconfirm: {
            okText: 'Temam',
            cancelText: 'Betal ke'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Lêgerîn',
            itemUnit: 'tişt',
            itemsUnit: 'tişt'
        },
        Upload: {
            uploading: 'Bardike...',
            removeFile: 'Pelê rabike',
            uploadError: 'Xeta barkirine',
            previewFile: 'Pelê pêşbibîne',
            downloadFile: 'Pelê dakêşin'
        },
        Empty: {
            description: 'Agahî tune'
        }
    };
    const __TURBOPACK__default__export__ = localeValues;
    }),
    943: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ psl.',
        jump_to: 'Pereiti į',
        jump_to_confirm: 'patvirtinti',
        page: 'psl.',
        // Pagination
        prev_page: 'Atgal',
        next_page: 'Pirmyn',
        prev_5: 'Grįžti 5 psl.',
        next_5: 'Peršokti 5 psl.',
        prev_3: 'Grįžti 3 psl.',
        next_3: 'Peršokti 3 psl.',
        page_size: 'Puslapio dydis'
    };
    var _default = exports.default = locale;
    }}),
    1314: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'lt_LT',
        today: 'Šiandien',
        now: 'Dabar',
        backToToday: 'Rodyti šiandien',
        ok: 'Gerai',
        clear: 'Išvalyti',
        week: 'Savaitė',
        month: 'Mėnesis',
        year: 'Metai',
        timeSelect: 'Pasirinkti laiką',
        dateSelect: 'Pasirinkti datą',
        weekSelect: 'Pasirinkti savaitę',
        monthSelect: 'Pasirinkti mėnesį',
        yearSelect: 'Pasirinkti metus',
        decadeSelect: 'Pasirinkti dešimtmetį',
        dateFormat: 'YYYY-MM-DD',
        dayFormat: 'DD',
        dateTimeFormat: 'YYYY-MM-DD HH:MM:SS',
        previousMonth: 'Buvęs mėnesis (PageUp)',
        nextMonth: 'Kitas mėnesis (PageDown)',
        previousYear: 'Buvę metai (Control + left)',
        nextYear: 'Kiti metai (Control + right)',
        previousDecade: 'Buvęs dešimtmetis',
        nextDecade: 'Kitas dešimtmetis',
        previousCentury: 'Buvęs amžius',
        nextCentury: 'Kitas amžius'
    });
    var _default = exports.default = locale;
    }}),
    2012: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/lt_LT.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 2012);
    var __TURBOPACK__imported__module__943__ = __turbopack_context__.i(943);
    // MERGED MODULE: [project]/components/calendar/locale/lt_LT.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/lt_LT.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__1314__ = __turbopack_context__.i(1314);
    // MERGED MODULE: [project]/components/time-picker/locale/lt_LT.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Pasirinkite laiką',
        rangePlaceholder: [
            'Pradžios laikas',
            'Pabaigos laikas'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Pasirinkite datą',
            yearPlaceholder: 'Pasirinkite metus',
            quarterPlaceholder: 'Pasirinkite ketvirtį',
            monthPlaceholder: 'Pasirinkite mėnesį',
            weekPlaceholder: 'Pasirinkite savaitę',
            rangePlaceholder: [
                'Pradžios data',
                'Pabaigos data'
            ],
            rangeYearPlaceholder: [
                'Pradžios metai',
                'Pabaigos metai'
            ],
            rangeQuarterPlaceholder: [
                'Pradžios ketvirtis',
                'Pabaigos ketvirtis'
            ],
            rangeMonthPlaceholder: [
                'Pradžios mėnesis',
                'Pabaigos mėnesis'
            ],
            rangeWeekPlaceholder: [
                'Pradžios savaitė',
                'Pabaigos savaitė'
            ],
            ...__TURBOPACK__imported__module__1314__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} neatitinka tipo ${type}';
    const localeValues = {
        locale: 'lt',
        Pagination: __TURBOPACK__imported__module__943__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Pasirinkite',
            close: 'Uždaryti'
        },
        Table: {
            filterTitle: 'Filtras',
            filterConfirm: 'Gerai',
            filterReset: 'Atstatyti',
            filterEmptyText: 'Be filtrų',
            filterCheckAll: 'Pasirinkti visus',
            filterSearchPlaceholder: 'Ieškoti filtruose',
            emptyText: 'Nėra duomenų',
            selectAll: 'Pasirinkti viską',
            selectInvert: 'Apversti pasirinkimą',
            selectNone: 'Išvalyti visus',
            selectionAll: 'Rinktis visus',
            sortTitle: 'Rikiavimas',
            expand: 'Išskleisti',
            collapse: 'Suskleisti',
            triggerDesc: 'Spustelėkite norėdami rūšiuoti mažėjančia tvarka',
            triggerAsc: 'Spustelėkite norėdami rūšiuoti didėjančia tvarka',
            cancelSort: 'Spustelėkite, kad atšauktumėte rūšiavimą'
        },
        Tour: {
            Next: 'Kitas',
            Previous: 'Ankstesnis',
            Finish: 'Baigti'
        },
        Modal: {
            okText: 'Taip',
            cancelText: 'Atšaukti',
            justOkText: 'Gerai'
        },
        Popconfirm: {
            okText: 'Taip',
            cancelText: 'Atšaukti'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Paieška',
            itemUnit: 'vnt.',
            itemsUnit: 'vnt.',
            remove: 'Pašalinti',
            selectCurrent: 'Pasirinkti dabartinį puslapį',
            removeCurrent: 'Ištrinti dabartinį puslapį',
            selectAll: 'Pasirinkti viską',
            removeAll: 'Ištrinti viską',
            selectInvert: 'Apversti pasirinkimą'
        },
        Upload: {
            uploading: 'Įkeliami duomenys...',
            removeFile: 'Ištrinti failą',
            uploadError: 'Įkeliant įvyko klaida',
            previewFile: 'Failo peržiūra',
            downloadFile: 'Atsisiųsti failą'
        },
        Empty: {
            description: 'Nėra duomenų'
        },
        Icon: {
            icon: 'piktograma'
        },
        Text: {
            edit: 'Redaguoti',
            copy: 'Kopijuoti',
            copied: 'Nukopijuota',
            expand: 'Plačiau'
        },
        Form: {
            optional: '(neprivaloma)',
            defaultValidateMessages: {
                default: 'Klaida laukelyje ${label}',
                required: 'Prašome įvesti ${label}',
                enum: '${label} turi būti vienas iš [${enum}]',
                whitespace: '${label} negali likti tuščias',
                date: {
                    format: '${label} neteisingas datos formatas',
                    parse: '${label} negali būti konvertuotas į datą',
                    invalid: '${label} neatitinka datos formato'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} turi būti ${len} simbolių',
                    min: '${label} turi būti bent ${min} simbolių',
                    max: '${label} turi būti ne ilgesnis nei ${max} simbolių',
                    range: 'Laukelio ${label} reikšmės ribos ${min}-${max} simbolių'
                },
                number: {
                    len: '${label} turi būti lygi ${len}',
                    min: '${label} turi būti lygus arba didesnis už ${min}',
                    max: '${label} turi būti lygus arba mažesnis už ${max}',
                    range: '${label} turi būti tarp ${min}-${max}'
                },
                array: {
                    len: 'Pasirinktas kiekis ${label} turi būti lygus ${len}',
                    min: 'Pasirinktas kiekis ${label} turi būti bent ${min}',
                    max: 'Pasirinktas kiekis ${label} turi būti ne ilgesnis nei ${max}',
                    range: 'Pasirinktas ${label} kiekis turi būti tarp ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} neatitinka modelio ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Peržiūrėti'
        },
        QRCode: {
            expired: 'QR kodo galiojimas baigėsi',
            refresh: 'Atnaujinti'
        },
        ColorPicker: {
            presetEmpty: 'Tuščia',
            transparent: 'Permatomas',
            singleColor: 'Vieno spalvos',
            gradientColor: 'Gradientas'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    4014: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ lappuse',
        jump_to: 'iet uz',
        jump_to_confirm: 'apstiprināt',
        page: '',
        // Pagination
        prev_page: 'Iepriekšējā lapa',
        next_page: 'Nākamā lapaspuse',
        prev_5: 'Iepriekšējās 5 lapas',
        next_5: 'Nākamās 5 lapas',
        prev_3: 'Iepriekšējās 3 lapas',
        next_3: 'Nākamās 3 lapas',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    7403: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'lv_LV',
        today: 'Šodien',
        now: 'Tagad',
        backToToday: 'Atpakaļ pie šodienas',
        ok: 'OK',
        clear: 'Skaidrs',
        week: 'Nedēļa',
        month: 'Mēnesis',
        year: 'Gads',
        timeSelect: 'Izvēlieties laiku',
        dateSelect: 'Izvēlieties datumu',
        monthSelect: 'Izvēlieties mēnesi',
        yearSelect: 'Izvēlieties gadu',
        decadeSelect: 'Izvēlieties desmit gadus',
        dateFormat: 'D.M.YYYY',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        previousMonth: 'Iepriekšējais mēnesis (PageUp)',
        nextMonth: 'Nākammēnes (PageDown)',
        previousYear: 'Pagājušais gads (Control + left)',
        nextYear: 'Nākamgad (Control + right)',
        previousDecade: 'Pēdējā desmitgadē',
        nextDecade: 'Nākamā desmitgade',
        previousCentury: 'Pagājušajā gadsimtā',
        nextCentury: 'Nākamajā gadsimtā'
    });
    var _default = exports.default = locale;
    }}),
    3762: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/lv_LV.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 3762);
    var __TURBOPACK__imported__module__4014__ = __turbopack_context__.i(4014);
    // MERGED MODULE: [project]/components/calendar/locale/lv_LV.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/lv_LV.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7403__ = __turbopack_context__.i(7403);
    // MERGED MODULE: [project]/components/time-picker/locale/lv_LV.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Izvēlieties laiku'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Izvēlieties datumu',
            rangePlaceholder: [
                'Sākuma datums',
                'Beigu datums'
            ],
            ...__TURBOPACK__imported__module__7403__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const localeValues = {
        locale: 'lv',
        Pagination: __TURBOPACK__imported__module__4014__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'Aizvērt'
        },
        Table: {
            filterTitle: 'Filtrēšanas izvēlne',
            filterConfirm: 'OK',
            filterReset: 'Atiestatīt',
            selectAll: 'Atlasiet pašreizējo lapu',
            selectInvert: 'Pārvērst pašreizējo lapu'
        },
        Tour: {
            Next: 'Nākamais',
            Previous: 'Iepriekšējais',
            Finish: 'Pabeigt'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Atcelt',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Atcelt'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Meklēt šeit',
            itemUnit: 'vienumu',
            itemsUnit: 'vienumus'
        },
        Upload: {
            uploading: 'Augšupielāde...',
            removeFile: 'Noņemt failu',
            uploadError: 'Augšupielādes kļūda',
            previewFile: 'Priekšskatiet failu',
            downloadFile: 'Lejupielādēt failu'
        },
        Empty: {
            description: 'Nav datu'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    570: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ стр',
        jump_to: 'Оди на',
        jump_to_confirm: 'потврди',
        page: '',
        // Pagination
        prev_page: 'Претходна страница',
        next_page: 'Наредна страница',
        prev_5: 'Претходни 5 страници',
        next_5: 'Наредни 5 страници',
        prev_3: 'Претходни 3 страници',
        next_3: 'Наредни 3 страници',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    7248: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'mk_MK',
        today: 'Денес',
        now: 'Сега',
        backToToday: 'Назад до денес',
        ok: 'ОК',
        clear: 'Избриши',
        week: 'Недела',
        month: 'Месец',
        year: 'Година',
        timeSelect: 'Избери време',
        dateSelect: 'Избери датум',
        monthSelect: 'Избери месец',
        yearSelect: 'Избери година',
        decadeSelect: 'Избери деценија',
        dateFormat: 'D.M.YYYY',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        previousMonth: 'Претходен месец (PageUp)',
        nextMonth: 'Нареден месец (PageDown)',
        previousYear: 'Претходна година (Control + left)',
        nextYear: 'Наредна година (Control + right)',
        previousDecade: 'Претходна деценија',
        nextDecade: 'Наредна деценија',
        previousCentury: 'Претходен век',
        nextCentury: 'Нареден век'
    });
    var _default = exports.default = locale;
    }}),
    9238: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/mk_MK.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 9238);
    var __TURBOPACK__imported__module__570__ = __turbopack_context__.i(570);
    // MERGED MODULE: [project]/components/calendar/locale/mk_MK.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/mk_MK.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7248__ = __turbopack_context__.i(7248);
    // MERGED MODULE: [project]/components/time-picker/locale/mk_MK.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Избери време'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Избери датум',
            rangePlaceholder: [
                'Од датум',
                'До датум'
            ],
            ...__TURBOPACK__imported__module__7248__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const localeValues = {
        locale: 'mk',
        Pagination: __TURBOPACK__imported__module__570__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Ве молиме означете',
            close: 'Затвори'
        },
        Table: {
            filterTitle: 'Мени за филтрирање',
            filterConfirm: 'ОК',
            filterReset: 'Избриши',
            selectAll: 'Одбери страница',
            selectInvert: 'Инвертирај страница'
        },
        Tour: {
            Next: 'Следно',
            Previous: 'Претходно',
            Finish: 'Заврши'
        },
        Modal: {
            okText: 'ОК',
            cancelText: 'Откажи',
            justOkText: 'ОК'
        },
        Popconfirm: {
            okText: 'ОК',
            cancelText: 'Откажи'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Пребарај тука',
            itemUnit: 'предмет',
            itemsUnit: 'предмети'
        },
        Upload: {
            uploading: 'Се прикачува...',
            removeFile: 'Избриши фајл',
            uploadError: 'Грешка при прикачување',
            previewFile: 'Прикажи фајл',
            downloadFile: 'Преземи фајл'
        },
        Empty: {
            description: 'Нема податоци'
        },
        Icon: {
            icon: 'Икона'
        },
        Text: {
            edit: 'Уреди',
            copy: 'Копирај',
            copied: 'Копирано',
            expand: 'Зголеми'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    9913: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ പേജ്',
        jump_to: 'അടുത്തത്',
        jump_to_confirm: 'ഉറപ്പാക്കുക',
        page: '',
        // Pagination
        prev_page: 'മുൻപുള്ള പേജ്',
        next_page: 'അടുത്ത പേജ്',
        prev_5: 'മുൻപുള്ള 5 പേജുകൾ',
        next_5: 'അടുത്ത 5 പേജുകൾ',
        prev_3: 'മുൻപുള്ള 3 പേജുകൾ',
        next_3: 'അടുത്ത 3 പേജുകൾ',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    7214: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ml_IN',
        today: 'ഇന്ന്',
        now: 'ഇപ്പോൾ',
        backToToday: 'ഇന്നത്തെ ദിവസത്തിലേക്ക് തിരിച്ചു പോകുക',
        ok: 'ശരിയാണ്',
        clear: 'നീക്കം ചെയ്യുക',
        week: 'ആഴ്ച',
        month: 'മാസം',
        year: 'വർഷം',
        timeSelect: 'സമയം തിരഞ്ഞെടുക്കുക',
        dateSelect: 'ദിവസം തിരഞ്ഞെടുക്കുക',
        weekSelect: 'വാരം തിരഞ്ഞെടുക്കുക',
        monthSelect: 'മാസം തിരഞ്ഞെടുക്കുക',
        yearSelect: 'വർഷം തിരഞ്ഞെടുക്കുക',
        decadeSelect: 'ദശാബ്ദം തിരഞ്ഞെടുക്കുക',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'കഴിഞ്ഞ മാസം (PageUp)',
        nextMonth: 'അടുത്ത മാസം (PageDown)',
        previousYear: 'കഴിഞ്ഞ വർഷം (Control + left)',
        nextYear: 'അടുത്ത വർഷം (Control + right)',
        previousDecade: 'കഴിഞ്ഞ ദശാബ്ദം',
        nextDecade: 'അടുത്ത ദശാബ്ദം',
        previousCentury: 'കഴിഞ്ഞ നൂറ്റാണ്ട്',
        nextCentury: 'അടുത്ത നൂറ്റാണ്ട്'
    });
    var _default = exports.default = locale;
    }}),
    682: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ml_IN.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 682);
    var __TURBOPACK__imported__module__9913__ = __turbopack_context__.i(9913);
    // MERGED MODULE: [project]/components/calendar/locale/ml_IN.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ml_IN.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__7214__ = __turbopack_context__.i(7214);
    // MERGED MODULE: [project]/components/time-picker/locale/ml_IN.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'സമയം തിരഞ്ഞെടുക്കുക',
        rangePlaceholder: [
            'ആരംഭ സമയം',
            'അവസാന സമയം'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'തിയതി തിരഞ്ഞെടുക്കുക',
            yearPlaceholder: 'വർഷം തിരഞ്ഞെടുക്കുക',
            quarterPlaceholder: 'ത്രൈമാസം തിരഞ്ഞെടുക്കുക',
            monthPlaceholder: 'മാസം തിരഞ്ഞെടുക്കുക',
            weekPlaceholder: 'വാരം തിരഞ്ഞെടുക്കുക',
            rangePlaceholder: [
                'ആരംഭ ദിനം',
                'അവസാന ദിനം'
            ],
            rangeYearPlaceholder: [
                'ആരംഭ വർഷം',
                'അവസാന വർഷം'
            ],
            rangeMonthPlaceholder: [
                'ആരംഭ മാസം',
                'അവസാന മാസം'
            ],
            rangeWeekPlaceholder: [
                'ആരംഭ വാരം',
                'അവസാന വാരം'
            ],
            ...__TURBOPACK__imported__module__7214__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} അസാധുവായ ${type} ആണ്';
    const localeValues = {
        locale: 'ml',
        Pagination: __TURBOPACK__imported__module__9913__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'ദയവായി തിരഞ്ഞെടുക്കുക',
            close: 'മുടക്കുക'
        },
        Table: {
            filterTitle: 'ഫിൽറ്റർ',
            filterConfirm: 'ശരിയാണ്',
            filterReset: 'പുനഃക്രമീകരിക്കുക',
            filterEmptyText: 'ഫിൽറ്ററുകളൊന്നുമില്ല',
            emptyText: 'ഡാറ്റയൊന്നുമില്ല',
            selectAll: 'നിലവിലെ പേജ് തിരഞ്ഞെടുക്കുക',
            selectInvert: 'നിലവിലെ പേജിൽ ഇല്ലാത്തത് തിരഞ്ഞെടുക്കുക',
            selectNone: 'എല്ലാ ഡാറ്റയും നീക്കം ചെയ്യുക',
            selectionAll: 'എല്ലാ ഡാറ്റയും തിരഞ്ഞെടുക്കുക',
            sortTitle: 'ക്രമമാക്കുക',
            expand: 'വരി വികസിപ്പിക്കുക',
            collapse: 'വരി ചുരുക്കുക',
            triggerDesc: 'അവരോഹണ ക്രമത്തിനായി ക്ലിക്ക് ചെയ്യുക',
            triggerAsc: 'ആരോഹണ ക്രമത്തിനായി ക്ലിക്ക് ചെയ്യുക',
            cancelSort: 'ക്രമീകരണം ഒഴിവാക്കുന്നതിനായി ക്ലിക്ക് ചെയ്യുക'
        },
        Tour: {
            Next: 'അടുത്തത്',
            Previous: 'മുമ്പത്തെ',
            Finish: 'അവസാനിക്കുക'
        },
        Modal: {
            okText: 'ശരിയാണ്',
            cancelText: 'റദ്ദാക്കുക',
            justOkText: 'ശരിയാണ്'
        },
        Popconfirm: {
            okText: 'ശരിയാണ്',
            cancelText: 'റദ്ദാക്കുക'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'ഇവിടെ തിരയുക',
            itemUnit: 'ഇനം',
            itemsUnit: 'ഇനങ്ങൾ',
            remove: 'നീക്കം ചെയ്യുക',
            selectCurrent: 'നിലവിലെ പേജ് തിരഞ്ഞെടുക്കുക',
            removeCurrent: 'നിലവിലെ പേജ് നീക്കം ചെയ്യുക',
            selectAll: 'എല്ലാ ഡാറ്റയും തിരഞ്ഞെടുക്കുക',
            removeAll: 'എല്ലാ ഡാറ്റയും നീക്കം ചെയ്യുക',
            selectInvert: 'നിലവിലെ പേജിൽ ഇല്ലാത്തത് തിരഞ്ഞെടുക്കുക'
        },
        Upload: {
            uploading: 'അപ്‌ലോഡ് ചെയ്തു കൊണ്ടിരിക്കുന്നു...',
            removeFile: 'ഫയൽ നീക്കം ചെയ്യുക',
            uploadError: 'അപ്‌ലോഡിൽ പിശക് സംഭവിച്ചിരിക്കുന്നു',
            previewFile: 'ഫയൽ പ്രിവ്യൂ ചെയ്യുക',
            downloadFile: 'ഫയൽ ഡൗൺലോഡ് ചെയ്യുക'
        },
        Empty: {
            description: 'ഡാറ്റയൊന്നുമില്ല'
        },
        Icon: {
            icon: 'ഐക്കൺ'
        },
        Text: {
            edit: 'തിരുത്തുക',
            copy: 'കോപ്പി ചെയ്യുക',
            copied: 'കോപ്പി ചെയ്തു',
            expand: 'വികസിപ്പിക്കുക'
        },
        Form: {
            optional: '(optional)',
            defaultValidateMessages: {
                default: '${label} ഫീൽഡിൽ വാലിഡേഷൻ പിശകുണ്ട്',
                required: 'ദയവായി ${label} രേഖപ്പെടുത്തുക',
                enum: '${label} നിർബന്ധമായും [${enum}]-ൽ നിന്നുള്ളതായിരിക്കണം',
                whitespace: '${label} ശൂന്യമായി വെക്കാനാകില്ല',
                date: {
                    format: '${label} തീയതി രൂപരേഖ അസാധുവാണ്',
                    parse: '${label} ഒരു തീയതിയാക്കി മാറ്റാൻ സാധിക്കില്ല',
                    invalid: '${label} ഒരു അസാധുവായ തീയതി ആണ്'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} നിർബന്ധമായും ${len} അക്ഷരങ്ങൾ ഉണ്ടായിരിക്കണം',
                    min: '${label} നിർബന്ധമായും ${min} അക്ഷരങ്ങൾ എങ്കിലും ഉണ്ടായിരിക്കണം',
                    max: '${label} നിർബന്ധമായും ${max} അക്ഷരങ്ങളിൽ കൂടാൻ പാടില്ല',
                    range: '${label} നിർബന്ധമായും ${min}-നും ${max}-നും ഇടയിൽ അക്ഷരങ്ങൾ ഉള്ളതായിരിക്കണം'
                },
                number: {
                    len: '${label} നിർബന്ധമായും ${len}-നു തുല്യമായിരിക്കണം',
                    min: '${label} നിർബന്ധമായും ${min}-ൽ കുറയാൻ പാടില്ല',
                    max: '${label} നിർബന്ധമായും ${max}-ൽ കൂടാൻ പാടില്ല',
                    range: '${label} നിർബന്ധമായും ${min}-നും ${max}-നും ഇടയിൽ ആയിരിക്കണം'
                },
                array: {
                    len: 'നിർബന്ധമായും ${len} ${label} ഉണ്ടായിരിക്കണം',
                    min: 'കുറഞ്ഞപക്ഷം ${min} ${label} എങ്കിലും ഉണ്ടായിരിക്കണം',
                    max: 'അങ്ങേയറ്റം ${max} ${label} ആയിരിക്കണം',
                    range: '${label}-ന്റെ എണ്ണം നിർബന്ധമായും ${min}-നും ${max}-നും ഇടയിൽ ആയിരിക്കണം'
                },
                pattern: {
                    mismatch: '${label} ${pattern} മാതൃകയുമായി യോജിക്കുന്നില്ല'
                }
            }
        },
        Image: {
            preview: 'പ്രിവ്യൂ'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    5554: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ хуудас',
        jump_to: 'Шилжих',
        jump_to_confirm: 'сонгох',
        page: '',
        // Pagination
        prev_page: 'Өмнөх хуудас',
        next_page: 'Дараагийн хуудас',
        prev_5: 'Дараагийн 5 хуудас',
        next_5: 'Дараагийн 5 хуудас',
        prev_3: 'Дараагийн 3 хуудас',
        next_3: 'Дараагийн 3 хуудас',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    9930: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'mn_MN',
        today: 'Өнөөдөр',
        now: 'Одоо',
        backToToday: 'Өнөөдөрлүү буцах',
        ok: 'OK',
        clear: 'Цэвэрлэх',
        week: 'Долоо хоног',
        month: 'Сар',
        year: 'Жил',
        timeSelect: 'Цаг сонгох',
        dateSelect: 'Огноо сонгох',
        weekSelect: '7 хоног сонгох',
        monthSelect: 'Сар сонгох',
        yearSelect: 'Жил сонгох',
        decadeSelect: 'Арван сонгох',
        dateFormat: 'YYYY/MM/DD',
        dayFormat: 'DD',
        dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
        previousMonth: 'Өмнөх сар (PageUp)',
        nextMonth: 'Дараа сар (PageDown)',
        previousYear: 'Өмнөх жил (Control + left)',
        nextYear: 'Дараа жил (Control + right)',
        previousDecade: 'Өмнөх арван',
        nextDecade: 'Дараа арван',
        previousCentury: 'Өмнөх зуун',
        nextCentury: 'Дараа зуун'
    });
    var _default = exports.default = locale;
    }}),
    8654: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/mn_MN.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 8654);
    var __TURBOPACK__imported__module__5554__ = __turbopack_context__.i(5554);
    // MERGED MODULE: [project]/components/calendar/locale/mn_MN.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/mn_MN.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__9930__ = __turbopack_context__.i(9930);
    // MERGED MODULE: [project]/components/time-picker/locale/mn_MN.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Цаг сонгох'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Огноо сонгох',
            rangePlaceholder: [
                'Эхлэх огноо',
                'Дуусах огноо'
            ],
            ...__TURBOPACK__imported__module__9930__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} нь хүчинтэй ${type} биш';
    const localeValues = {
        locale: 'mn-mn',
        Pagination: __TURBOPACK__imported__module__5554__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Сонгоно уу',
            close: 'Хаах'
        },
        Table: {
            filterTitle: 'Хайх цэс',
            filterConfirm: 'Тийм',
            filterReset: 'Цэвэрлэх',
            filterEmptyText: 'Шүүлтүүр байхгүй',
            filterCheckAll: 'Бүх зүйлийг сонгоно уу',
            filterSearchPlaceholder: 'Шүүлтүүрээс хайх',
            emptyText: 'Өгөгдөл алга',
            selectAll: 'Бүгдийг сонгох',
            selectInvert: 'Бусдыг сонгох',
            selectNone: 'Бүх өгөгдлийг арилгах',
            selectionAll: 'Бүх өгөгдлийг сонгоно уу',
            sortTitle: 'Эрэмбэлэх',
            expand: 'Мөрийг өргөжүүлэх',
            collapse: 'Мөрийг буулгах',
            triggerDesc: 'Буурах байдлаар эрэмбэлэхийн тулд товшино уу',
            triggerAsc: 'Өсөхөөр эрэмбэлэхийн тулд товшино уу',
            cancelSort: 'Эрэмбэлэхийг цуцлахын тулд товшино уу'
        },
        Tour: {
            Next: 'Дараах',
            Previous: 'Урд',
            Finish: 'Төгсгөх'
        },
        Modal: {
            okText: 'Тийм',
            cancelText: 'Цуцлах',
            justOkText: 'Тийм'
        },
        Popconfirm: {
            okText: 'Тийм',
            cancelText: 'Цуцлах'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Хайх',
            itemUnit: 'Зүйл',
            itemsUnit: 'Зүйлүүд',
            remove: 'Устгах',
            selectCurrent: 'Одоогийн хуудсыг сонгоно уу',
            removeCurrent: 'Одоогийн хуудсыг устгана уу',
            selectAll: 'Бүх өгөгдлийг сонгоно уу',
            removeAll: 'Бүх өгөгдлийг устгана уу',
            selectInvert: 'Одоогийн хуудсыг эргүүлэх'
        },
        Upload: {
            uploading: 'Хуулж байна...',
            removeFile: 'Файл устгах',
            uploadError: 'Хуулахад алдаа гарлаа',
            previewFile: 'Файлыг түргэн үзэх',
            downloadFile: 'Файлыг татах'
        },
        Empty: {
            description: 'Мэдээлэл байхгүй байна'
        },
        Icon: {
            icon: 'дүрс'
        },
        Text: {
            edit: 'Засварлах',
            copy: 'Хуулбарлах',
            copied: 'Хуулсан',
            expand: 'Өргөтгөх'
        },
        Form: {
            optional: '(сонголттой)',
            defaultValidateMessages: {
                default: '${label}-ийн талбарын баталгаажуулалтын алдаа',
                required: '${label} оруулна уу',
                enum: '${label} нь [${enum}]-ийн нэг байх ёстой',
                whitespace: '${label} нь хоосон тэмдэгт байж болохгүй',
                date: {
                    format: '${label} огнооны формат буруу байна',
                    parse: '${label}-г огноо руу хөрвүүлэх боломжгүй',
                    invalid: '${label} нь хүчингүй огноо юм'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ${len} тэмдэгттэй байх ёстой',
                    min: '${label} хамгийн багадаа ${min} тэмдэгттэй байх ёстой',
                    max: '${label} нь ${max} хүртэлх тэмдэгттэй байх ёстой',
                    range: '${label} ${min}-${max} тэмдэгтийн хооронд байх ёстой'
                },
                number: {
                    len: '${label} нь ${len}-тэй тэнцүү байх ёстой',
                    min: '${label} хамгийн багадаа ${min} байх ёстой',
                    max: '${label} дээд тал нь ${max} байх ёстой',
                    range: '${label} ${min}-${max} хооронд байх ёстой'
                },
                array: {
                    len: '${len} ${label} байх ёстой',
                    min: 'Дор хаяж ${мин} ${label}',
                    max: 'Хамгийн ихдээ ${max} ${label}',
                    range: '${label}-н хэмжээ ${min}-${max} хооронд байх ёстой'
                },
                pattern: {
                    mismatch: '${label} нь ${pattern} загвартай тохирохгүй байна'
                }
            }
        },
        Image: {
            preview: 'Урьдчилан үзэх'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    7161: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ halaman',
        jump_to: 'Lompat ke',
        jump_to_confirm: 'Sahkan',
        page: '',
        // Pagination
        prev_page: 'Halaman sebelumnya',
        next_page: 'Halam seterusnya',
        prev_5: '5 halaman sebelum',
        next_5: '5 halaman seterusnya',
        prev_3: '3 halaman sebelumnya',
        next_3: '3 halaman seterusnya',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    1381: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ms_MY',
        today: 'Hari ini',
        now: 'Sekarang',
        backToToday: 'Kembali ke hari ini',
        ok: 'OK',
        timeSelect: 'Pilih masa',
        dateSelect: 'Pilih tarikh',
        weekSelect: 'Pilih minggu',
        clear: 'Padam',
        week: 'Minggu',
        month: 'Bulan',
        year: 'Tahun',
        previousMonth: 'Bulan lepas',
        nextMonth: 'Bulan depan',
        monthSelect: 'Pilih bulan',
        yearSelect: 'Pilih tahun',
        decadeSelect: 'Pilih dekad',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousYear: 'Tahun lepas (Ctrl+left)',
        nextYear: 'Tahun depan (Ctrl+right)',
        previousDecade: 'Dekad lepas',
        nextDecade: 'Dekad depan',
        previousCentury: 'Abad lepas',
        nextCentury: 'Abad depan',
        monthBeforeYear: false
    });
    var _default = exports.default = locale;
    }}),
    4603: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ms_MY.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4603);
    var __TURBOPACK__imported__module__7161__ = __turbopack_context__.i(7161);
    // MERGED MODULE: [project]/components/calendar/locale/ms_MY.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ms_MY.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__1381__ = __turbopack_context__.i(1381);
    // MERGED MODULE: [project]/components/time-picker/locale/ms_MY.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Sila pilih masa'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Pilih tarikh',
            rangePlaceholder: [
                'Tarikh mula',
                'Tarikh akhir'
            ],
            ...__TURBOPACK__imported__module__1381__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} bukan ${type} jenis yang sah';
    const localeValues = {
        locale: 'ms-my',
        Pagination: __TURBOPACK__imported__module__7161__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Sila pilih',
            close: 'Tutup'
        },
        Table: {
            filterTitle: 'Cari dengan tajuk',
            filterConfirm: 'OK',
            filterReset: 'Menetapkan semula',
            emptyText: 'Tiada data',
            selectAll: 'Pilih Semua',
            selectInvert: 'Terbalikkan',
            filterEmptyText: 'Tiada Saringan',
            filterCheckAll: 'Semak Semua',
            filterSearchPlaceholder: 'Cari',
            selectNone: 'Kosong Semua',
            selectionAll: 'Semua Data',
            sortTitle: 'Urutkan',
            expand: 'Buka',
            collapse: 'Tutup',
            triggerDesc: 'Turun',
            triggerAsc: 'Naik',
            cancelSort: 'Batal Urut'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Batal',
            justOkText: 'OK'
        },
        Tour: {
            Next: 'Seterusnya',
            Previous: 'Sebelumnya',
            Finish: 'Tamat'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Batal'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            notFoundContent: 'Tidak dijumpai',
            searchPlaceholder: 'Carian di sini',
            itemUnit: 'item',
            itemsUnit: 'item',
            remove: 'Buang',
            selectCurrent: 'Pilih Halaman Ini',
            removeCurrent: 'Buang Dari Halaman Ini',
            selectAll: 'Pilih Semua',
            removeAll: 'Buang Semua',
            selectInvert: 'Balik Pilihan'
        },
        Upload: {
            uploading: 'Sedang memuat naik...',
            removeFile: 'Buang fail',
            uploadError: 'Masalah muat naik',
            previewFile: 'Tengok fail',
            downloadFile: 'Muat turun fail'
        },
        Empty: {
            description: 'Tiada data'
        },
        Icon: {
            icon: 'ikon'
        },
        Text: {
            edit: 'Sunting',
            copy: 'Salin',
            copied: 'Berjaya menyalin',
            expand: 'Kembang'
        },
        Form: {
            optional: '(Opsional)',
            defaultValidateMessages: {
                default: 'Ralat pengesahan untuk ${label}',
                required: 'Isi ${label}',
                enum: '${label} mesti salah satu dari [${enum}]',
                whitespace: '${label} tidak boleh kosong',
                date: {
                    format: 'Format tarikh ${label} salah',
                    parse: '${label} tidak boleh jadi tarikh',
                    invalid: '${label} adalah tarikh tidak sah'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} mesti ${len} aksara',
                    min: 'Min ${min} aksara',
                    max: 'Max ${max} aksara',
                    range: '${label} antara ${min}-${max} aksara'
                },
                number: {
                    len: '${label} sama dengan ${len}',
                    min: 'Min ${min}',
                    max: 'Max ${max}',
                    range: '${label} antara ${min}-${max}'
                },
                array: {
                    len: '${len} ${label}',
                    min: 'Min ${min} ${label}',
                    max: 'Max ${max} ${label}',
                    range: '${label} antara ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} tidak sesuai ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Pratonton'
        },
        QRCode: {
            expired: 'Kod QR luput',
            refresh: 'Segar Semula'
        },
        ColorPicker: {
            presetEmpty: 'Tiada',
            transparent: 'Tidak tembus cahaya',
            singleColor: 'Warna tunggal',
            gradientColor: 'Warna gradien'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    4499: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ စာမျက်နှာ',
        jump_to: 'သွားရန်',
        jump_to_confirm: 'သေချာပြီ',
        page: '',
        // Pagination
        prev_page: 'ယခင်စာမျက်နှာ',
        next_page: 'နောက်စာမျက်နှာ',
        prev_5: 'ယခင် ၅ခုမြောက်',
        next_5: 'နောက် ၅ခုမြောက်',
        prev_3: 'ယခင် ၃ခုမြောက်',
        next_3: 'နောက် ၃ခုမြောက်',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    3245: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'my_MM',
        today: 'ယနေ့',
        now: 'ယခု',
        backToToday: 'ယနေ့မတိုင်ခင်သို့',
        ok: 'OK',
        clear: 'ရှင်းမည်',
        week: 'အပတ်',
        month: 'လ',
        year: 'နှစ်',
        timeSelect: 'အချိန်ကိုရွေး',
        dateSelect: 'နေ့ကိုရွေး',
        weekSelect: 'သီတင်းပတ်ကိုရွေး',
        monthSelect: 'လကိုရွေး',
        yearSelect: 'နှစ်ကိုရွေး',
        decadeSelect: 'ဆယ်စုနှစ်ကိုရွေး',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'ယခင်လ (PageUp)',
        nextMonth: 'နောက်လ (PageDown)',
        previousYear: 'ယခင်နှစ် (Control + left)',
        nextYear: 'နောက်နှစ် (Control + right)',
        previousDecade: 'ယခင်ဆယ်စုနှစ်',
        nextDecade: 'နောက်ဆယ်စုနှစ်',
        previousCentury: 'ယခင်ရာစုနှစ်',
        nextCentury: 'နောက်ရာစုနှစ်'
    });
    var _default = exports.default = locale;
    }}),
    972: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/my_MM.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 972);
    var __TURBOPACK__imported__module__4499__ = __turbopack_context__.i(4499);
    // MERGED MODULE: [project]/components/calendar/locale/my_MM.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/my_MM.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__3245__ = __turbopack_context__.i(3245);
    // MERGED MODULE: [project]/components/time-picker/locale/my_MM.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'အချိန်ရွေးပါ။',
        rangePlaceholder: [
            'စတင်ချိန်',
            'ကုန်ဆုံးချိန်'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'ရက်စွဲကို ရွေးပါ။',
            yearPlaceholder: 'နှစ်ကို ရွေးပါ။',
            quarterPlaceholder: 'လေးပုံတစ်ပုံကို ရွေးပါ။',
            monthPlaceholder: 'လကိုရွေးပါ။',
            weekPlaceholder: 'ရက်သတ္တပတ်ကို ရွေးပါ။',
            rangePlaceholder: [
                'စတင်သည့်ရက်စွဲ',
                'ကုန်ဆုံးရက်'
            ],
            rangeYearPlaceholder: [
                'စတင်သည့်နှစ်',
                'နှစ်ကုန်'
            ],
            rangeQuarterPlaceholder: [
                'လေးပုံတစ်ပုံကို စတင်ပါ။',
                'အဆုံးသုံးလ'
            ],
            rangeMonthPlaceholder: [
                'စတင်လ',
                'လကုန်'
            ],
            rangeWeekPlaceholder: [
                'ရက်သတ္တပတ်စတင်ပါ။',
                'သီတင်းပတ်ကုန်'
            ],
            ...__TURBOPACK__imported__module__3245__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} သည် တရားဝင် ${type} မဟုတ်ပါ';
    const localeValues = {
        locale: 'my',
        Pagination: __TURBOPACK__imported__module__4499__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        // locales for all components
        global: {
            placeholder: 'ကျေးဇူးပြု၍ ရွေးချယ်ပါ။',
            close: 'ပိတ်ပါ'
        },
        Table: {
            filterTitle: 'စစ်ထုတ်ခြင်း မီနူ',
            filterConfirm: 'အိုကေ',
            filterReset: 'ပြန်လည်သတ်မှတ်ပါ။',
            filterEmptyText: 'စစ်ထုတ်မှုများမရှိပါ။',
            filterCheckAll: 'ပစ္စည်းအားလုံးကို ရွေးပါ။',
            filterSearchPlaceholder: 'စစ်ထုတ်မှုများတွင် ရှာဖွေပါ။',
            selectAll: 'လက်ရှိစာမျက်နှာကို ရွေးပါ။',
            selectInvert: 'လက်ရှိစာမျက်နှာကို ပြောင်းလိုက်ပါ။',
            selectNone: 'ဒေတာအားလုံးကို ရှင်းလင်းပါ။',
            selectionAll: 'ဒေတာအားလုံးကို ရွေးပါ။',
            sortTitle: 'မျိုးတူစု',
            expand: 'အတန်းချဲ့ပါ။',
            collapse: 'အတန်းကို ခေါက်သိမ်းပါ။',
            cancelSort: 'အမျိုးအစားခွဲခြင်းကို ပယ်ဖျက်ရန် နှိပ်ပါ။'
        },
        Tour: {
            Next: 'နောက်တစ်ခု',
            Previous: 'အရင်',
            Finish: 'ပြီးအောင်'
        },
        Modal: {
            okText: 'အိုကေ',
            cancelText: 'မလုပ်တော့',
            justOkText: 'အိုကေ'
        },
        Popconfirm: {
            cancelText: 'မလုပ်တော့',
            okText: 'အိုကေ'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'ဒီမှာရှာပါ။',
            itemUnit: 'ပစ္စည်း',
            itemsUnit: 'ပစ္စည်းများ',
            remove: 'ဖယ်ရှားပါ။',
            selectCurrent: 'လက်ရှိစာမျက်နှာကို ရွေးပါ။',
            removeCurrent: 'လက်ရှိစာမျက်နှာကို ဖယ်ရှားပါ။',
            selectAll: 'ဒေတာအားလုံးကို ရွေးပါ။',
            removeAll: 'ဒေတာအားလုံးကို ဖယ်ရှားပါ။',
            selectInvert: 'လက်ရှိစာမျက်နှာကို ပြောင်းလိုက်ပါ။'
        },
        Upload: {
            uploading: 'တင်ခြင်း။...',
            removeFile: 'ဖိုင်ကို ဖယ်ရှားပါ။',
            uploadError: 'အပ်လုဒ်အမှား',
            previewFile: 'ဖိုင်ကို အစမ်းကြည့်ပါ။',
            downloadFile: 'ဖိုင်ကိုဒေါင်းလုဒ်လုပ်ပါ။'
        },
        Empty: {
            description: 'ဒေတာမရှိပါ။'
        },
        Icon: {
            icon: 'အိုင်ကွန်'
        },
        Text: {
            edit: 'တည်းဖြတ်ပါ။',
            copy: 'ကော်ပီ',
            copied: 'ကူးယူသည်။',
            expand: 'ချဲ့ထွင်ပါ။'
        },
        Form: {
            optional: '(ချန်လှပ်ထားနိုင်သည်)',
            defaultValidateMessages: {
                default: '${label} အတွက် အကွက်အတည်ပြုခြင်း အမှား',
                required: '${label} ကို ထည့်ပါ',
                enum: '${label} သည် [${enum}] မှ တစ်ခု ဖြစ်ရမည်',
                whitespace: '${label} သည် အလွတ်စာလုံးမဖြစ်ရပါ။',
                date: {
                    format: '${label} ရက်စွဲဖော်မတ်သည် မမှန်ကန်ပါ။',
                    parse: '${label} ကို ရက်စွဲအဖြစ် ပြောင်းလဲ၍မရပါ။',
                    invalid: '${label} သည် မမှန်ကန်သော ရက်စွဲတစ်ခုဖြစ်သည်။'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} သည် ${len} စာလုံးဖြစ်ရမည်။',
                    min: '${label} သည် အနည်းဆုံး စာလုံး ${min} ရှိရမည်။',
                    max: '${label} သည် ${max} စာလုံးအထိ ရှိရပါမည်။',
                    range: '${label} သည် ${min}-${max} စာလုံးကြားရှိရမည်။'
                },
                number: {
                    len: '${label} သည် ${len} နှင့် ညီရမည်',
                    min: '${label} သည် အနည်းဆုံး ${min} ဖြစ်ရမည်',
                    max: '${label} သည် အများဆုံး ${max} ဖြစ်ရမည်',
                    range: '${label} သည် ${min}-${max} ကြားရှိရမည်'
                },
                array: {
                    len: '${len} ${label} ဖြစ်ရမည်',
                    min: 'အနည်းဆုံး ${min} ${label}',
                    max: 'အများဆုံး ${max} ${label}',
                    range: '${label} ၏ ပမာဏသည် ${min}-${max} အကြား ဖြစ်ရမည်'
                },
                pattern: {
                    mismatch: '${label} သည် ပုံစံ ${pattern} နှင့် မကိုက်ညီပါ'
                }
            }
        },
        Image: {
            preview: 'စမ်းကြည့်ပါ။'
        },
        QRCode: {
            expired: 'QR ကုဒ် သက်တမ်းကုန်သွားပါပြီ။',
            refresh: 'ပြန်လည်စတင်ပါ။'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6827: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ side',
        jump_to: 'Gå til side',
        page: 'Side',
        // Pagination
        prev_page: 'Forrige side',
        next_page: 'Neste side',
        prev_5: '5 forrige',
        next_5: '5 neste',
        prev_3: '3 forrige',
        next_3: '3 neste',
        page_size: 'sidestørrelse'
    };
    var _default = exports.default = locale;
    }}),
    4976: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'nb_NO',
        today: 'I dag',
        now: 'Nå',
        backToToday: 'Gå til i dag',
        ok: 'OK',
        clear: 'Annuller',
        week: 'Uke',
        month: 'Måned',
        year: 'År',
        timeSelect: 'Velg tidspunkt',
        dateSelect: 'Velg dato',
        weekSelect: 'Velg uke',
        monthSelect: 'Velg måned',
        yearSelect: 'Velg år',
        decadeSelect: 'Velg tiår',
        dateFormat: 'DD.MM.YYYY',
        dayFormat: 'DD',
        dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
        previousMonth: 'Forrige måned (PageUp)',
        nextMonth: 'Neste måned (PageDown)',
        previousYear: 'Forrige år (Control + venstre)',
        nextYear: 'Neste år (Control + høyre)',
        previousDecade: 'Forrige tiår',
        nextDecade: 'Neste tiår',
        previousCentury: 'Forrige århundre',
        nextCentury: 'Neste århundre'
    });
    var _default = exports.default = locale;
    }}),
    904: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/nb_NO.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 904);
    var __TURBOPACK__imported__module__6827__ = __turbopack_context__.i(6827);
    // MERGED MODULE: [project]/components/calendar/locale/nb_NO.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/nb_NO.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__4976__ = __turbopack_context__.i(4976);
    // MERGED MODULE: [project]/components/time-picker/locale/nb_NO.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Velg tid',
        rangePlaceholder: [
            'Starttid',
            'Sluttid'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Velg dato',
            yearPlaceholder: 'Velg år',
            quarterPlaceholder: 'Velg kvartal',
            monthPlaceholder: 'Velg måned',
            weekPlaceholder: 'Velg uke',
            rangePlaceholder: [
                'Startdato',
                'Sluttdato'
            ],
            rangeYearPlaceholder: [
                'Startår',
                'Sluttår'
            ],
            rangeMonthPlaceholder: [
                'Startmåned',
                'Sluttmåned'
            ],
            rangeWeekPlaceholder: [
                'Start uke',
                'Sluttuke'
            ],
            ...__TURBOPACK__imported__module__4976__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} er ikke et gyldig ${type}';
    const localeValues = {
        locale: 'nb',
        Pagination: __TURBOPACK__imported__module__6827__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Vennligst velg',
            close: 'Lukk'
        },
        Table: {
            filterTitle: 'Filtermeny',
            filterConfirm: 'OK',
            filterReset: 'Nullstill',
            filterEmptyText: 'Ingen filtre',
            selectAll: 'Velg alle',
            selectInvert: 'Inverter gjeldende side',
            selectionAll: 'Velg all data',
            sortTitle: 'Sorter',
            expand: 'Utvid rad',
            collapse: 'Skjul rad',
            triggerDesc: 'Sorter data i synkende rekkefølge',
            triggerAsc: 'Sorterer data i stigende rekkefølge',
            cancelSort: 'Klikk for å avbryte sorteringen'
        },
        Tour: {
            Next: 'Neste',
            Previous: 'Forrige',
            Finish: 'Avslutt'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Avbryt',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Avbryt'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Søk her',
            itemUnit: 'element',
            itemsUnit: 'elementer',
            remove: 'Fjern',
            selectCurrent: 'Velg gjeldende side',
            removeCurrent: 'Fjern gjeldende side',
            selectAll: 'Velg all data',
            removeAll: 'Fjern all data',
            selectInvert: 'Inverter gjeldende side'
        },
        Upload: {
            uploading: 'Laster opp...',
            removeFile: 'Fjern fil',
            uploadError: 'Feil ved opplastning',
            previewFile: 'Forhåndsvisning',
            downloadFile: 'Last ned fil'
        },
        Empty: {
            description: 'Ingen data'
        },
        Icon: {
            icon: 'ikon'
        },
        Text: {
            edit: 'Rediger',
            copy: 'Kopier',
            copied: 'Kopiert',
            expand: 'Utvid'
        },
        Form: {
            defaultValidateMessages: {
                default: 'Feltvalideringsfeil ${label}',
                required: 'Vennligst skriv inn ${label}',
                enum: '${label} må være en av [${enum}]',
                whitespace: '${label} kan ikke være et blankt tegn',
                date: {
                    format: '${label} datoformatet er ugyldig',
                    parse: '${label} kan ikke konverteres til en dato',
                    invalid: '${label} er en ugyldig dato'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} må være ${len} tegn',
                    min: '${label} må minst ha ${min} tegn',
                    max: '${label} opp til ${max} tegn',
                    range: '${label} må være mellom ${min}-${max} tegn'
                },
                number: {
                    len: '${label} må være lik ${len}',
                    min: '${label} minimumsverdien er ${min}',
                    max: '${label} maksimumsverdien er ${max}',
                    range: '${label} må være mellom ${min}-${max}'
                },
                array: {
                    len: 'Må være ${len} ${label}',
                    min: 'Må være minst ${min} ${label}',
                    max: 'På det meste ${max} ${label}',
                    range: 'Totalt av ${label} må være mellom ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} stemmer ikke overens med mønsteret ${pattern}'
                }
            }
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    2488: ((__turbopack_context__) => {
    "use strict";
    
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    });
    var __TURBOPACK__imported__module__5622__ = __turbopack_context__.i(5622);
    var __TURBOPACK__imported__module__4330__ = __turbopack_context__.i(4330);
    var __TURBOPACK__imported__module__148__ = __turbopack_context__.i(148);
    var __TURBOPACK__imported__module__9625__ = __turbopack_context__.i(9625);
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} यो एक मान्य ${type} होइन';
    const localeValues = {
        locale: 'ne-np',
        Pagination: __TURBOPACK__imported__module__5622__["default"],
        DatePicker: __TURBOPACK__imported__module__148__["default"],
        TimePicker: __TURBOPACK__imported__module__9625__["default"],
        Calendar: __TURBOPACK__imported__module__4330__["default"],
        global: {
            placeholder: 'कृपया छान्नुहोस्',
            close: 'बन्द'
        },
        Table: {
            filterTitle: 'फिल्टर मेनु',
            filterConfirm: 'हो',
            filterReset: 'रीसेट',
            filterEmptyText: 'कुनै फिल्टर छैन',
            filterCheckAll: 'सबै छान्नु',
            filterSearchPlaceholder: 'फिल्टर भित्र खोज्नुहोस्',
            emptyText: 'डाटा छैन',
            selectAll: 'सबै छान्नुुहोस्',
            selectInvert: 'छनौट उल्टाउनुहोस',
            selectNone: 'सबै खाली गर्नुहोस्',
            selectionAll: 'सबै छान्नु',
            sortTitle: 'क्रमबद्ध',
            expand: 'पङ्क्ति विस्तार गर्नुहोस्',
            collapse: 'पङ्क्ति बन्द गर्नुहोस्',
            triggerDesc: 'तल क्रमबद्ध गर्न क्लिक गर्नुहोस्',
            triggerAsc: 'बढ्दो अर्डर गर्न क्लिक गर्नुहोस्',
            cancelSort: 'क्रमबद्ध नगर्नुहोस्'
        },
        Modal: {
            okText: 'हो',
            cancelText: 'होईन',
            justOkText: 'हो'
        },
        Popconfirm: {
            okText: 'हो',
            cancelText: 'होईन'
        },
        Tour: {
            Next: 'अर्को पाइला',
            Previous: 'अघिल्लो',
            Finish: 'भ्रमण अन्त्य गर्नुहोस्'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'यहाँ खोज्नुहोस्',
            itemUnit: 'वस्तु',
            itemsUnit: 'वस्तुहरू',
            remove: 'मेटाउन',
            selectCurrent: 'सबै हालको पृष्ठ चयन गर्नुहोस्',
            removeCurrent: 'हालको पृष्ठ मेटाउनुहोस्',
            selectAll: 'सबै छान्नु',
            deselectAll: 'सबै अचयन गर्नुहोस्',
            removeAll: 'सबै मेटाउनुहोस्',
            selectInvert: 'हालको पृष्ठ उल्टाउनुहोस्'
        },
        Upload: {
            uploading: 'अपलोड गर्दै...',
            removeFile: 'फाइल हटाउनुहोस्',
            uploadError: 'अप्लोडमा समस्या भयो',
            previewFile: 'फाइल पूर्वावलोकन गर्नुहोस्',
            downloadFile: 'डाउनलोड फाइल'
        },
        Empty: {
            description: 'डाटा छैन'
        },
        Icon: {
            icon: 'आइकन'
        },
        Text: {
            edit: 'सम्पादन गर्नुहोस्',
            copy: 'कापी',
            copied: 'सफलतापूर्वक प्रतिलिपि गरियो',
            expand: 'विस्तार गर्नुहोस्',
            collapse: 'बन्द'
        },
        Form: {
            optional: '（ऐच्छिक）',
            defaultValidateMessages: {
                default: 'क्षेत्र प्रमाणीकरण त्रुटि${label}',
                required: 'कृपया प्रविष्ट गर्नुहोस्${label}',
                enum: '${label}ती मध्ये एक हुनुपर्छ[${enum}]',
                whitespace: '${label}शून्य वर्ण हुन सक्दैन',
                date: {
                    format: '${label}अमान्य मिति ढाँचा',
                    parse: '${label}मितिमा रूपान्तरण गर्न सकिँदैन',
                    invalid: '${label}अवैध मिति हो'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label}${len}वर्ण हुनुपर्छ',
                    min: '${label}कम्तिमा${min}पात्रहरू',
                    max: '${label}धेरैजसो${max}पात्रहरू',
                    range: '${label}मा हुनुपर्छ${min}-${max}वर्णहरू बीच'
                },
                number: {
                    len: '${label}बराबर हुनुपर्छ${len}',
                    min: '${label}न्यूनतम मूल्य छ${min}',
                    max: '${label}अधिकतम मान हो${max}',
                    range: '${label}मा हुनुपर्छ${min}-${max}बीचमा'
                },
                array: {
                    len: 'हुनै पर्छ${len}व्यक्तिगत${label}',
                    min: 'कम्तिमा${min}व्यक्तिगत${label}',
                    max: 'धेरैजसो${max}व्यक्तिगत${label}',
                    range: '${label}मात्रा भित्र हुनुपर्छ${min}-${max}बीचमा'
                },
                pattern: {
                    mismatch: '${label}ढाँचासँग मेल खाँदैन${pattern}'
                }
            }
        },
        Image: {
            preview: 'पूर्वावलोकन'
        },
        QRCode: {
            expired: 'QR कोडको म्याद सकियो',
            refresh: 'रिफ्रेस गर्न क्लिक गर्नुहोस्',
            scanned: 'स्क्यान गरियो'
        },
        ColorPicker: {
            presetEmpty: 'अहिलेसम्म कुनै पनि छैन',
            transparent: 'पारदर्शी',
            singleColor: 'एक रंग',
            gradientColor: 'ग्रेडिएण्ट'
        }
    };
    const __TURBOPACK__default__export__ = localeValues;
    }),
    8383: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ pagina',
        jump_to: 'Ga naar',
        jump_to_confirm: 'bevestigen',
        page: '',
        // Pagination
        prev_page: 'Vorige pagina',
        next_page: 'Volgende pagina',
        prev_5: "Vorige 5 pagina's",
        next_5: "Volgende 5 pagina's",
        prev_3: "Vorige 3 pagina's",
        next_3: "Volgende 3 pagina's",
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    6039: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'nl_BE',
        today: 'Vandaag',
        now: 'Nu',
        backToToday: 'Terug naar vandaag',
        ok: 'OK',
        clear: 'Reset',
        week: 'Week',
        month: 'Maand',
        year: 'Jaar',
        timeSelect: 'Selecteer tijd',
        dateSelect: 'Selecteer datum',
        monthSelect: 'Kies een maand',
        yearSelect: 'Kies een jaar',
        decadeSelect: 'Kies een decennium',
        dateFormat: 'D-M-YYYY',
        dateTimeFormat: 'D-M-YYYY HH:mm:ss',
        previousMonth: 'Vorige maand (PageUp)',
        nextMonth: 'Volgende maand (PageDown)',
        previousYear: 'Vorig jaar (Control + left)',
        nextYear: 'Volgend jaar (Control + right)',
        previousDecade: 'Vorig decennium',
        nextDecade: 'Volgend decennium',
        previousCentury: 'Vorige eeuw',
        nextCentury: 'Volgende eeuw'
    });
    var _default = exports.default = locale;
    }}),
    7576: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/nl_BE.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 7576);
    var __TURBOPACK__imported__module__8383__ = __turbopack_context__.i(8383);
    // MERGED MODULE: [project]/components/calendar/locale/nl_BE.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/nl_BE.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__6039__ = __turbopack_context__.i(6039);
    // MERGED MODULE: [project]/components/time-picker/locale/nl_BE.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Selecteer tijd',
        rangePlaceholder: [
            'Start tijd',
            'Eind tijd'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            monthPlaceholder: 'Selecteer maand',
            placeholder: 'Selecteer datum',
            quarterPlaceholder: 'Selecteer kwartaal',
            rangeMonthPlaceholder: [
                'Begin maand',
                'Eind maand'
            ],
            rangePlaceholder: [
                'Begin datum',
                'Eind datum'
            ],
            rangeWeekPlaceholder: [
                'Begin week',
                'Eind week'
            ],
            rangeYearPlaceholder: [
                'Begin jaar',
                'Eind jaar'
            ],
            weekPlaceholder: 'Selecteer week',
            yearPlaceholder: 'Selecteer jaar',
            ...__TURBOPACK__imported__module__6039__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} is geen geldige ${type}';
    const localeValues = {
        locale: 'nl-be',
        Pagination: __TURBOPACK__imported__module__8383__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Maak een selectie',
            close: 'Sluiten'
        },
        Table: {
            cancelSort: 'Klik om sortering te annuleren',
            collapse: 'Rij inklappen',
            emptyText: 'Geen data',
            expand: 'Rij uitklappen',
            filterConfirm: 'OK',
            filterEmptyText: 'Geen filters',
            filterReset: 'Reset',
            filterTitle: 'Filteren',
            selectAll: 'Selecteer huidige pagina',
            selectInvert: 'Keer volgorde om',
            selectNone: 'Maak selectie leeg',
            selectionAll: 'Selecteer alle data',
            sortTitle: 'Sorteren',
            triggerAsc: 'Klik om oplopend te sorteren',
            triggerDesc: 'Klik om aflopend te sorteren'
        },
        Tour: {
            Next: 'Volgende',
            Previous: 'Vorige',
            Finish: 'Voltooien'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Annuleer',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Annuleer'
        },
        Transfer: {
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Verwijder',
            removeAll: 'Verwijder alles',
            removeCurrent: 'Verwijder huidige pagina',
            searchPlaceholder: 'Zoek hier',
            selectAll: 'Selecteer alles',
            selectCurrent: 'Selecteer huidige pagina',
            selectInvert: 'Huidige pagina omkeren',
            titles: [
                '',
                ''
            ]
        },
        Upload: {
            downloadFile: 'Bestand downloaden',
            previewFile: 'Preview file',
            removeFile: 'Verwijder bestand',
            uploadError: 'Fout tijdens uploaden',
            uploading: 'Uploaden...'
        },
        Empty: {
            description: 'Geen gegevens'
        },
        Icon: {
            icon: 'icoon'
        },
        Text: {
            edit: 'Bewerken',
            copy: 'kopiëren',
            copied: 'Gekopieerd',
            expand: 'Uitklappen'
        },
        Form: {
            optional: '(optioneel)',
            defaultValidateMessages: {
                default: 'Validatiefout voor ${label}',
                required: 'Gelieve ${label} in te vullen',
                enum: '${label} moet één van [${enum}] zijn',
                whitespace: '${label} mag geen blanco teken zijn',
                date: {
                    format: '${label} heeft een ongeldig formaat',
                    parse: '${label} kan niet naar een datum omgezet worden',
                    invalid: '${label} is een ongeldige datum'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} moet ${len} karakters lang zijn',
                    min: '${label} moet minimaal ${min} karakters lang zijn',
                    max: '${label} mag maximaal ${max} karakters lang zijn',
                    range: '${label} moet tussen ${min}-${max} karakters lang zijn'
                },
                number: {
                    len: '${label} moet gelijk zijn aan ${len}',
                    min: '${label} moet minimaal ${min} zijn',
                    max: '${label} mag maximaal ${max} zijn',
                    range: '${label} moet tussen ${min}-${max} liggen'
                },
                array: {
                    len: 'Moeten ${len} ${label} zijn',
                    min: 'Minimaal ${min} ${label}',
                    max: 'maximaal ${max} ${label}',
                    range: 'Het aantal ${label} moet tussen ${min}-${max} liggen'
                },
                pattern: {
                    mismatch: '${label} komt niet overeen met het patroon ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Voorbeeld'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    3742: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ pagina',
        jump_to: 'Ga naar',
        jump_to_confirm: 'bevestigen',
        page: 'Pagina',
        // Pagination
        prev_page: 'Vorige pagina',
        next_page: 'Volgende pagina',
        prev_5: "Vorige 5 pagina's",
        next_5: "Volgende 5 pagina's",
        prev_3: "Vorige 3 pagina's",
        next_3: "Volgende 3 pagina's",
        page_size: 'pagina grootte'
    };
    var _default = exports.default = locale;
    }}),
    5772: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'nl_NL',
        today: 'Vandaag',
        now: 'Nu',
        backToToday: 'Terug naar vandaag',
        ok: 'OK',
        clear: 'Reset',
        week: 'Week',
        month: 'Maand',
        year: 'Jaar',
        timeSelect: 'Selecteer tijd',
        dateSelect: 'Selecteer datum',
        monthSelect: 'Kies een maand',
        yearSelect: 'Kies een jaar',
        decadeSelect: 'Kies een decennium',
        dateFormat: 'D-M-YYYY',
        dateTimeFormat: 'D-M-YYYY HH:mm:ss',
        previousMonth: 'Vorige maand (PageUp)',
        nextMonth: 'Volgende maand (PageDown)',
        previousYear: 'Vorig jaar (Control + left)',
        nextYear: 'Volgend jaar (Control + right)',
        previousDecade: 'Vorig decennium',
        nextDecade: 'Volgend decennium',
        previousCentury: 'Vorige eeuw',
        nextCentury: 'Volgende eeuw'
    });
    var _default = exports.default = locale;
    }}),
    3350: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/nl_NL.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 3350);
    var __TURBOPACK__imported__module__3742__ = __turbopack_context__.i(3742);
    // MERGED MODULE: [project]/components/calendar/locale/nl_NL.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/nl_NL.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__5772__ = __turbopack_context__.i(5772);
    // MERGED MODULE: [project]/components/time-picker/locale/nl_NL.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Selecteer tijd',
        rangePlaceholder: [
            'Start tijd',
            'Eind tijd'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            monthPlaceholder: 'Selecteer maand',
            placeholder: 'Selecteer datum',
            quarterPlaceholder: 'Selecteer kwartaal',
            rangeMonthPlaceholder: [
                'Begin maand',
                'Eind maand'
            ],
            rangePlaceholder: [
                'Begin datum',
                'Eind datum'
            ],
            rangeWeekPlaceholder: [
                'Begin week',
                'Eind week'
            ],
            rangeYearPlaceholder: [
                'Begin jaar',
                'Eind jaar'
            ],
            weekPlaceholder: 'Selecteer week',
            yearPlaceholder: 'Selecteer jaar',
            ...__TURBOPACK__imported__module__5772__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} is geen geldige ${type}';
    const localeValues = {
        locale: 'nl',
        Pagination: __TURBOPACK__imported__module__3742__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Maak een selectie',
            close: 'Sluiten'
        },
        Table: {
            cancelSort: 'Klik om sortering te annuleren',
            collapse: 'Rij inklappen',
            emptyText: 'Geen data',
            expand: 'Rij uitklappen',
            filterConfirm: 'OK',
            filterEmptyText: 'Geen filters',
            filterReset: 'Reset',
            filterTitle: 'Filteren',
            selectAll: 'Selecteer huidige pagina',
            selectInvert: 'Keer volgorde om',
            selectNone: 'Maak selectie leeg',
            selectionAll: 'Selecteer alle data',
            sortTitle: 'Sorteren',
            triggerAsc: 'Klik om oplopend te sorteren',
            triggerDesc: 'Klik om aflopend te sorteren'
        },
        Tour: {
            Next: 'Volgende',
            Previous: 'Vorige',
            Finish: 'Voltooien'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Annuleer',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Annuleer'
        },
        Transfer: {
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Verwijder',
            removeAll: 'Verwijder alles',
            removeCurrent: 'Verwijder huidige pagina',
            searchPlaceholder: 'Zoek hier',
            selectAll: 'Selecteer alles',
            selectCurrent: 'Selecteer huidige pagina',
            selectInvert: 'Huidige pagina omkeren',
            titles: [
                '',
                ''
            ]
        },
        Upload: {
            downloadFile: 'Bestand downloaden',
            previewFile: 'Preview file',
            removeFile: 'Verwijder bestand',
            uploadError: 'Fout tijdens uploaden',
            uploading: 'Uploaden...'
        },
        Empty: {
            description: 'Geen gegevens'
        },
        Icon: {
            icon: 'icoon'
        },
        Text: {
            edit: 'Bewerken',
            copy: 'kopiëren',
            copied: 'Gekopieerd',
            expand: 'Uitklappen'
        },
        Form: {
            optional: '(optioneel)',
            defaultValidateMessages: {
                default: 'Validatiefout voor ${label}',
                required: 'Gelieve ${label} in te vullen',
                enum: '${label} moet één van [${enum}] zijn',
                whitespace: '${label} mag geen blanco teken zijn',
                date: {
                    format: '${label} heeft een ongeldig formaat',
                    parse: '${label} kan niet naar een datum omgezet worden',
                    invalid: '${label} is een ongeldige datum'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} moet ${len} karakters lang zijn',
                    min: '${label} moet minimaal ${min} karakters lang zijn',
                    max: '${label} mag maximaal ${max} karakters lang zijn',
                    range: '${label} moet tussen ${min}-${max} karakters lang zijn'
                },
                number: {
                    len: '${label} moet gelijk zijn aan ${len}',
                    min: '${label} moet minimaal ${min} zijn',
                    max: '${label} mag maximaal ${max} zijn',
                    range: '${label} moet tussen ${min}-${max} liggen'
                },
                array: {
                    len: 'Moeten ${len} ${label} zijn',
                    min: 'Minimaal ${min} ${label}',
                    max: 'maximaal ${max} ${label}',
                    range: 'Het aantal ${label} moet tussen ${min}-${max} liggen'
                },
                pattern: {
                    mismatch: '${label} komt niet overeen met het patroon ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Voorbeeld'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    5304: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: 'na stronę',
        jump_to: 'Idź do',
        jump_to_confirm: 'potwierdź',
        page: '',
        // Pagination
        prev_page: 'Poprzednia strona',
        next_page: 'Następna strona',
        prev_5: 'Poprzednie 5 stron',
        next_5: 'Następne 5 stron',
        prev_3: 'Poprzednie 3 strony',
        next_3: 'Następne 3 strony',
        page_size: 'rozmiar strony'
    };
    var _default = exports.default = locale;
    }}),
    3567: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'pl_PL',
        today: 'Dzisiaj',
        now: 'Teraz',
        backToToday: 'Ustaw dzisiaj',
        ok: 'OK',
        clear: 'Wyczyść',
        week: 'Tydzień',
        month: 'Miesiąc',
        year: 'Rok',
        timeSelect: 'Ustaw czas',
        dateSelect: 'Ustaw datę',
        monthSelect: 'Wybierz miesiąc',
        yearSelect: 'Wybierz rok',
        decadeSelect: 'Wybierz dekadę',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Poprzedni miesiąc (PageUp)',
        nextMonth: 'Następny miesiąc (PageDown)',
        previousYear: 'Ostatni rok (Ctrl + left)',
        nextYear: 'Następny rok (Ctrl + right)',
        previousDecade: 'Ostatnia dekada',
        nextDecade: 'Następna dekada',
        previousCentury: 'Ostatni wiek',
        nextCentury: 'Następny wiek'
    });
    var _default = exports.default = locale;
    }}),
    4951: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/pl_PL.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4951);
    var __TURBOPACK__imported__module__5304__ = __turbopack_context__.i(5304);
    // MERGED MODULE: [project]/components/calendar/locale/pl_PL.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/pl_PL.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__3567__ = __turbopack_context__.i(3567);
    // MERGED MODULE: [project]/components/time-picker/locale/pl_PL.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Wybierz godzinę'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Wybierz datę',
            rangePlaceholder: [
                'Data początkowa',
                'Data końcowa'
            ],
            yearFormat: 'YYYY',
            monthFormat: 'MMMM',
            monthBeforeYear: true,
            shortWeekDays: [
                'Niedz',
                'Pon',
                'Wt',
                'Śr',
                'Czw',
                'Pt',
                'Sob'
            ],
            shortMonths: [
                'Sty',
                'Lut',
                'Mar',
                'Kwi',
                'Maj',
                'Cze',
                'Lip',
                'Sie',
                'Wrz',
                'Paź',
                'Lis',
                'Gru'
            ],
            ...__TURBOPACK__imported__module__3567__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} nie posiada poprawnej wartości dla typu ${type}';
    const localeValues = {
        locale: 'pl',
        Pagination: __TURBOPACK__imported__module__5304__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Wybierz',
            close: 'Zamknij'
        },
        Table: {
            filterTitle: 'Menu filtra',
            filterConfirm: 'OK',
            filterReset: 'Usuń filtry',
            filterEmptyText: 'Brak filtrów',
            filterCheckAll: 'Wybierz wszystkie elementy',
            filterSearchPlaceholder: 'Szukaj w filtrach',
            emptyText: 'Brak danych',
            selectAll: 'Zaznacz bieżącą stronę',
            selectInvert: 'Odwróć zaznaczenie',
            selectNone: 'Wyczyść',
            selectionAll: 'Wybierz wszystkie',
            sortTitle: 'Sortowanie',
            expand: 'Rozwiń wiersz',
            collapse: 'Zwiń wiersz',
            triggerDesc: 'Sortuj malejąco',
            triggerAsc: 'Sortuj rosnąco',
            cancelSort: 'Usuń sortowanie'
        },
        Tour: {
            Next: 'Dalej',
            Previous: 'Wróć',
            Finish: 'Zakończ'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Anuluj',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Anuluj'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Szukaj',
            itemUnit: 'obiekt',
            itemsUnit: 'obiekty',
            remove: 'Usuń',
            selectCurrent: 'Wybierz aktualną stronę',
            removeCurrent: 'Usuń aktualną stronę',
            selectAll: 'Wybierz wszystkie',
            removeAll: 'Usuń wszystkie',
            selectInvert: 'Odwróć wybór'
        },
        Upload: {
            uploading: 'Wysyłanie...',
            removeFile: 'Usuń plik',
            uploadError: 'Błąd wysyłania',
            previewFile: 'Podejrzyj plik',
            downloadFile: 'Pobieranie pliku'
        },
        Empty: {
            description: 'Brak danych'
        },
        Icon: {
            icon: 'Ikona'
        },
        Text: {
            edit: 'Edytuj',
            copy: 'Kopiuj',
            copied: 'Skopiowany',
            expand: 'Rozwiń'
        },
        Form: {
            optional: '(opcjonalne)',
            defaultValidateMessages: {
                default: 'Błąd walidacji dla pola ${label}',
                required: 'Pole ${label} jest wymagane',
                enum: 'Pole ${label} musi posiadać wartość z listy: [${enum}]',
                whitespace: 'Pole ${label} nie może być puste',
                date: {
                    format: '${label} posiada zły format daty',
                    parse: '${label} nie może zostać zinterpretowane jako data',
                    invalid: '${label} jest niepoprawną datą'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} musi posiadać ${len} znaków',
                    min: '${label} musi posiadać co namniej ${min} znaków',
                    max: '${label} musi posiadać maksymalnie ${max} znaków',
                    range: '${label} musi posiadać między ${min} a ${max} znaków'
                },
                number: {
                    len: '${label} musi mieć wartość o długości ${len}',
                    min: '${label} musi mieć wartość większą lub równą ${min}',
                    max: '${label} musi mieć wartość mniejszą lub równą ${max}',
                    range: '${label} musi mieć wartość pomiędzy ${min} a ${max}'
                },
                array: {
                    len: '${label} musi posiadać ${len} elementów',
                    min: '${label} musi posiadać co najmniej ${min} elementów',
                    max: '${label} musi posiadać maksymalnie ${max} elementów',
                    range: '${label} musi posiadać między ${min} a ${max} elementów'
                },
                pattern: {
                    mismatch: '${label} nie posiada wartości zgodnej ze wzorem ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Podgląd'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    7396: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ página',
        jump_to: 'Vá até',
        jump_to_confirm: 'confirme',
        page: 'Página',
        // Pagination
        prev_page: 'Página anterior',
        next_page: 'Próxima página',
        prev_5: '5 páginas anteriores',
        next_5: '5 próximas páginas',
        prev_3: '3 páginas anteriores',
        next_3: '3 próximas páginas',
        page_size: 'tamanho da página'
    };
    var _default = exports.default = locale;
    }}),
    1347: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'pt_BR',
        today: 'Hoje',
        now: 'Agora',
        backToToday: 'Voltar para hoje',
        ok: 'OK',
        clear: 'Limpar',
        week: 'Semana',
        month: 'Mês',
        year: 'Ano',
        timeSelect: 'Selecionar hora',
        dateSelect: 'Selecionar data',
        monthSelect: 'Escolher mês',
        yearSelect: 'Escolher ano',
        decadeSelect: 'Escolher década',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        monthBeforeYear: false,
        previousMonth: 'Mês anterior (PageUp)',
        nextMonth: 'Próximo mês (PageDown)',
        previousYear: 'Ano anterior (Control + esquerda)',
        nextYear: 'Próximo ano (Control + direita)',
        previousDecade: 'Década anterior',
        nextDecade: 'Próxima década',
        previousCentury: 'Século anterior',
        nextCentury: 'Próximo século',
        shortWeekDays: [
            'Dom',
            'Seg',
            'Ter',
            'Qua',
            'Qui',
            'Sex',
            'Sáb'
        ],
        shortMonths: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez'
        ]
    });
    var _default = exports.default = locale;
    }}),
    1778: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/pt_BR.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 1778);
    var __TURBOPACK__imported__module__7396__ = __turbopack_context__.i(7396);
    // MERGED MODULE: [project]/components/calendar/locale/pt_BR.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/pt_BR.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__1347__ = __turbopack_context__.i(1347);
    // MERGED MODULE: [project]/components/time-picker/locale/pt_BR.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Hora'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Selecionar data',
            rangePlaceholder: [
                'Data inicial',
                'Data final'
            ],
            ...__TURBOPACK__imported__module__1347__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} não é um ${type} válido';
    const localeValues = {
        locale: 'pt-br',
        Pagination: __TURBOPACK__imported__module__7396__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Por favor escolha',
            close: 'Fechar'
        },
        Table: {
            filterTitle: 'Menu de Filtro',
            filterConfirm: 'OK',
            filterReset: 'Resetar',
            filterEmptyText: 'Sem filtros',
            filterCheckAll: 'Selecionar todos os itens',
            filterSearchPlaceholder: 'Pesquisar nos filtros',
            emptyText: 'Sem conteúdo',
            selectAll: 'Selecionar página atual',
            selectInvert: 'Inverter seleção',
            selectNone: 'Apagar todo o conteúdo',
            selectionAll: 'Selecionar todo o conteúdo',
            sortTitle: 'Ordenar título',
            expand: 'Expandir linha',
            collapse: 'Colapsar linha',
            triggerDesc: 'Clique organiza por descendente',
            triggerAsc: 'Clique organiza por ascendente',
            cancelSort: 'Clique para cancelar organização'
        },
        Tour: {
            Next: 'Próximo',
            Previous: 'Anterior',
            Finish: 'Finalizar'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Cancelar',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Cancelar'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Procurar',
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Remover',
            selectCurrent: 'Selecionar página atual',
            removeCurrent: 'Remover página atual',
            selectAll: 'Selecionar todos',
            removeAll: 'Remover todos',
            selectInvert: 'Inverter seleção atual'
        },
        Upload: {
            uploading: 'Enviando...',
            removeFile: 'Remover arquivo',
            uploadError: 'Erro no envio',
            previewFile: 'Visualizar arquivo',
            downloadFile: 'Baixar arquivo'
        },
        Empty: {
            description: 'Não há dados'
        },
        Icon: {
            icon: 'ícone'
        },
        Text: {
            edit: 'editar',
            copy: 'copiar',
            copied: 'copiado',
            expand: 'expandir'
        },
        Form: {
            optional: '(opcional)',
            defaultValidateMessages: {
                default: 'Erro ${label} na validação de campo',
                required: 'Por favor, insira ${label}',
                enum: '${label} deve ser um dos seguinte: [${enum}]',
                whitespace: '${label} não pode ser um carácter vazio',
                date: {
                    format: ' O formato de data ${label} é inválido',
                    parse: '${label} não pode ser convertido para uma data',
                    invalid: '${label} é uma data inválida'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} deve possuir ${len} caracteres',
                    min: '${label} deve possuir ao menos ${min} caracteres',
                    max: '${label} deve possuir no máximo ${max} caracteres',
                    range: '${label} deve possuir entre ${min} e ${max} caracteres'
                },
                number: {
                    len: '${label} deve ser igual à ${len}',
                    min: 'O valor mínimo de ${label} é ${min}',
                    max: 'O valor máximo de ${label} é ${max}',
                    range: '${label} deve estar entre ${min} e ${max}'
                },
                array: {
                    len: 'Deve ser ${len} ${label}',
                    min: 'No mínimo ${min} ${label}',
                    max: 'No máximo ${max} ${label}',
                    range: 'A quantidade de ${label} deve estar entre ${min} e ${max}'
                },
                pattern: {
                    mismatch: '${label} não se encaixa no padrão ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Pré-visualização'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    1419: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ página',
        jump_to: 'Saltar',
        jump_to_confirm: 'confirmar',
        page: 'Página',
        // Pagination
        prev_page: 'Página Anterior',
        next_page: 'Página Seguinte',
        prev_5: 'Recuar 5 Páginas',
        next_5: 'Avançar 5 Páginas',
        prev_3: 'Recuar 3 Páginas',
        next_3: 'Avançar 3 Páginas',
        page_size: 'mărimea paginii'
    };
    var _default = exports.default = locale;
    }}),
    6483: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'pt_PT',
        today: 'Hoje',
        now: 'Agora',
        backToToday: 'Hoje',
        ok: 'OK',
        clear: 'Limpar',
        week: 'Semana',
        month: 'Mês',
        year: 'Ano',
        timeSelect: 'Selecionar hora',
        dateSelect: 'Selecionar data',
        monthSelect: 'Selecionar mês',
        yearSelect: 'Selecionar ano',
        decadeSelect: 'Selecionar década',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Mês anterior (PageUp)',
        nextMonth: 'Mês seguinte (PageDown)',
        previousYear: 'Ano anterior (Control + left)',
        nextYear: 'Ano seguinte (Control + right)',
        previousDecade: 'Década anterior',
        nextDecade: 'Década seguinte',
        previousCentury: 'Século anterior',
        nextCentury: 'Século seguinte',
        shortWeekDays: [
            'Dom',
            'Seg',
            'Ter',
            'Qua',
            'Qui',
            'Sex',
            'Sáb'
        ],
        shortMonths: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez'
        ]
    });
    var _default = exports.default = locale;
    }}),
    6538: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/pt_PT.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 6538);
    var __TURBOPACK__imported__module__1419__ = __turbopack_context__.i(1419);
    // MERGED MODULE: [project]/components/calendar/locale/pt_PT.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/pt_PT.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__6483__ = __turbopack_context__.i(6483);
    // MERGED MODULE: [project]/components/time-picker/locale/pt_PT.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Hora'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            ...__TURBOPACK__imported__module__6483__["default"],
            placeholder: 'Data',
            rangePlaceholder: [
                'Data inicial',
                'Data final'
            ],
            today: 'Hoje',
            now: 'Agora',
            backToToday: 'Hoje',
            ok: 'OK',
            clear: 'Limpar',
            month: 'Mês',
            year: 'Ano',
            timeSelect: 'Hora',
            dateSelect: 'Selecionar data',
            monthSelect: 'Selecionar mês',
            yearSelect: 'Selecionar ano',
            decadeSelect: 'Selecionar década',
            yearFormat: 'YYYY',
            monthFormat: 'MMMM',
            monthBeforeYear: false,
            previousMonth: 'Mês anterior (PageUp)',
            nextMonth: 'Mês seguinte (PageDown)',
            previousYear: 'Ano anterior (Control + left)',
            nextYear: 'Ano seguinte (Control + right)',
            previousDecade: 'Última década',
            nextDecade: 'Próxima década',
            previousCentury: 'Último século',
            nextCentury: 'Próximo século'
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__,
            placeholder: 'Hora'
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} não é um(a) ${type} válido(a)';
    const localeValues = {
        locale: 'pt',
        Pagination: __TURBOPACK__imported__module__1419__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Por favor, selecione',
            close: 'Fechar'
        },
        Table: {
            filterTitle: 'Filtro',
            filterConfirm: 'Aplicar',
            filterReset: 'Repor',
            filterEmptyText: 'Sem filtros',
            filterCheckAll: 'Selecionar todos os itens',
            filterSearchPlaceholder: 'Pesquisar nos filtros',
            emptyText: 'Sem dados',
            selectAll: 'Selecionar página atual',
            selectInvert: 'Inverter página atual',
            selectNone: 'Limpar todos os dados',
            selectionAll: 'Selecionar todos os dados',
            sortTitle: 'Ordenar',
            expand: 'Expandir linha',
            collapse: 'Colapsar linha',
            triggerDesc: 'Clique para ordenar decrescente',
            triggerAsc: 'Clique para ordenar crescente',
            cancelSort: 'Clique para cancelar ordenação'
        },
        Tour: {
            Next: 'Próximo',
            Previous: 'Anterior',
            Finish: 'Terminar'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Cancelar',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Cancelar'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Procurar...',
            itemUnit: 'item',
            itemsUnit: 'itens',
            remove: 'Remover',
            selectCurrent: 'Selecionar página atual',
            removeCurrent: 'Remover página atual',
            selectAll: 'Selecionar tudo',
            deselectAll: 'Desmarcar tudo',
            removeAll: 'Remover tudo',
            selectInvert: 'Inverter página actual'
        },
        Upload: {
            uploading: 'A carregar...',
            removeFile: 'Remover',
            uploadError: 'Erro ao carregar',
            previewFile: 'Pré-visualizar',
            downloadFile: 'Descarregar'
        },
        Empty: {
            description: 'Sem dados'
        },
        Icon: {
            icon: 'ícone'
        },
        Text: {
            edit: 'Editar',
            copy: 'Copiar',
            copied: 'Copiado',
            expand: 'Expandir',
            collapse: 'Colapsar'
        },
        Form: {
            optional: '(opcional)',
            defaultValidateMessages: {
                default: 'Erro de validação no campo ${label}',
                required: 'Por favor, introduza ${label}',
                enum: '${label} deve ser um dos valores [${enum}]',
                whitespace: '${label} não pode ser um carácter em branco',
                date: {
                    format: 'Formato da data ${label} é inválido',
                    parse: '${label} não pode ser convertido para data',
                    invalid: '${label} é uma data inválida'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} deve ter ${len} caracteres',
                    min: '${label} deve ter pelo menos ${min} caracteres',
                    max: '${label} deve ter até ${max} caracteres',
                    range: '${label} deve ter entre ${min}-${max} caracteres'
                },
                number: {
                    len: '${label} deve ser igual a ${len}',
                    min: '${label} deve ser no mínimo ${min}',
                    max: '${label} deve ser no máximo ${max}',
                    range: '${label} deve estar entre ${min}-${max}'
                },
                array: {
                    len: 'Deve ter ${len} ${label}',
                    min: 'Pelo menos ${min} ${label}',
                    max: 'No máximo ${max} ${label}',
                    range: 'A quantidade de ${label} deve estar entre ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} não corresponde ao padrão ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Pré-visualizar'
        },
        QRCode: {
            expired: 'Código QR expirou',
            refresh: 'Atualizar',
            scanned: 'Digitalizado'
        },
        ColorPicker: {
            presetEmpty: 'Vazio',
            transparent: 'Transparente',
            singleColor: 'Simples',
            gradientColor: 'Gradiente'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    9177: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ pagină',
        jump_to: 'Mergi la',
        jump_to_confirm: 'confirm',
        page: '',
        // Pagination
        prev_page: 'Pagina Anterioară',
        next_page: 'Pagina Următoare',
        prev_5: '5 Pagini Anterioare',
        next_5: '5 Pagini Următoare',
        prev_3: '3 Pagini Anterioare',
        next_3: '3 Pagini Următoare',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    4384: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ro_RO',
        today: 'Azi',
        now: 'Acum',
        backToToday: 'Înapoi la azi',
        ok: 'OK',
        clear: 'Șterge',
        week: 'Săptămână',
        month: 'Lună',
        year: 'An',
        timeSelect: 'selectează timpul',
        dateSelect: 'selectează data',
        weekSelect: 'Alege o săptămână',
        monthSelect: 'Alege o lună',
        yearSelect: 'Alege un an',
        decadeSelect: 'Alege un deceniu',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Luna anterioară (PageUp)',
        nextMonth: 'Luna următoare (PageDown)',
        previousYear: 'Anul anterior (Control + stânga)',
        nextYear: 'Anul următor (Control + dreapta)',
        previousDecade: 'Deceniul anterior',
        nextDecade: 'Deceniul următor',
        previousCentury: 'Secolul anterior',
        nextCentury: 'Secolul următor'
    });
    var _default = exports.default = locale;
    }}),
    5218: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ro_RO.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 5218);
    var __TURBOPACK__imported__module__9177__ = __turbopack_context__.i(9177);
    // MERGED MODULE: [project]/components/calendar/locale/ro_RO.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ro_RO.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__4384__ = __turbopack_context__.i(4384);
    // MERGED MODULE: [project]/components/time-picker/locale/ro_RO.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Selectează ora'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Selectează data',
            rangePlaceholder: [
                'Data start',
                'Data sfârșit'
            ],
            ...__TURBOPACK__imported__module__4384__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} nu conține tipul corect (${type})';
    const localeValues = {
        locale: 'ro',
        Pagination: __TURBOPACK__imported__module__9177__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Selectează',
            close: 'Închide'
        },
        Table: {
            filterTitle: 'Filtrează',
            filterConfirm: 'OK',
            filterReset: 'Resetează',
            filterEmptyText: 'Fără filtre',
            emptyText: 'Nu există date',
            selectAll: 'Selectează pagina curentă',
            selectInvert: 'Inversează pagina curentă',
            selectNone: 'Șterge selecția',
            selectionAll: 'Selectează toate datele',
            sortTitle: 'Ordonează',
            expand: 'Extinde rândul',
            collapse: 'Micșorează rândul',
            triggerDesc: 'Apasă pentru ordonare descrescătoare',
            triggerAsc: 'Apasă pentru ordonare crescătoare',
            cancelSort: 'Apasă pentru a anula ordonarea'
        },
        Tour: {
            Next: 'Următorul',
            Previous: 'Înapoi',
            Finish: 'Finalizare'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Anulare',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Anulare'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Căutare',
            itemUnit: 'element',
            itemsUnit: 'elemente',
            remove: 'Șterge',
            selectCurrent: 'Selectează pagina curentă',
            removeCurrent: 'Șterge pagina curentă',
            selectAll: 'Selectează toate datele',
            removeAll: 'Șterge toate datele',
            selectInvert: 'Inversează pagina curentă'
        },
        Upload: {
            uploading: 'Se transferă...',
            removeFile: 'Înlătură fișierul',
            uploadError: 'Eroare la upload',
            previewFile: 'Previzualizare fișier',
            downloadFile: 'Descărcare fișier'
        },
        Empty: {
            description: 'Fără date'
        },
        Icon: {
            icon: 'icon'
        },
        Text: {
            edit: 'editează',
            copy: 'copiază',
            copied: 'copiat',
            expand: 'extinde'
        },
        Form: {
            optional: '(opțional)',
            defaultValidateMessages: {
                default: 'Eroare la validarea câmpului ${label}',
                required: 'Vă rugăm introduceți ${label}',
                enum: '${label} trebuie să fie una din valorile [${enum}]',
                whitespace: '${label} nu poate fi gol',
                date: {
                    format: '${label} - data nu este în formatul corect',
                    parse: '${label} nu poate fi convertit la o dată',
                    invalid: '${label} este o dată invalidă'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} trebuie să conțină ${len} caractere',
                    min: '${label} trebuie să conțină cel puțin ${min} caractere',
                    max: '${label} trebuie să conțină cel mult ${max} caractere',
                    range: '${label} trebuie să conțină între ${min}-${max} caractere'
                },
                number: {
                    len: '${label} trebuie să conțină ${len} cifre',
                    min: '${label} trebuie să fie minim ${min}',
                    max: '${label} trebuie să fie maxim ${max}',
                    range: '${label} trebuie să fie între ${min}-${max}'
                },
                array: {
                    len: '${label} trebuie să conțină ${len} elemente',
                    min: '${label} trebuie să conțină cel puțin ${min} elemente',
                    max: '${label} trebuie să conțină cel mult ${max} elemente',
                    range: '${label} trebuie să conțină între ${min}-${max} elemente'
                },
                pattern: {
                    mismatch: '${label} nu respectă șablonul ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Preview'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    4012: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ стр.',
        jump_to: 'Перейти',
        jump_to_confirm: 'подтвердить',
        page: 'Страница',
        // Pagination
        prev_page: 'Назад',
        next_page: 'Вперед',
        prev_5: 'Предыдущие 5',
        next_5: 'Следующие 5',
        prev_3: 'Предыдущие 3',
        next_3: 'Следующие 3',
        page_size: 'размер страницы'
    };
    var _default = exports.default = locale;
    }}),
    8749: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ru_RU',
        today: 'Сегодня',
        now: 'Сейчас',
        backToToday: 'Текущая дата',
        ok: 'ОК',
        clear: 'Очистить',
        week: 'Неделя',
        month: 'Месяц',
        year: 'Год',
        timeSelect: 'Выбрать время',
        dateSelect: 'Выбрать дату',
        monthSelect: 'Выбрать месяц',
        yearSelect: 'Выбрать год',
        decadeSelect: 'Выбрать десятилетие',
        dateFormat: 'D-M-YYYY',
        dateTimeFormat: 'D-M-YYYY HH:mm:ss',
        previousMonth: 'Предыдущий месяц (PageUp)',
        nextMonth: 'Следующий месяц (PageDown)',
        previousYear: 'Предыдущий год (Control + left)',
        nextYear: 'Следующий год (Control + right)',
        previousDecade: 'Предыдущее десятилетие',
        nextDecade: 'Следущее десятилетие',
        previousCentury: 'Предыдущий век',
        nextCentury: 'Следующий век'
    });
    var _default = exports.default = locale;
    }}),
    4288: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ru_RU.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4288);
    var __TURBOPACK__imported__module__4012__ = __turbopack_context__.i(4012);
    // MERGED MODULE: [project]/components/calendar/locale/ru_RU.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ru_RU.ts [library] (ecmascript)
    ;
    /** Created by Andrey Gayvoronsky on 13/04/16. */ var __TURBOPACK__imported__module__8749__ = __turbopack_context__.i(8749);
    // MERGED MODULE: [project]/components/time-picker/locale/ru_RU.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Выберите время',
        rangePlaceholder: [
            'Время начала',
            'Время окончания'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Выберите дату',
            yearPlaceholder: 'Выберите год',
            quarterPlaceholder: 'Выберите квартал',
            monthPlaceholder: 'Выберите месяц',
            weekPlaceholder: 'Выберите неделю',
            rangePlaceholder: [
                'Начальная дата',
                'Конечная дата'
            ],
            rangeYearPlaceholder: [
                'Начальный год',
                'Год окончания'
            ],
            rangeMonthPlaceholder: [
                'Начальный месяц',
                'Конечный месяц'
            ],
            rangeWeekPlaceholder: [
                'Начальная неделя',
                'Конечная неделя'
            ],
            shortWeekDays: [
                'Вс',
                'Пн',
                'Вт',
                'Ср',
                'Чт',
                'Пт',
                'Сб'
            ],
            shortMonths: [
                'Янв',
                'Фев',
                'Мар',
                'Апр',
                'Май',
                'Июн',
                'Июл',
                'Авг',
                'Сен',
                'Окт',
                'Ноя',
                'Дек'
            ],
            ...__TURBOPACK__imported__module__8749__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} не является типом ${type}';
    const localeValues = {
        locale: 'ru',
        Pagination: __TURBOPACK__imported__module__4012__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Пожалуйста выберите',
            close: 'Закрыть'
        },
        Table: {
            filterTitle: 'Фильтр',
            filterConfirm: 'OK',
            filterReset: 'Сбросить',
            filterEmptyText: 'Без фильтров',
            filterCheckAll: 'Выбрать все элементы',
            filterSearchPlaceholder: 'Поиск в фильтрах',
            emptyText: 'Нет данных',
            selectAll: 'Выбрать всё',
            selectInvert: 'Инвертировать выбор',
            selectNone: 'Очистить все данные',
            selectionAll: 'Выбрать все данные',
            sortTitle: 'Сортировка',
            expand: 'Развернуть строку',
            collapse: 'Свернуть строку',
            triggerDesc: 'Нажмите для сортировки по убыванию',
            triggerAsc: 'Нажмите для сортировки по возрастанию',
            cancelSort: 'Нажмите, чтобы отменить сортировку'
        },
        Tour: {
            Next: 'Далее',
            Previous: 'Назад',
            Finish: 'Завершить'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Отмена',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Отмена'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Поиск',
            itemUnit: 'элем.',
            itemsUnit: 'элем.',
            remove: 'Удалить',
            selectAll: 'Выбрать все данные',
            deselectAll: 'Очистить все данные',
            selectCurrent: 'Выбрать текущую страницу',
            selectInvert: 'Инвертировать выбор',
            removeAll: 'Удалить все данные',
            removeCurrent: 'Удалить текущую страницу'
        },
        Upload: {
            uploading: 'Загрузка...',
            removeFile: 'Удалить файл',
            uploadError: 'При загрузке произошла ошибка',
            previewFile: 'Предпросмотр файла',
            downloadFile: 'Загрузить файл'
        },
        Empty: {
            description: 'Нет данных'
        },
        Icon: {
            icon: 'иконка'
        },
        Text: {
            edit: 'Редактировать',
            copy: 'Копировать',
            copied: 'Скопировано',
            expand: 'Раскрыть',
            collapse: 'Свернуть'
        },
        Form: {
            optional: '(необязательно)',
            defaultValidateMessages: {
                default: 'Ошибка проверки поля ${label}',
                required: 'Пожалуйста, введите ${label}',
                enum: '${label} должен быть одним из [${enum}]',
                whitespace: '${label} не может быть пустым',
                date: {
                    format: '${label} не правильный формат даты',
                    parse: '${label} не может быть преобразовано в дату',
                    invalid: '${label} не является корректной датой'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} должна быть ${len} символов',
                    min: '${label} должна быть больше или равна ${min} символов',
                    max: '${label} должна быть меньше или равна ${max} символов',
                    range: 'Длина ${label} должна быть между ${min}-${max} символами'
                },
                number: {
                    len: '${label} должна быть равна ${len}',
                    min: '${label} должна быть больше или равна ${min}',
                    max: '${label} должна быть меньше или равна ${max}',
                    range: '${label} должна быть между ${min}-${max}'
                },
                array: {
                    len: 'Количество элементов ${label} должно быть равно ${len}',
                    min: 'Количество элементов ${label} должно быть больше или равно ${min}',
                    max: 'Количество элементов ${label} должно быть меньше или равно ${max}',
                    range: 'Количество элементов ${label} должно быть между ${min} и ${max}'
                },
                pattern: {
                    mismatch: '${label} не соответствует шаблону ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Предпросмотр'
        },
        QRCode: {
            expired: 'QR-код устарел',
            refresh: 'Обновить'
        },
        ColorPicker: {
            presetEmpty: 'Пустой',
            transparent: 'Прозрачный',
            singleColor: 'Один цвет',
            gradientColor: 'Градиент'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    6441: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ පිටුව',
        jump_to: 'වෙත යන්න',
        jump_to_confirm: 'තහවුරු',
        page: 'පිටුව',
        // Pagination
        prev_page: 'කලින් පිටුව',
        next_page: 'ඊළඟ පිටුව',
        prev_5: 'කලින් පිටු 5',
        next_5: 'ඊළඟ පිටු 5',
        prev_3: 'කලින් පිටු 3',
        next_3: 'ඊළඟ පිටු 3',
        page_size: 'පිටුවේ ප්‍රමාණය'
    };
    var _default = exports.default = locale;
    }}),
    2221: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'si_LK',
        today: 'අද',
        now: 'දැන්',
        backToToday: 'අදට ආපසු',
        ok: 'හරි',
        clear: 'හිස් කරන්න',
        week: 'සතිය',
        month: 'මාසය',
        year: 'අවුරුද්ද',
        timeSelect: 'වේලාවක් තෝරන්න',
        dateSelect: 'දිනයක් තෝරන්න',
        weekSelect: 'සතියක් තෝරන්න',
        monthSelect: 'මාසයක් තෝරන්න',
        yearSelect: 'අවුරුද්දක් තෝරන්න',
        decadeSelect: 'දශකයක් තෝරන්න',
        dateFormat: 'YYYY/M/D',
        dateTimeFormat: 'YYYY/M/D HH:mm:ss',
        monthBeforeYear: false,
        previousMonth: 'කලින් මාසය (පිටුව ඉහළට)',
        nextMonth: 'ඊළඟ මාසය (පිටුව පහළට)',
        previousYear: 'පසුගිය අවුරුද්ද (Control + වම)',
        nextYear: 'ඊළඟ අවුරුද්ද (Control + දකුණ)',
        previousDecade: 'පසුගිය දශකය',
        nextDecade: 'ඊළඟ දශකය',
        previousCentury: 'පසුගිය සියවස',
        nextCentury: 'ඊළඟ සියවස'
    });
    var _default = exports.default = locale;
    }}),
    8791: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/si_LK.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 8791);
    var __TURBOPACK__imported__module__6441__ = __turbopack_context__.i(6441);
    // MERGED MODULE: [project]/components/calendar/locale/si_LK.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/si_LK.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__2221__ = __turbopack_context__.i(2221);
    // MERGED MODULE: [project]/components/time-picker/locale/si_LK.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'වේලාව තෝරන්න',
        rangePlaceholder: [
            'ආරම්භක වේලාව',
            'නිමවන වේලාව'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'දිනය තෝරන්න',
            yearPlaceholder: 'අවුරුද්ද තෝරන්න',
            quarterPlaceholder: 'කාර්තුව තෝරන්න',
            monthPlaceholder: 'මාසය තෝරන්න',
            weekPlaceholder: 'සතිය තෝරන්න',
            rangePlaceholder: [
                'ආරම්භක දිනය',
                'නිමවන දිනය'
            ],
            rangeYearPlaceholder: [
                'ආර්ම්භක අවුරුද්ද',
                'නිමවන අවුරුද්ද'
            ],
            rangeQuarterPlaceholder: [
                'ආරම්භක කාර්තුව',
                'නිමවන කාර්තුව'
            ],
            rangeMonthPlaceholder: [
                'ආරම්භක මාසය',
                'නිමවන මාසය'
            ],
            rangeWeekPlaceholder: [
                'ආරම්භක සතිය',
                'නිමවන සතිය'
            ],
            ...__TURBOPACK__imported__module__2221__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} වලංගු ${type} ක් නොවේ';
    const localeValues = {
        locale: 'si',
        Pagination: __TURBOPACK__imported__module__6441__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'කරුණාකර තෝරන්න',
            close: 'වසන්න'
        },
        Table: {
            filterTitle: 'පෙරහන්',
            filterConfirm: 'හරි',
            filterReset: 'යළි සකසන්න',
            filterEmptyText: 'පෙරහන් නැත',
            filterCheckAll: 'සියළු අථක තෝරන්න',
            filterSearchPlaceholder: 'පෙරහන් තුළ සොයන්න',
            emptyText: 'දත්ත නැත',
            selectAll: 'වත්මන් පිටුව තෝරන්න',
            selectInvert: 'වත්මන් පිටුව යටියනය',
            selectNone: 'සියළු දත්ත ඉවතලන්න',
            selectionAll: 'සියළු දත්ත තෝරන්න',
            sortTitle: 'පෙළගැසීම',
            expand: 'පේළිය දිගහරින්න',
            collapse: 'පේළිය හකුළන්න',
            triggerDesc: 'අවරෝහණව පෙළගැසීමට ඔබන්න',
            triggerAsc: 'ආරෝහණව පෙළගැසීමට ඔබන්න',
            cancelSort: 'පෙළගැසීම අවලංගු කිරීමට ඔබන්න'
        },
        Tour: {
            Next: 'ඊළඟ',
            Previous: 'පෙර',
            Finish: 'අවසන් කරන්න'
        },
        Modal: {
            okText: 'හරි',
            cancelText: 'අවලංගු කරන්න',
            justOkText: 'හරි'
        },
        Popconfirm: {
            okText: 'හරි',
            cancelText: 'අවලංගු කරන්න'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'මෙතැන සොයන්න',
            itemUnit: 'අථකය',
            itemsUnit: 'අථක',
            remove: 'ඉවත් කරන්න',
            selectCurrent: 'වත්මන් පිටුව තෝරන්න',
            removeCurrent: 'වත්මන් පිටුව ඉවත් කරන්න',
            selectAll: 'සියළු දත්ත තෝරන්න',
            removeAll: 'සියළු දත්ත ඉවතලන්න',
            selectInvert: 'වත්මන් පිටුව යටියනය'
        },
        Upload: {
            uploading: 'උඩුගත වෙමින්...',
            removeFile: 'ගොනුව ඉවතලන්න',
            uploadError: 'උඩුගත වීමේ දෝෂයකි',
            previewFile: 'ගොනුවේ පෙරදසුන',
            downloadFile: 'ගොනුව බාගන්න'
        },
        Empty: {
            description: 'දත්ත නැත'
        },
        Icon: {
            icon: 'නිරූපකය'
        },
        Text: {
            edit: 'සංස්කරණය',
            copy: 'පිටපත්',
            copied: 'පිටපත් විය',
            expand: 'විහිදුවන්න'
        },
        Form: {
            optional: '(විකල්පයකි)',
            defaultValidateMessages: {
                default: '${label} සඳහා ක්‍ෂේත්‍රය වලංගුකරණයේ දෝෂයකි',
                required: '${label} ඇතුල් කරන්න',
                enum: '[${enum}] වලින් එකක් ${label} විය යුතුය',
                whitespace: '${label} හිස් අකුරක් නොවිය යුතුය',
                date: {
                    format: '${label} දිනයේ ආකෘතිය වැරදිය',
                    parse: '${label} දිනයකට පරිවර්තනය කළ නොහැකිය',
                    invalid: '${label} වලංගු නොවන දිනයකි'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} අකුරු ${len}ක් විය යුතුය',
                    min: '${label} අවමය අකුරු ${min}ක් විය යුතුය',
                    max: '${label} අකුරු ${max}ක් දක්වා විය යුතුය',
                    range: '${label} අකුරු ${min}-${max}ක් අතර විය යුතුය'
                },
                number: {
                    len: '${label} නිසැකව ${len} සමාන විය යුතුය',
                    min: '${label} අවමය ${min} විය යුතුය',
                    max: '${label} උපරිමය ${max} විය යුතුය',
                    range: '${label} නිසැකව ${min}-${max} අතර විය යුතුය'
                },
                array: {
                    len: '${len} ${label} විය යුතුය',
                    min: 'අවම වශයෙන් ${min} ${label}',
                    max: 'උපරිම වශයෙන් ${max} ${label}',
                    range: '${label} ගණන ${min}-${max} අතර විය යුතුය'
                },
                pattern: {
                    mismatch: '${pattern} රටාවට ${label} නොගැළපේ'
                }
            }
        },
        Image: {
            preview: 'පෙරදසුන'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    3987: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ strana',
        jump_to: 'Choď na',
        jump_to_confirm: 'potvrdit',
        page: '',
        // Pagination
        prev_page: 'Predchádzajúca strana',
        next_page: 'Nasledujúca strana',
        prev_5: 'Predchádzajúcich 5 strán',
        next_5: 'Nasledujúcich 5 strán',
        prev_3: 'Predchádzajúce 3 strany',
        next_3: 'Nasledujúce 3 strany',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    1465: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'sk_SK',
        today: 'Dnes',
        now: 'Teraz',
        backToToday: 'Späť na dnes',
        ok: 'OK',
        clear: 'Vymazať',
        week: 'Týždeň',
        month: 'Mesiac',
        year: 'Rok',
        timeSelect: 'Vybrať čas',
        dateSelect: 'Vybrať dátum',
        monthSelect: 'Vybrať mesiac',
        yearSelect: 'Vybrať rok',
        decadeSelect: 'Vybrať dekádu',
        dateFormat: 'D.M.YYYY',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        previousMonth: 'Predchádzajúci mesiac (PageUp)',
        nextMonth: 'Nasledujúci mesiac (PageDown)',
        previousYear: 'Predchádzajúci rok (Control + left)',
        nextYear: 'Nasledujúci rok (Control + right)',
        previousDecade: 'Predchádzajúca dekáda',
        nextDecade: 'Nasledujúca dekáda',
        previousCentury: 'Predchádzajúce storočie',
        nextCentury: 'Nasledujúce storočie'
    });
    var _default = exports.default = locale;
    }}),
    5803: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/sk_SK.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 5803);
    var __TURBOPACK__imported__module__3987__ = __turbopack_context__.i(3987);
    // MERGED MODULE: [project]/components/calendar/locale/sk_SK.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/sk_SK.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__1465__ = __turbopack_context__.i(1465);
    // MERGED MODULE: [project]/components/time-picker/locale/sk_SK.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Vybrať čas'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // 统一合并为完整的 Locale
    const locale1 = {
        lang: {
            placeholder: 'Vybrať dátum',
            rangePlaceholder: [
                'Od',
                'Do'
            ],
            ...__TURBOPACK__imported__module__1465__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} nie je platný ${type}';
    const localeValues = {
        locale: 'sk',
        Pagination: __TURBOPACK__imported__module__3987__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Prosím vyber',
            close: 'Zavrieť'
        },
        Table: {
            filterTitle: 'Filter',
            filterConfirm: 'OK',
            filterReset: 'Obnoviť',
            filterEmptyText: 'Žiadne filtre',
            filterCheckAll: 'Vyber všetky položky',
            filterSearchPlaceholder: 'Vyhľadaj vo filtroch',
            emptyText: 'Žiadne dáta',
            selectAll: 'Označ všetky položky',
            selectInvert: 'Opačný výber položiek',
            selectNone: 'Odznač všetko',
            selectionAll: 'Označ všetko',
            sortTitle: 'Zoradiť',
            expand: 'Rozbaliť riadok',
            collapse: 'Zbaliť riadok',
            triggerDesc: 'Kliknutím zoradíš zostupne',
            triggerAsc: 'Kliknutím zoradíš vzostupne',
            cancelSort: 'Kliknutím zrušíš zoradenie'
        },
        Tour: {
            Next: 'Ďalej',
            Previous: 'Späť',
            Finish: 'Dokončiť'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Zrušiť',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Zrušiť'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Vyhľadávanie',
            itemUnit: 'položka',
            itemsUnit: 'položiek',
            remove: 'Odstráň',
            selectCurrent: 'Vyber aktuálnu stranu',
            removeCurrent: 'Zmaž aktuálnu stranu',
            selectAll: 'Označ všetko',
            removeAll: 'Odznač všetko',
            selectInvert: 'Opačný výber'
        },
        Upload: {
            uploading: 'Nahrávanie...',
            removeFile: 'Odstrániť súbor',
            uploadError: 'Chyba pri nahrávaní',
            previewFile: 'Zobraziť súbor',
            downloadFile: 'Stiahnuť súbor'
        },
        Empty: {
            description: 'Žiadne dáta'
        },
        Icon: {
            icon: 'ikona'
        },
        Text: {
            edit: 'Upraviť',
            copy: 'Kopírovať',
            copied: 'Skopírované',
            expand: 'Zväčšiť'
        },
        Form: {
            optional: '(nepovinné)',
            defaultValidateMessages: {
                default: 'Validačná chyba poľa pre ${label}',
                required: 'Prosím vlož ${label}',
                enum: '${label} musí byť jeden z [${enum}]',
                whitespace: '${label} nemôže byť prázdny znak',
                date: {
                    format: '${label} formát dátumu je neplatný',
                    parse: '${label} nie je možné konvertovať na dátum',
                    invalid: '${label} je neplatný dátum'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} musí byť ${len} znakov',
                    min: '${label} musí byť aspoň ${min} znakov',
                    max: '${label} musí byť do ${max} znakov',
                    range: '${label} musí byť medzi ${min}-${max} znakmi'
                },
                number: {
                    len: '${label} musí byť rovnaký ako ${len}',
                    min: '${label} musí byť minimálne ${min}',
                    max: '${label} musí byť maximálne ${max}',
                    range: '${label} musí byť medzi ${min}-${max}'
                },
                array: {
                    len: 'Musí byť ${len} ${label}',
                    min: 'Aspoň ${min} ${label}',
                    max: 'Najviac ${max} ${label}',
                    range: 'Počet ${label} musí byť medzi ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} nezodpovedá vzoru ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Náhľad'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    4571: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ strani',
        jump_to: 'Pojdi na',
        jump_to_confirm: 'potrdi',
        page: '',
        // Pagination
        prev_page: 'Prejšnja stran',
        next_page: 'Naslednja stran',
        prev_5: 'Prejšnjih 5 strani',
        next_5: 'Naslednjih 5 strani',
        prev_3: 'Prejšnje 3 strani',
        next_3: 'Naslednje 3 strani',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    6872: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/sl_SI.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 6872);
    var __TURBOPACK__imported__module__4571__ = __turbopack_context__.i(4571);
    // MERGED MODULE: [project]/components/calendar/locale/sl_SI.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/sl_SI.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/time-picker/locale/sl_SI.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Izberite čas'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            locale: 'sl',
            placeholder: 'Izberite datum',
            rangePlaceholder: [
                'Začetni datum',
                'Končni datum'
            ],
            today: 'Danes',
            now: 'Trenutno',
            backToToday: 'Nazaj na trenutni datum',
            ok: 'OK',
            clear: 'Počisti',
            week: 'Teden',
            month: 'Mesec',
            year: 'Leto',
            timeSelect: 'Izberi čas',
            dateSelect: 'Izberi datum',
            monthSelect: 'Izberite mesec',
            yearSelect: 'Izberite leto',
            decadeSelect: 'Izberite desetletje',
            yearFormat: 'YYYY',
            monthFormat: 'MMMM',
            monthBeforeYear: true,
            previousMonth: 'Prejšnji mesec (PageUp)',
            nextMonth: 'Naslednji mesec (PageDown)',
            previousYear: 'Lansko leto (Control + left)',
            nextYear: 'Naslednje leto (Control + right)',
            previousDecade: 'Prejšnje desetletje',
            nextDecade: 'Naslednje desetletje',
            previousCentury: 'Zadnje stoletje',
            nextCentury: 'Naslednje stoletje'
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const localeValues = {
        locale: 'sl',
        Pagination: __TURBOPACK__imported__module__4571__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            close: 'Zapri'
        },
        Table: {
            filterTitle: 'Filter',
            filterConfirm: 'Filtriraj',
            filterReset: 'Pobriši filter',
            selectAll: 'Izberi vse na trenutni strani',
            selectInvert: 'Obrni izbor na trenutni strani'
        },
        Tour: {
            Next: 'Naprej',
            Previous: 'Prejšnje',
            Finish: 'Končaj'
        },
        Modal: {
            okText: 'V redu',
            cancelText: 'Prekliči',
            justOkText: 'V redu'
        },
        Popconfirm: {
            okText: 'v redu',
            cancelText: 'Prekliči'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Išči tukaj',
            itemUnit: 'Objekt',
            itemsUnit: 'Objektov'
        },
        Upload: {
            uploading: 'Nalaganje...',
            removeFile: 'Odstrani datoteko',
            uploadError: 'Napaka pri nalaganju',
            previewFile: 'Predogled datoteke',
            downloadFile: 'Prenos datoteke'
        },
        Empty: {
            description: 'Ni podatkov'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    8523: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ strani',
        jump_to: 'Idi na',
        page: '',
        // Pagination
        prev_page: 'Prethodna strana',
        next_page: 'Sledeća strana',
        prev_5: 'Prethodnih 5 Strana',
        next_5: 'Sledećih 5 Strana',
        prev_3: 'Prethodnih 3 Strane',
        next_3: 'Sledećih 3 Strane',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    8610: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'sr_RS',
        today: 'Danas',
        now: 'Sada',
        backToToday: 'Vrati se na danas',
        ok: 'U redu',
        clear: 'Obriši',
        week: 'Nedelja',
        month: 'Mesec',
        year: 'Godina',
        timeSelect: 'Izaberi vreme',
        dateSelect: 'Izaberi datum',
        monthSelect: 'Izaberi mesec',
        yearSelect: 'Izaberi godinu',
        decadeSelect: 'Izaberi deceniju',
        dateFormat: 'DD.MM.YYYY',
        dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
        previousMonth: 'Prethodni mesec (PageUp)',
        nextMonth: 'Sledeći mesec (PageDown)',
        previousYear: 'Prethodna godina (Control + left)',
        nextYear: 'Sledeća godina (Control + right)',
        previousDecade: 'Prethodna decenija',
        nextDecade: 'Sledeća decenija',
        previousCentury: 'Prethodni vek',
        nextCentury: 'Sledeći vek'
    });
    var _default = exports.default = locale;
    }}),
    1472: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/sr_RS.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 1472);
    var __TURBOPACK__imported__module__8523__ = __turbopack_context__.i(8523);
    // MERGED MODULE: [project]/components/calendar/locale/sr_RS.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/sr_RS.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__8610__ = __turbopack_context__.i(8610);
    // MERGED MODULE: [project]/components/time-picker/locale/sr_RS.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Izaberi vreme',
        rangePlaceholder: [
            'Vreme početka',
            'Vreme završetka'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Izaberi datum',
            yearPlaceholder: 'Izaberi godinu',
            quarterPlaceholder: 'Izaberi tromesečje',
            monthPlaceholder: 'Izaberi mesec',
            weekPlaceholder: 'Izaberi sedmicu',
            rangePlaceholder: [
                'Datum početka',
                'Datum završetka'
            ],
            rangeYearPlaceholder: [
                'Godina početka',
                'Godina završetka'
            ],
            rangeMonthPlaceholder: [
                'Mesec početka',
                'Mesec završetka'
            ],
            rangeWeekPlaceholder: [
                'Sedmica početka',
                'Sedmica završetka'
            ],
            ...__TURBOPACK__imported__module__8610__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} nije važeći ${type}';
    const localeValues = {
        locale: 'sr',
        Pagination: __TURBOPACK__imported__module__8523__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Izaberi',
            close: 'Zatvori'
        },
        Table: {
            filterTitle: 'Meni filtera',
            filterConfirm: 'U redu',
            filterReset: 'Poništi',
            filterEmptyText: 'Nema filtera',
            emptyText: 'Nema podataka',
            selectAll: 'Izaberi trenutnu stranicu',
            selectInvert: 'Obrni izbor trenutne stranice',
            selectNone: 'Obriši sve podatke',
            selectionAll: 'Izaberi sve podatke',
            sortTitle: 'Sortiraj',
            expand: 'Proširi red',
            collapse: 'Skupi red',
            triggerDesc: 'Klikni da sortiraš po padajućem redosledu',
            triggerAsc: 'Klikni da sortiraš po rastućem redosledu',
            cancelSort: 'Klikni da otkažeš sortiranje'
        },
        Tour: {
            Next: 'Sledeće',
            Previous: 'Prethodno',
            Finish: 'Završi'
        },
        Modal: {
            okText: 'U redu',
            cancelText: 'Otkaži',
            justOkText: 'U redu'
        },
        Popconfirm: {
            okText: 'U redu',
            cancelText: 'Otkaži'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Pretraži ovde',
            itemUnit: 'stavka',
            itemsUnit: 'stavki',
            remove: 'Ukloni',
            selectCurrent: 'Izaberi trenutnu stranicu',
            removeCurrent: 'Ukloni trenutnu stranicu',
            selectAll: 'Izaberi sve podatke',
            removeAll: 'Ukloni sve podatke',
            selectInvert: 'Obrni izbor trenutne stranice'
        },
        Upload: {
            uploading: 'Otpremanje...',
            removeFile: 'Ukloni datoteku',
            uploadError: 'Greška pri otpremanju',
            previewFile: 'Pregledaj datoteku',
            downloadFile: 'Preuzmi datoteku'
        },
        Empty: {
            description: 'Nema podataka'
        },
        Icon: {
            icon: 'ikona'
        },
        Text: {
            edit: 'Uredi',
            copy: 'Kopiraj',
            copied: 'Kopirano',
            expand: 'Proširi'
        },
        Form: {
            optional: '(opcionalno)',
            defaultValidateMessages: {
                default: 'Greška pri proveri valjanosti za ${label}',
                required: 'Unesi ${label}',
                enum: '${label} mora da bude nešto od [${enum}]',
                whitespace: '${label} ne može biti prazan znak',
                date: {
                    format: '${label} format datuma je nevažeći',
                    parse: '${label} se ne može konvertovati u datum',
                    invalid: '${label} je nevažeći datum'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} mora da sadrži ${len} znakova',
                    min: '${label} mora da sadrži bar ${min} znakova',
                    max: '${label} mora da sadrži do ${max} znakova',
                    range: '${label} mora da sadrži između ${min} i ${max} znakova'
                },
                number: {
                    len: '${label} mora biti jednak ${len}',
                    min: '${label} mora biti najmanje ${min}',
                    max: '${label} mora biti najviše ${max}',
                    range: '${label} mora biti između ${min} i ${max}'
                },
                array: {
                    len: 'Mora biti ${len} ${label}',
                    min: 'Najmanje ${min} ${label}',
                    max: 'najviše ${max} ${label}',
                    range: 'Iznos ${label} mora biti između ${min} i ${max}'
                },
                pattern: {
                    mismatch: '${label} ne odgovara obrascu ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Pregled'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    9795: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ sida',
        jump_to: 'Gå till',
        jump_to_confirm: 'bekräfta',
        page: 'Sida',
        // Pagination
        prev_page: 'Föreg sida',
        next_page: 'Nästa sida',
        prev_5: 'Föreg 5 sidor',
        next_5: 'Nästa 5 sidor',
        prev_3: 'Föreg 3 sidor',
        next_3: 'Nästa 3 sidor',
        page_size: 'sidstorlek'
    };
    var _default = exports.default = locale;
    }}),
    6160: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'sv_SE',
        today: 'I dag',
        now: 'Nu',
        backToToday: 'Till idag',
        ok: 'OK',
        clear: 'Avbryt',
        week: 'Vecka',
        month: 'Månad',
        year: 'År',
        timeSelect: 'Välj tidpunkt',
        dateSelect: 'Välj datum',
        monthSelect: 'Välj månad',
        yearSelect: 'Välj år',
        decadeSelect: 'Välj årtionde',
        dateFormat: 'YYYY-MM-DD',
        dateTimeFormat: 'YYYY-MM-DD H:mm:ss',
        previousMonth: 'Förra månaden (PageUp)',
        nextMonth: 'Nästa månad (PageDown)',
        previousYear: 'Föreg år (Control + left)',
        nextYear: 'Nästa år (Control + right)',
        previousDecade: 'Föreg årtionde',
        nextDecade: 'Nästa årtionde',
        previousCentury: 'Föreg århundrade',
        nextCentury: 'Nästa århundrade'
    });
    var _default = exports.default = locale;
    }}),
    7601: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/sv_SE.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 7601);
    var __TURBOPACK__imported__module__9795__ = __turbopack_context__.i(9795);
    // MERGED MODULE: [project]/components/calendar/locale/sv_SE.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/sv_SE.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__6160__ = __turbopack_context__.i(6160);
    // MERGED MODULE: [project]/components/time-picker/locale/sv_SE.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Välj tid'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Välj datum',
            yearPlaceholder: 'Välj år',
            quarterPlaceholder: 'Välj kvartal',
            monthPlaceholder: 'Välj månad',
            weekPlaceholder: 'Välj vecka',
            rangePlaceholder: [
                'Startdatum',
                'Slutdatum'
            ],
            rangeYearPlaceholder: [
                'Startår',
                'Slutår'
            ],
            rangeMonthPlaceholder: [
                'Startmånad',
                'Slutmånad'
            ],
            rangeWeekPlaceholder: [
                'Startvecka',
                'Slutvecka'
            ],
            ...__TURBOPACK__imported__module__6160__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} är inte en giltig ${type}';
    const localeValues = {
        locale: 'sv',
        Pagination: __TURBOPACK__imported__module__9795__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Vänligen välj',
            close: 'Stäng'
        },
        Table: {
            filterTitle: 'Filtermeny',
            filterConfirm: 'OK',
            filterReset: 'Återställ',
            filterEmptyText: 'Inga filter',
            filterCheckAll: 'Markera alla objekt',
            filterSearchPlaceholder: 'Sök i filter',
            emptyText: 'Ingen data',
            selectAll: 'Markera nuvarande sida',
            selectInvert: 'Invertera nuvarande sida',
            selectNone: 'Avmarkera all data',
            selectionAll: 'Markera all data',
            sortTitle: 'Sortera',
            expand: 'Expandera rad',
            collapse: 'Komprimera rad',
            triggerDesc: 'Klicka för att sortera i fallande ordning',
            triggerAsc: 'Klicka för att sortera i stigande ordning',
            cancelSort: 'Klicka för att avbryta sortering'
        },
        Tour: {
            Next: 'Nästa',
            Previous: 'Föregående',
            Finish: 'Avsluta'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Avbryt',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Avbryt'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Sök här',
            itemUnit: 'objekt',
            itemsUnit: 'objekt',
            remove: 'Ta bort',
            selectCurrent: 'Markera nuvarande sida',
            removeCurrent: 'Ta bort nuvarande sida',
            selectAll: 'Markera all data',
            removeAll: 'Ta bort all data',
            selectInvert: 'Invertera nuvarande sida'
        },
        Upload: {
            uploading: 'Laddar upp...',
            removeFile: 'Ta bort fil',
            uploadError: 'Uppladdningsfel',
            previewFile: 'Förhandsgranska fil',
            downloadFile: 'Ladda ned fil'
        },
        Empty: {
            description: 'Ingen data'
        },
        Icon: {
            icon: 'ikon'
        },
        Text: {
            edit: 'Redigera',
            copy: 'Kopiera',
            copied: 'Kopierad',
            expand: 'Expandera'
        },
        Form: {
            optional: '(valfritt)',
            defaultValidateMessages: {
                default: 'Fältvalideringsfel för ${label}',
                required: 'Vänligen fyll i ${label}',
                enum: '${label} måste vara en av [${enum}]',
                whitespace: '${label} kan inte vara ett tomt tecken',
                date: {
                    format: '${label} datumformatet är ogiltigt',
                    parse: '${label} kan inte konverteras till ett datum',
                    invalid: '${label} är ett ogiltigt datum'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} måste vara ${len} tecken',
                    min: '${label} måste vara minst ${min} tecken',
                    max: '${label} måste vara högst ${max} tecken',
                    range: '${label} måste vara mellan ${min}-${max} tecken'
                },
                number: {
                    len: '${label} måste vara lika med ${len}',
                    min: '${label} måste vara minst ${min}',
                    max: '${label} måste vara högst ${max}',
                    range: '${label} måste vara mellan ${min}-${max}'
                },
                array: {
                    len: 'Måste vara ${len} ${label}',
                    min: 'Minst ${min} ${label}',
                    max: 'Högst ${max} ${label}',
                    range: 'Antal ${label} måste vara mellan ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} stämmer inte överens med mönstret ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Förhandsgranska'
        },
        QRCode: {
            expired: 'QR-koden har upphört att gälla',
            refresh: 'Uppdatera'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    2273: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ பக்கம்',
        jump_to: 'அடுத்த',
        jump_to_confirm: 'உறுதிப்படுத்தவும்',
        page: '',
        // Pagination
        prev_page: 'முந்தைய பக்கம்',
        next_page: 'அடுத்த பக்கம்',
        prev_5: 'முந்தைய 5 பக்கங்கள்',
        next_5: 'அடுத்த 5 பக்கங்கள்',
        prev_3: 'முந்தைய 3 பக்கங்கள்',
        next_3: 'அடுத்த 3 பக்கங்கள்',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    5401: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ta_IN',
        today: 'இன்று',
        now: 'இப்போது',
        backToToday: 'இன்றுக்கு திரும்பு',
        ok: 'சரி',
        clear: 'அழி',
        week: 'வாரம்',
        month: 'மாதம்',
        year: 'வருடம்',
        timeSelect: 'நேரத்தைத் தேர்ந்தெடு',
        dateSelect: 'தேதியைத் தேர்ந்தெடு',
        weekSelect: 'வாரத்தைத் தேர்வுசெய்க',
        monthSelect: 'மாதத்தைத் தேர்வுசெய்க',
        yearSelect: 'வருடத்தைத் தேர்வுசெய்க',
        decadeSelect: 'தசாப்தத்தைத் தேர்வுசெய்க',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'முந்தைய மாதம் (PageUp)',
        nextMonth: 'அடுத்த மாதம் (PageDown)',
        previousYear: 'முந்தைய வருடம் (Control + left)',
        nextYear: 'அடுத்த வருடம் (Control + right)',
        previousDecade: 'முந்தைய தசாப்தம்',
        nextDecade: 'அடுத்த தசாப்தம்',
        previousCentury: 'முந்தைய நூற்றாண்டு',
        nextCentury: 'அடுத்த நூற்றாண்டு'
    });
    var _default = exports.default = locale;
    }}),
    6030: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ta_IN.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 6030);
    var __TURBOPACK__imported__module__2273__ = __turbopack_context__.i(2273);
    // MERGED MODULE: [project]/components/calendar/locale/ta_IN.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ta_IN.ts [library] (ecmascript)
    ;
    // Tamil Locale added to rc-calendar
    var __TURBOPACK__imported__module__5401__ = __turbopack_context__.i(5401);
    // MERGED MODULE: [project]/components/time-picker/locale/ta_IN.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'நேரத்தைத் தேர்ந்தெடுக்கவும்'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
            rangePlaceholder: [
                'தொடக்க தேதி',
                'கடைசி தேதி'
            ],
            quarterPlaceholder: 'காலாண்டைத் தேர்ந்தெடுக்கவும்',
            monthPlaceholder: 'மாதத்தைத் தேர்ந்தெடுக்கவும்',
            weekPlaceholder: 'வாரத்தைத் தேர்ந்தெடுக்கவும்',
            rangeYearPlaceholder: [
                'தொடக்க ஆண்டு',
                'இறுதி ஆண்டு'
            ],
            rangeQuarterPlaceholder: [
                'காலாண்டு தொடக்கம்',
                'இறுதி காலாண்டு'
            ],
            rangeMonthPlaceholder: [
                'தொடக்க மாதம்',
                'இறுதி மாதம்'
            ],
            rangeWeekPlaceholder: [
                'வாரம் தொடங்கு',
                'இறுதி வாரம்'
            ],
            ...__TURBOPACK__imported__module__5401__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} is not a valid ${type}';
    const localeValues = {
        locale: 'ta',
        Pagination: __TURBOPACK__imported__module__2273__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        // locales for all comoponents
        global: {
            placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
            close: 'மூடு'
        },
        Table: {
            filterTitle: 'பட்டியலை மூடு',
            filterConfirm: 'சரி',
            filterReset: 'மீட்டமை',
            emptyText: 'தகவல் இல்லை',
            selectAll: 'அனைத்தையும் தேர்வுசெய்',
            selectInvert: 'தலைகீழாக மாற்று',
            sortTitle: 'தலைப்பை வரிசைப்படுத்தவும்',
            filterEmptyText: 'No filters',
            filterCheckAll: 'அனைத்து பொருட்களையும் தேர்ந்தெடுக்கவும்',
            filterSearchPlaceholder: 'வடிப்பான்களில் தேடவும்',
            expand: 'வரிசையை விரிவாக்கு',
            collapse: 'வரிசையைச் சுருக்கு',
            triggerDesc: 'இறங்குவரிசையை வரிசைப்படுத்த கிளிக் செய்யவும்',
            triggerAsc: 'ஏறுவரிசையில் வரிசைப்படுத்த கிளிக் செய்யவும்',
            cancelSort: 'வரிசையாக்கத்தை ரத்து செய்ய கிளிக் செய்யவும்'
        },
        Tour: {
            Next: 'அடுத்தது',
            Previous: 'முந்தையது',
            Finish: 'முடிக்கவும்'
        },
        Modal: {
            okText: 'சரி',
            cancelText: 'ரத்து செய்யவும்',
            justOkText: 'பரவாயில்லை, சரி'
        },
        Popconfirm: {
            okText: 'சரி',
            cancelText: 'ரத்து செய்யவும்'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            notFoundContent: 'உள்ளடக்கம் கிடைக்கவில்லை',
            searchPlaceholder: 'இங்கு தேடவும்',
            itemUnit: 'தகவல்',
            itemsUnit: 'தகவல்கள்'
        },
        Upload: {
            uploading: 'பதிவேற்றுகிறது...',
            removeFile: 'கோப்பை அகற்று',
            uploadError: 'பதிவேற்றுவதில் பிழை',
            previewFile: 'கோப்பை முன்னோட்டமிடுங்கள்',
            downloadFile: 'பதிவிறக்க கோப்பு'
        },
        Empty: {
            description: 'தகவல் இல்லை'
        },
        Icon: {
            icon: 'உருவம்'
        },
        Text: {
            edit: 'திருத்து',
            copy: 'நகல் எடு',
            copied: 'நகல் எடுக்கப்பட்டது',
            expand: 'விரிவாக்கவும்'
        },
        Form: {
            optional: '(optional)',
            defaultValidateMessages: {
                default: '${label}க்கான புல சரிபார்ப்பு பிழை',
                required: '${label} ஐ உள்ளிடவும்',
                enum: '${label} கண்டிப்பாக [${enum}] இல் ஒன்றாக இருக்க வேண்டும்',
                whitespace: '${label} வெற்று எழுத்தாக இருக்கக்கூடாது',
                date: {
                    format: '${label} தேதி வடிவம் தவறானது',
                    parse: '${label}ஐ தேதியாக மாற்ற முடியாது',
                    invalid: '${label} என்பது தவறான தேதி'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} கண்டிப்பாக ${len} எழுத்துகளாக இருக்க வேண்டும்',
                    min: '${label} குறைந்தது ${min} எழுத்துகளாக இருக்க வேண்டும்',
                    max: '${label} ${max} எழுத்துகள் வரை இருக்க வேண்டும்',
                    range: '${label} கண்டிப்பாக ${min}-${max} எழுத்துகளுக்கு இடையில் இருக்க வேண்டும்'
                },
                number: {
                    len: '${label} கண்டிப்பாக ${len}க்கு சமமாக இருக்க வேண்டும்',
                    min: '${label} குறைந்தபட்சம் ${min} ஆக இருக்க வேண்டும்',
                    max: '${label} அதிகபட்சம் ${max} ஆக இருக்க வேண்டும்',
                    range: '${label} கண்டிப்பாக ${min}-${max} இடையே இருக்க வேண்டும்'
                },
                array: {
                    len: '${len} ${label} ஆக இருக்க வேண்டும்',
                    min: 'குறைந்தது ${min} ${label}',
                    max: 'அதிகபட்சம் ${max} ${label}',
                    range: '${label} இன் தொகை கண்டிப்பாக ${min}-${max} இடையே இருக்க வேண்டும்'
                },
                pattern: {
                    mismatch: '${label} ஆனது ${pattern} வடிவத்துடன் பொருந்தவில்லை'
                }
            }
        },
        Image: {
            preview: 'முன்னோட்ட'
        },
        QRCode: {
            expired: 'QR குறியீடு காலாவதியானது',
            refresh: 'புதுப்பிப்பு'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    2533: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ หน้า',
        jump_to: 'ไปยัง',
        jump_to_confirm: 'ยืนยัน',
        page: 'หน้า',
        // Pagination
        prev_page: 'หน้าก่อนหน้า',
        next_page: 'หน้าถัดไป',
        prev_5: 'ย้อนกลับ 5 หน้า',
        next_5: 'ถัดไป 5 หน้า',
        prev_3: 'ย้อนกลับ 3 หน้า',
        next_3: 'ถัดไป 3 หน้า',
        page_size: 'ขนาดหน้า'
    };
    var _default = exports.default = locale;
    }}),
    5748: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'th_TH',
        today: 'วันนี้',
        now: 'ตอนนี้',
        backToToday: 'กลับไปยังวันนี้',
        ok: 'ตกลง',
        clear: 'ลบล้าง',
        week: 'สัปดาห์',
        month: 'เดือน',
        year: 'ปี',
        timeSelect: 'เลือกเวลา',
        dateSelect: 'เลือกวัน',
        monthSelect: 'เลือกเดือน',
        yearSelect: 'เลือกปี',
        decadeSelect: 'เลือกทศวรรษ',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'เดือนก่อนหน้า (PageUp)',
        nextMonth: 'เดือนถัดไป (PageDown)',
        previousYear: 'ปีก่อนหน้า (Control + left)',
        nextYear: 'ปีถัดไป (Control + right)',
        previousDecade: 'ทศวรรษก่อนหน้า',
        nextDecade: 'ทศวรรษถัดไป',
        previousCentury: 'ศตวรรษก่อนหน้า',
        nextCentury: 'ศตวรรษถัดไป'
    });
    var _default = exports.default = locale;
    }}),
    9118: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/th_TH.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 9118);
    var __TURBOPACK__imported__module__2533__ = __turbopack_context__.i(2533);
    // MERGED MODULE: [project]/components/calendar/locale/th_TH.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/th_TH.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__5748__ = __turbopack_context__.i(5748);
    // MERGED MODULE: [project]/components/time-picker/locale/th_TH.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'เลือกเวลา'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'เลือกวันที่',
            yearPlaceholder: 'เลือกปี',
            quarterPlaceholder: 'เลือกไตรมาส',
            monthPlaceholder: 'เลือกเดือน',
            weekPlaceholder: 'เลือกสัปดาห์',
            rangePlaceholder: [
                'วันเริ่มต้น',
                'วันสิ้นสุด'
            ],
            rangeYearPlaceholder: [
                'ปีเริ่มต้น',
                'ปีสิ้นสุด'
            ],
            rangeMonthPlaceholder: [
                'เดือนเริ่มต้น',
                'เดือนสิ้นสุด'
            ],
            rangeWeekPlaceholder: [
                'สัปดาห์เริ่มต้น',
                'สัปดาห์สิ้นสุด'
            ],
            ...__TURBOPACK__imported__module__5748__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} ไม่ใช่ ${type} ที่ถูกต้อง';
    const localeValues = {
        locale: 'th',
        Pagination: __TURBOPACK__imported__module__2533__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'กรุณาเลือก',
            close: 'ปิด'
        },
        Table: {
            filterTitle: 'ตัวกรอง',
            filterConfirm: 'ยืนยัน',
            filterReset: 'รีเซ็ต',
            filterEmptyText: 'ไม่มีตัวกรอง',
            filterCheckAll: 'เลือกรายการทั้งหมด',
            filterSearchPlaceholder: 'ค้นหาตัวกรอง',
            emptyText: 'ไม่มีข้อมูล',
            selectAll: 'เลือกทั้งหมดในหน้านี้',
            selectInvert: 'กลับสถานะการเลือกในหน้านี้',
            selectNone: 'ไม่เลือกข้อมูลทั้งหมด',
            selectionAll: 'เลือกข้อมูลทั้งหมด',
            sortTitle: 'เรียง',
            expand: 'แสดงแถวข้อมูล',
            collapse: 'ย่อแถวข้อมูล',
            triggerDesc: 'คลิกเรียงจากมากไปน้อย',
            triggerAsc: 'คลิกเรียงจากน้อยไปมาก',
            cancelSort: 'คลิกเพื่อยกเลิกการเรียง'
        },
        Tour: {
            Next: 'ถัดไป',
            Previous: 'ย้อนกลับ',
            Finish: 'เสร็จสิ้น'
        },
        Modal: {
            okText: 'ตกลง',
            cancelText: 'ยกเลิก',
            justOkText: 'ตกลง'
        },
        Popconfirm: {
            okText: 'ตกลง',
            cancelText: 'ยกเลิก'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'ค้นหา',
            itemUnit: 'ชิ้น',
            itemsUnit: 'ชิ้น',
            remove: 'นำออก',
            selectCurrent: 'เลือกทั้งหมดในหน้านี้',
            removeCurrent: 'นำออกทั้งหมดในหน้านี้',
            selectAll: 'เลือกข้อมูลทั้งหมด',
            deselectAll: 'ยกเลิกการเลือกทั้งหมด',
            removeAll: 'นำข้อมูลออกทั้งหมด',
            selectInvert: 'กลับสถานะการเลือกในหน้านี้'
        },
        Upload: {
            uploading: 'กำลังอัปโหลด...',
            removeFile: 'ลบไฟล์',
            uploadError: 'เกิดข้อผิดพลาดในการอัปโหลด',
            previewFile: 'ดูตัวอย่างไฟล์',
            downloadFile: 'ดาวน์โหลดไฟล์'
        },
        Empty: {
            description: 'ไม่มีข้อมูล'
        },
        Icon: {
            icon: 'ไอคอน'
        },
        Text: {
            edit: 'แก้ไข',
            copy: 'คัดลอก',
            copied: 'คัดลอกแล้ว',
            expand: 'ขยาย',
            collapse: 'ย่อ'
        },
        Form: {
            optional: '(ไม่จำเป็น)',
            defaultValidateMessages: {
                default: 'ฟิลด์ ${label} ไม่ผ่านเงื่อนไขการตรวจสอบ',
                required: 'กรุณากรอก ${label}',
                enum: '${label} ต้องเป็นค่าใดค่าหนึ่งใน [${enum}]',
                whitespace: '${label} ไม่สามารถเป็นช่องว่างได้',
                date: {
                    format: 'รูปแบบวันที่ ${label} ไม่ถูกต้อง',
                    parse: '${label} ไม่สามารถแปลงเป็นวันที่ได้',
                    invalid: '${label} เป็นวันที่ที่ไม่ถูกต้อง'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ต้องมี ${len} ตัวอักษร',
                    min: '${label} ต้องมีอย่างน้อย ${min} ตัวอักษร',
                    max: '${label} มีได้สูงสุด ${max} ตัวอักษร',
                    range: '${label} ต้องมี ${min}-${max} ตัวอักษร'
                },
                number: {
                    len: '${label} ต้องมี ${len} ตัว',
                    min: 'ค่าต่ำสุด ${label} คือ ${min}',
                    max: 'ค่าสูงสุด ${label} คือ ${max}',
                    range: '${label} ต้องมีค่า ${min}-${max}'
                },
                array: {
                    len: 'ต้องมี ${len} ${label}',
                    min: 'ต้องมีอย่างน้อย ${min} ${label}',
                    max: 'มีได้สูงสุด ${max} ${label}',
                    range: 'จำนวน ${label} ต้องอยู่ในช่วง ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} ไม่ตรงกับรูปแบบ ${pattern}'
                }
            }
        },
        Image: {
            preview: 'ดูตัวอย่าง'
        },
        QRCode: {
            expired: 'คิวอาร์โค้ดหมดอายุ',
            refresh: 'รีเฟรช',
            scanned: 'สแกนแล้ว'
        },
        ColorPicker: {
            presetEmpty: 'ไม่มีข้อมูล',
            transparent: 'โปร่งใส',
            singleColor: 'สีเดียว',
            gradientColor: 'สีไล่ระดับ'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    4944: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ sahypa',
        jump_to: 'Git',
        jump_to_confirm: 'tassykla',
        page: 'Sahypa',
        // Pagination
        prev_page: 'Öňki sahypa',
        next_page: 'Soňky sahypa',
        prev_5: 'Öňki 5 sahypa',
        next_5: 'Soňky 5 sahypa',
        prev_3: 'Öňki 3 sahypa',
        next_3: 'Soňky 3 sahypa',
        page_size: 'Sahypa sany'
    };
    var _default = exports.default = locale;
    }}),
    5153: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'tk_TK',
        today: 'Şugün',
        now: 'Şuwagt',
        backToToday: 'Şugüne gaýt',
        ok: 'Bolýar',
        clear: 'Arassala',
        month: 'Aý',
        week: 'Hepde',
        year: 'Ýyl',
        timeSelect: 'Wagt saýla',
        dateSelect: 'Gün saýla',
        monthSelect: 'Aý saýla',
        yearSelect: 'Ýyl saýla',
        decadeSelect: 'On ýyllygy saýla',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Öňki aý (PageUp)',
        nextMonth: 'Soňky aý (PageDown)',
        previousYear: 'Öňki ýyl (Control + çep)',
        nextYear: 'Soňky ýyl (Control + sag)',
        previousDecade: 'Öňki on ýyl',
        nextDecade: 'Soňky on ýyl',
        previousCentury: 'Öňki asyr',
        nextCentury: 'Soňky asyr'
    });
    var _default = exports.default = locale;
    }}),
    8409: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/tk_TK.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 8409);
    var __TURBOPACK__imported__module__4944__ = __turbopack_context__.i(4944);
    // MERGED MODULE: [project]/components/calendar/locale/tk_TK.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/tk_TK.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__5153__ = __turbopack_context__.i(5153);
    // MERGED MODULE: [project]/components/time-picker/locale/tk_TK.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Wagty saýlaň',
        rangePlaceholder: [
            'Başlanýan wagty',
            'Gutarýan wagty'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    const locale1 = {
        lang: {
            placeholder: 'Wagt saýlaň',
            rangePlaceholder: [
                'Başlanýan wagty',
                'Gutarýan wagty'
            ],
            yearPlaceholder: 'Ýyl saýlaň',
            quarterPlaceholder: 'Çärýek saýlaň',
            monthPlaceholder: 'Aý saýlaň',
            weekPlaceholder: 'Hepde saýlaň',
            rangeYearPlaceholder: [
                'Başlanýan ýyly',
                'Gutarýan ýyly'
            ],
            rangeQuarterPlaceholder: [
                'Başlanýan çärýegi',
                'Gutarýan çärýegi'
            ],
            rangeMonthPlaceholder: [
                'Başlanýan aýy',
                'Gutarýan aýy'
            ],
            rangeWeekPlaceholder: [
                'Başlanýan hepdesi',
                'Gutarýan hepdesi'
            ],
            ...__TURBOPACK__imported__module__5153__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} ${type} görnüşinde däl';
    const localeValues = {
        locale: 'tk',
        Pagination: __TURBOPACK__imported__module__4944__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Saýlaň',
            close: 'Ýagty'
        },
        Table: {
            filterTitle: 'Filter',
            filterConfirm: 'Bolýar',
            filterReset: 'Arassala',
            filterEmptyText: 'Filtersiz',
            emptyText: 'Maglumat ýok',
            selectAll: 'Ählisini saýla',
            selectInvert: 'Tersini saýlaň',
            selectNone: 'Ähli maglumatlary arassala',
            selectionAll: 'Ähli maglumatlary saýla',
            sortTitle: 'Tertiple',
            expand: 'Setirleri aç',
            collapse: 'Setirleri ýygna',
            triggerDesc: 'Kemelýän tertipde tertiple',
            triggerAsc: 'Artýan tertipde tertiple',
            cancelSort: 'Tertipleri arassala'
        },
        Tour: {
            Next: 'Indiki',
            Previous: 'Öňki',
            Finish: 'Tamamla'
        },
        Modal: {
            okText: 'Bolýar',
            cancelText: 'Ýatyr',
            justOkText: 'Bolýar'
        },
        Popconfirm: {
            okText: 'Bolýar',
            cancelText: 'Ýatyr'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Gözle',
            itemUnit: 'elem.',
            itemsUnit: 'elem.',
            remove: 'Poz',
            selectAll: 'Ähli maglumatlary saýla',
            selectCurrent: 'Şu sahypany saýlaň',
            selectInvert: 'Ters tertipde görkez',
            removeAll: 'Ähli maglumatlary poz',
            removeCurrent: 'Şu sahypany poz'
        },
        Upload: {
            uploading: 'Ugradylýar...',
            removeFile: 'Faýly poz',
            uploadError: 'Ugratmakda näsazlyk ýüze çykdy',
            previewFile: 'Faýly görmek',
            downloadFile: 'Faýly ýükle'
        },
        Empty: {
            description: 'Maglumat ýok'
        },
        Icon: {
            icon: 'nyşan'
        },
        Text: {
            edit: 'Üýtgetmek',
            copy: 'Göçürmek',
            copied: 'Göçürildi',
            expand: 'Ýygnamak'
        },
        Form: {
            defaultValidateMessages: {
                default: '${label} meýdany barlanmady',
                required: '${label} meýdany giriziň',
                enum: '${label} meýdan şulardan biri bolmaly: [${enum}]',
                whitespace: '${label} meýdany boş bolup bilmeýär',
                date: {
                    format: '${label} ýalňyş wagt formaty',
                    parse: '${label} meýdany wagta çalşyp bolmady',
                    invalid: '${label} meýdany nädogry wagt'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} meýdany ${len} simwol bolmaly',
                    min: '${label} meýdany ${min} simwoldan az bolmaly däl',
                    max: '${label} meýdany ${max} simwoldan köp bolmaly däl',
                    range: '${label} meýdany ${min}-${max} simwol aralygynda bolmaly'
                },
                number: {
                    len: '${label} meýdan ${len} simwol bolmaly',
                    min: '${label} meýdany ${min} simwoldan az bolmaly däl',
                    max: '${label} meýdany ${max} simwoldan köp bolmaly däl'
                },
                array: {
                    len: '${label} meýdanynyň elementleriniň sany ${len} deň bolmaly',
                    min: '${label} meýdanynyň elementleriniň sany ${min} az bolmaly däl',
                    max: '${label} meýdanynyň elementleriniň sany ${max} köp bolmaly däl',
                    range: '${label} meýdanynyň elementleriniň sany ${min} we ${max} aralykda bolmaly'
                },
                pattern: {
                    mismatch: '${label} meýdany ${pattern} şablony bilen gabat gelmeýär'
                }
            }
        },
        Image: {
            preview: 'Öňünden görmek'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    7896: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ sayfa',
        jump_to: 'Git',
        jump_to_confirm: 'onayla',
        page: 'Sayfa',
        // Pagination
        prev_page: 'Önceki Sayfa',
        next_page: 'Sonraki Sayfa',
        prev_5: 'Önceki 5 Sayfa',
        next_5: 'Sonraki 5 Sayfa',
        prev_3: 'Önceki 3 Sayfa',
        next_3: 'Sonraki 3 Sayfa',
        page_size: 'sayfa boyutu'
    };
    var _default = exports.default = locale;
    }}),
    5053: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'tr_TR',
        today: 'Bugün',
        now: 'Şimdi',
        backToToday: 'Bugüne Geri Dön',
        ok: 'Tamam',
        clear: 'Temizle',
        week: 'Hafta',
        month: 'Ay',
        year: 'Yıl',
        timeSelect: 'Zaman Seç',
        dateSelect: 'Tarih Seç',
        monthSelect: 'Ay Seç',
        yearSelect: 'Yıl Seç',
        decadeSelect: 'On Yıl Seç',
        dateFormat: 'DD/MM/YYYY',
        dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
        previousMonth: 'Önceki Ay (PageUp)',
        nextMonth: 'Sonraki Ay (PageDown)',
        previousYear: 'Önceki Yıl (Control + Sol)',
        nextYear: 'Sonraki Yıl (Control + Sağ)',
        previousDecade: 'Önceki On Yıl',
        nextDecade: 'Sonraki On Yıl',
        previousCentury: 'Önceki Yüzyıl',
        nextCentury: 'Sonraki Yüzyıl',
        shortWeekDays: [
            'Paz',
            'Pzt',
            'Sal',
            'Çar',
            'Per',
            'Cum',
            'Cmt'
        ],
        shortMonths: [
            'Oca',
            'Şub',
            'Mar',
            'Nis',
            'May',
            'Haz',
            'Tem',
            'Ağu',
            'Eyl',
            'Eki',
            'Kas',
            'Ara'
        ]
    });
    var _default = exports.default = locale;
    }}),
    1958: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/tr_TR.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 1958);
    var __TURBOPACK__imported__module__7896__ = __turbopack_context__.i(7896);
    // MERGED MODULE: [project]/components/calendar/locale/tr_TR.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/tr_TR.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__5053__ = __turbopack_context__.i(5053);
    // MERGED MODULE: [project]/components/time-picker/locale/tr_TR.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Zaman seç',
        rangePlaceholder: [
            'Başlangıç zamanı',
            'Bitiş zamanı'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Tarih seç',
            yearPlaceholder: 'Yıl seç',
            quarterPlaceholder: 'Çeyrek seç',
            monthPlaceholder: 'Ay seç',
            weekPlaceholder: 'Hafta seç',
            rangePlaceholder: [
                'Başlangıç tarihi',
                'Bitiş tarihi'
            ],
            rangeYearPlaceholder: [
                'Başlangıç yılı',
                'Bitiş yılı'
            ],
            rangeMonthPlaceholder: [
                'Başlangıç ayı',
                'Bitiş ayı'
            ],
            rangeWeekPlaceholder: [
                'Başlangıç haftası',
                'Bitiş haftası'
            ],
            ...__TURBOPACK__imported__module__5053__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} geçerli bir ${type} değil';
    const localeValues = {
        locale: 'tr',
        Pagination: __TURBOPACK__imported__module__7896__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Lütfen seçiniz',
            close: 'Kapat'
        },
        Table: {
            filterTitle: 'Filtre menüsü',
            filterConfirm: 'Tamam',
            filterReset: 'Sıfırla',
            filterEmptyText: 'Filtre yok',
            filterCheckAll: 'Tümünü seç',
            selectAll: 'Tüm sayfayı seç',
            selectInvert: 'Tersini seç',
            selectionAll: 'Tümünü seç',
            sortTitle: 'Sırala',
            expand: 'Satırı genişlet',
            collapse: 'Satırı daralt',
            triggerDesc: 'Azalan düzende sırala',
            triggerAsc: 'Artan düzende sırala',
            cancelSort: 'Sıralamayı kaldır'
        },
        Tour: {
            Next: 'Sonraki',
            Previous: 'Önceki',
            Finish: 'Bitir'
        },
        Modal: {
            okText: 'Tamam',
            cancelText: 'İptal',
            justOkText: 'Tamam'
        },
        Popconfirm: {
            okText: 'Tamam',
            cancelText: 'İptal'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Arama',
            itemUnit: 'Öğe',
            itemsUnit: 'Öğeler',
            remove: 'Kaldır',
            selectCurrent: 'Tüm sayfayı seç',
            removeCurrent: 'Sayfayı kaldır',
            selectAll: 'Tümünü seç',
            deselectAll: 'Tümünün seçimini kaldır',
            removeAll: 'Tümünü kaldır',
            selectInvert: 'Tersini seç'
        },
        Upload: {
            uploading: 'Yükleniyor...',
            removeFile: 'Dosyayı kaldır',
            uploadError: 'Yükleme hatası',
            previewFile: 'Dosyayı önizle',
            downloadFile: 'Dosyayı indir'
        },
        Empty: {
            description: 'Veri Yok'
        },
        Icon: {
            icon: 'ikon'
        },
        Text: {
            edit: 'Düzenle',
            copy: 'Kopyala',
            copied: 'Kopyalandı',
            expand: 'Genişlet',
            collapse: 'Daralt'
        },
        Form: {
            optional: '(opsiyonel)',
            defaultValidateMessages: {
                default: 'Alan doğrulama hatası ${label}',
                required: '${label} gerekli bir alan',
                enum: '${label} şunlardan biri olmalı: [${enum}]',
                whitespace: '${label} sadece boşluk olamaz',
                date: {
                    format: '${label} tarih biçimi geçersiz',
                    parse: '${label} bir tarihe dönüştürülemedi',
                    invalid: '${label} geçersiz bir tarih'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ${len} karakter olmalı',
                    min: '${label} en az ${min} karakter olmalı',
                    max: '${label} en çok ${max} karakter olmalı',
                    range: '${label} ${min}-${max} karakter arası olmalı'
                },
                number: {
                    len: '${label} ${len} olmalı',
                    min: '${label} en az ${min} olmalı',
                    max: '${label} en çok ${max} olmalı',
                    range: '${label} ${min}-${max} arası olmalı'
                },
                array: {
                    len: '${label} sayısı ${len} olmalı',
                    min: '${label} sayısı en az ${min} olmalı',
                    max: '${label} sayısı en çok ${max} olmalı',
                    range: '${label} sayısı ${min}-${max} arası olmalı'
                },
                pattern: {
                    mismatch: '${label} şu kalıpla eşleşmeli: ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Önizleme'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    2134: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ сторінці',
        jump_to: 'Перейти',
        jump_to_confirm: 'підтвердити',
        page: '',
        // Pagination
        prev_page: 'Попередня сторінка',
        next_page: 'Наступна сторінка',
        prev_5: 'Попередні 5 сторінок',
        next_5: 'Наступні 5 сторінок',
        prev_3: 'Попередні 3 сторінки',
        next_3: 'Наступні 3 сторінки',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    750: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'uk_UA',
        today: 'Сьогодні',
        now: 'Зараз',
        backToToday: 'Поточна дата',
        ok: 'OK',
        clear: 'Очистити',
        week: 'Тиждень',
        month: 'Місяць',
        year: 'Рік',
        timeSelect: 'Обрати час',
        dateSelect: 'Обрати дату',
        monthSelect: 'Обрати місяць',
        yearSelect: 'Обрати рік',
        decadeSelect: 'Обрати десятиріччя',
        dateFormat: 'D-M-YYYY',
        dateTimeFormat: 'D-M-YYYY HH:mm:ss',
        previousMonth: 'Попередній місяць (PageUp)',
        nextMonth: 'Наступний місяць (PageDown)',
        previousYear: 'Попередній рік (Control + left)',
        nextYear: 'Наступний рік (Control + right)',
        previousDecade: 'Попереднє десятиріччя',
        nextDecade: 'Наступне десятиріччя',
        previousCentury: 'Попереднє століття',
        nextCentury: 'Наступне століття'
    });
    var _default = exports.default = locale;
    }}),
    4903: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/uk_UA.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 4903);
    var __TURBOPACK__imported__module__2134__ = __turbopack_context__.i(2134);
    // MERGED MODULE: [project]/components/calendar/locale/uk_UA.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/uk_UA.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__750__ = __turbopack_context__.i(750);
    // MERGED MODULE: [project]/components/time-picker/locale/uk_UA.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Оберіть час',
        rangePlaceholder: [
            'Початковий час',
            'Кінцевий час'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Оберіть дату',
            yearPlaceholder: 'Оберіть рік',
            quarterPlaceholder: 'Оберіть квартал',
            monthPlaceholder: 'Оберіть місяць',
            weekPlaceholder: 'Оберіть тиждень',
            rangePlaceholder: [
                'Початкова дата',
                'Кінцева дата'
            ],
            rangeYearPlaceholder: [
                'Початковий рік',
                'Кінцевий рік'
            ],
            rangeMonthPlaceholder: [
                'Початковий місяць',
                'Кінцевий місяць'
            ],
            rangeWeekPlaceholder: [
                'Початковий тиждень',
                'Кінцевий тиждень'
            ],
            shortWeekDays: [
                'Нд',
                'Пн',
                'Вт',
                'Ср',
                'Чт',
                'Пт',
                'Сб'
            ],
            shortMonths: [
                'Січ',
                'Лют',
                'Бер',
                'Кві',
                'Тра',
                'Чер',
                'Лип',
                'Сер',
                'Вер',
                'Жов',
                'Лис',
                'Гру'
            ],
            ...__TURBOPACK__imported__module__750__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} не є типом ${type}';
    const localeValues = {
        locale: 'uk',
        Pagination: __TURBOPACK__imported__module__2134__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Будь ласка, оберіть',
            close: 'Закрити'
        },
        Table: {
            filterTitle: 'Фільтрувати',
            filterConfirm: 'OK',
            filterReset: 'Скинути',
            filterEmptyText: 'Фільтри відсутні',
            filterCheckAll: 'Обрати всі',
            filterSearchPlaceholder: 'Пошук у фільтрах',
            emptyText: 'Даних немає',
            selectAll: 'Обрати всі на сторінці',
            selectInvert: 'Інвертувати вибір',
            selectNone: 'Очистити вибір',
            selectionAll: 'Обрати всі',
            sortTitle: 'Сортувати',
            expand: 'Розгорнути рядок',
            collapse: 'Згорнути рядок',
            triggerDesc: 'Сортувати за спаданням',
            triggerAsc: 'Сортувати за зростанням',
            cancelSort: 'Відмінити сортування'
        },
        Tour: {
            Next: 'Далі',
            Previous: 'Назад',
            Finish: 'Завершити'
        },
        Modal: {
            okText: 'Гаразд',
            cancelText: 'Скасувати',
            justOkText: 'Гаразд'
        },
        Popconfirm: {
            okText: 'Гаразд',
            cancelText: 'Скасувати'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Введіть текст для пошуку',
            itemUnit: 'елем.',
            itemsUnit: 'елем.',
            remove: 'Видалити',
            selectCurrent: 'Вибрати поточну сторінку',
            removeCurrent: 'Скасувати вибір на сторінці',
            selectAll: 'Вибрати всі дані',
            deselectAll: 'Очистити вибір',
            removeAll: 'Скасувати вибір',
            selectInvert: 'Інвертувати поточну сторінку'
        },
        Upload: {
            uploading: 'Завантаження ...',
            removeFile: 'Видалити файл',
            uploadError: 'Помилка завантаження',
            previewFile: 'Попередній перегляд файлу',
            downloadFile: 'Завантажити файл'
        },
        Empty: {
            description: 'Даних немає'
        },
        Icon: {
            icon: 'іконка'
        },
        Text: {
            edit: 'Редагувати',
            copy: 'Скопіювати',
            copied: 'Скопійовано',
            expand: 'Розширити'
        },
        Form: {
            optional: '(опціонально)',
            defaultValidateMessages: {
                default: 'Помилка валідації для поля ${label}',
                required: 'Будь ласка, заповніть ${label}',
                enum: 'Лише одне зі значень [${enum}] доступне для ${label}',
                whitespace: 'Значення у полі ${label} не може бути пробілом',
                date: {
                    format: 'Не валідний формат дати у ${label}',
                    parse: 'Значення ${label} не може бути приведене до дати',
                    invalid: 'Не валідна дата у ${label}'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} має містити ${len} символів',
                    min: '${label} має містити не менш, ніж ${min} символів',
                    max: '${label} має містити не більш, ніж ${max} символів',
                    range: '${label} має містити ${min}-${max} символів'
                },
                number: {
                    len: '${label} має дорівнювати ${len}',
                    min: '${label} має бути не менш, ніж ${min}',
                    max: '${label} має бути не більш, ніж ${max}',
                    range: '${label} має бути в межах ${min}-${max}'
                },
                array: {
                    len: '${label} має містити ${len} елементи',
                    min: '${label} має містити не менш, ніж ${min} елементи',
                    max: '${label} має містити не більш, ніж ${max} елементи',
                    range: 'Кількість елементів в ${label} має бути в межах ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} не відповідає шаблону ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Попередній перегляд'
        },
        QRCode: {
            expired: 'QR-код закінчився',
            refresh: 'Оновити'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    7042: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ صفحہ',
        jump_to: 'پاس جاؤ',
        jump_to_confirm: 'تصدیق کریں',
        page: '',
        // Pagination
        prev_page: 'پچھلا صفحہ',
        next_page: 'اگلا صفحہ',
        prev_5: 'پچھلے 5 صفحات',
        next_5: 'اگلے 5 صفحات',
        prev_3: 'پچھلے 3 صفحات',
        next_3: 'اگلے 3 صفحات',
        page_size: 'Page Size'
    };
    var _default = exports.default = locale;
    }}),
    6821: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'ur_PK',
        today: 'آج',
        now: 'ابھی',
        backToToday: 'آج واپس',
        ok: 'ٹھیک ہے',
        clear: 'صاف',
        week: 'ہفتہ',
        month: 'مہینہ',
        year: 'سال',
        timeSelect: 'وقت منتخب کریں',
        dateSelect: 'تاریخ منتخب کریں',
        weekSelect: 'ایک ہفتہ کا انتخاب کریں',
        monthSelect: 'ایک مہینہ کا انتخاب کریں',
        yearSelect: 'ایک سال کا انتخاب کریں',
        decadeSelect: 'ایک دہائی کا انتخاب کریں',
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'پچھلے مہینے (PageUp)',
        nextMonth: 'اگلے مہینے (PageDown)',
        previousYear: 'گزشتہ سال (Control + left)',
        nextYear: 'اگلے سال (Control + right)',
        previousDecade: 'پچھلی دہائی',
        nextDecade: 'اگلی دہائی',
        previousCentury: 'پچھلی صدی',
        nextCentury: 'اگلی صدی'
    });
    var _default = exports.default = locale;
    }}),
    5719: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/ur_PK.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 5719);
    var __TURBOPACK__imported__module__7042__ = __turbopack_context__.i(7042);
    // MERGED MODULE: [project]/components/calendar/locale/ur_PK.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/ur_PK.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__6821__ = __turbopack_context__.i(6821);
    // MERGED MODULE: [project]/components/time-picker/locale/ur_PK.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'وقت منتخب کریں',
        rangePlaceholder: [
            'وقت منتخب کریں',
            'آخر وقت'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'تاریخ منتخب کریں',
            yearPlaceholder: 'سال کو منتخب کریں',
            quarterPlaceholder: 'کوارٹر منتخب کریں',
            monthPlaceholder: 'ماہ منتخب کریں',
            weekPlaceholder: 'ہفتہ منتخب کریں',
            rangePlaceholder: [
                'شروع کرنے کی تاریخ',
                'آخری تاریخ'
            ],
            rangeYearPlaceholder: [
                'آغاز سال',
                'آخر سال'
            ],
            rangeMonthPlaceholder: [
                'مہینہ شروع',
                'اختتامی مہینہ'
            ],
            rangeWeekPlaceholder: [
                'ہفتے شروع کریں',
                'اختتام ہفتہ'
            ],
            ...__TURBOPACK__imported__module__6821__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} درست نہیں ہے ${type}';
    const localeValues = {
        locale: 'ur',
        Pagination: __TURBOPACK__imported__module__7042__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'منتخب کریں',
            close: 'بند کریں'
        },
        Table: {
            filterTitle: 'فلٹر مینو',
            filterConfirm: 'ٹھیک ہے',
            filterReset: 'ری سیٹ کریں',
            filterEmptyText: 'فلٹرز نہیں',
            emptyText: 'کوئی ڈیٹا نہیں',
            selectAll: 'موجودہ صفحہ منتخب کریں',
            selectInvert: 'موجودہ صفحے کو الٹ دیں',
            selectNone: 'تمام ڈیٹا صاف کریں',
            selectionAll: 'تمام ڈیٹا کو منتخب کریں',
            sortTitle: 'ترتیب دیں',
            expand: 'پھیلائیں',
            collapse: 'سمیٹیں',
            triggerDesc: 'نزولی کو ترتیب دینے کیلئے کلک کریں',
            triggerAsc: 'چڑھنے کو ترتیب دینے کیلئے کلک کریں',
            cancelSort: 'ترتیب کو منسوخ کرنے کیلئے دبائیں'
        },
        Tour: {
            Next: 'اگلا',
            Previous: 'پچھلا',
            Finish: 'ختم کریں'
        },
        Modal: {
            okText: 'ٹھیک ہے',
            cancelText: 'منسوخ کریں',
            justOkText: 'ٹھیک ہے'
        },
        Popconfirm: {
            okText: 'ٹھیک ہے',
            cancelText: 'منسوخ کریں'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'یہاں تلاش کریں',
            itemUnit: 'شے',
            itemsUnit: 'اشیاء',
            remove: 'ہٹائیں',
            selectCurrent: 'موجودہ صفحہ منتخب کریں',
            removeCurrent: 'موجودہ صفحہ ہٹائیں',
            selectAll: 'تمام ڈیٹا کو منتخب کریں',
            removeAll: 'تمام ڈیٹا کو ہٹا دیں',
            selectInvert: 'موجودہ صفحے کو الٹ دیں'
        },
        Upload: {
            uploading: 'اپ لوڈ ہو رہا ہے…',
            removeFile: 'فائل کو ہٹا دیں',
            uploadError: 'اپ لوڈ کی خرابی',
            previewFile: 'پیش نظار فائل',
            downloadFile: 'فائل ڈاؤن لوڈ کریں'
        },
        Empty: {
            description: 'کوئی ڈیٹا نہیں'
        },
        Icon: {
            icon: 'آئیکن'
        },
        Text: {
            edit: 'ترمیم',
            copy: 'کاپی',
            copied: 'کاپی ہوگیا',
            expand: 'پھیلائیں'
        },
        Form: {
            optional: '(اختیاری)',
            defaultValidateMessages: {
                default: ' ${label} کیلئے فیلڈ کی توثیق میں نقص',
                required: 'درج کریں ${label}',
                enum: '${label} ایک ہونا ضروری ہے [${enum}]',
                whitespace: '${label} خالی نہیں ہوسکتا',
                date: {
                    format: '${label} تاریخ کی شکل غلط ہے',
                    parse: '${label} تاریخ میں تبدیل نہیں کیا جاسکتا',
                    invalid: '${label} غلط تاریخ ہے'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} ضروری ہے ${len} حروف',
                    min: '${label} کم از کم ہونا چاہئے ${min} حروف',
                    max: '${label} تک ہونا چاہئے ${max} حروف',
                    range: '${label} کے درمیان ہونا چاہئے ${min}-${max} حروف'
                },
                number: {
                    len: '${label} کے برابر ہونا چاہئے ${len}',
                    min: '${label} کم از کم ہونا چاہئے ${min}',
                    max: '${label} زیادہ سے زیادہ ہونا چاہئے ${max}',
                    range: '${label} کے درمیان ہونا چاہئے ${min}-${max}'
                },
                array: {
                    len: 'ضروری ہے ${len} ${label}',
                    min: 'کم از کم ${min} ${label}',
                    max: 'زیادہ سے زیادہ ${max} ${label}',
                    range: 'کی رقم ${label} کے درمیان ہونا چاہئے ${min}-${max}'
                },
                pattern: {
                    mismatch: '${label} پیٹرن سے ملتا نہیں ہے ${pattern}'
                }
            }
        },
        Image: {
            preview: 'پیش نظارہ'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    8285: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ sah.',
        jump_to: "O'tish",
        jump_to_confirm: 'tasdiqlash',
        page: 'Sahifa',
        // Pagination
        prev_page: 'Orqaga',
        next_page: 'Oldinga',
        prev_5: 'Oldingi 5',
        next_5: 'Keyingi 5',
        prev_3: 'Oldingi 3',
        next_3: 'Keyingi 3',
        page_size: 'sahifa hajmi'
    };
    var _default = exports.default = locale;
    }}),
    5377: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'uz_UZ',
        today: 'Bugun',
        now: 'Hozir',
        backToToday: 'Bugunga qaytish',
        ok: 'OK',
        clear: 'Toza',
        week: 'Xafta',
        month: 'Oy',
        year: 'Yil',
        timeSelect: 'vaqtni tanlang',
        dateSelect: 'sanani tanlang',
        weekSelect: 'Haftani tanlang',
        monthSelect: 'Oyni tanlang',
        yearSelect: 'Yilni tanlang',
        decadeSelect: "O'n yilni tanlang",
        dateFormat: 'M/D/YYYY',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        previousMonth: 'Oldingi oy (PageUp)',
        nextMonth: 'Keyingi oy (PageDown)',
        previousYear: "O'tgan yili (Control + left)",
        nextYear: 'Keyingi yil (Control + right)',
        previousDecade: "Oxirgi o'n yil",
        nextDecade: "Keyingi o'n yil",
        previousCentury: "O'tgan asr",
        nextCentury: 'Keyingi asr'
    });
    var _default = exports.default = locale;
    }}),
    9559: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/uz_UZ.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 9559);
    var __TURBOPACK__imported__module__8285__ = __turbopack_context__.i(8285);
    // MERGED MODULE: [project]/components/calendar/locale/uz_UZ.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/uz_UZ.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__5377__ = __turbopack_context__.i(5377);
    // MERGED MODULE: [project]/components/time-picker/locale/uz_UZ.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Vaqtni tanlang',
        rangePlaceholder: [
            'Boshlanish vaqti',
            'Tugallanish vaqti'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Sanani tanlang',
            yearPlaceholder: 'Yilni tanlang',
            quarterPlaceholder: 'Chorakni tanlang',
            monthPlaceholder: 'Oyni tanlang',
            weekPlaceholder: 'Haftani tanlang',
            rangePlaceholder: [
                'Boshlanish sanasi',
                'Tugallanish sanasi'
            ],
            rangeYearPlaceholder: [
                'Boshlanish yili',
                'Tugallanish yili'
            ],
            rangeMonthPlaceholder: [
                'Boshlanish oyi',
                'Tugallanish oyi'
            ],
            rangeWeekPlaceholder: [
                'Boshlanish haftasi',
                'Tugallanish haftasi'
            ],
            ...__TURBOPACK__imported__module__5377__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} ${type} turi emas';
    const localeValues = {
        // NOTE: In
        // https://github.com/react-component/picker/blob/master/src/locale/uz_UZ.ts
        // and
        // https://github.com/react-component/pagination/blob/master/src/locale/uz_UZ.ts
        // both implemented as uz-latn Uzbek
        locale: 'uz-latn',
        Pagination: __TURBOPACK__imported__module__8285__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Iltimos tanlang',
            close: 'Yopish'
        },
        Table: {
            filterTitle: 'Filtr',
            filterConfirm: 'OK',
            filterReset: 'Bekor qilish',
            filterEmptyText: 'Filtrlarsiz',
            filterCheckAll: 'Barcha elementlarni tanlash',
            filterSearchPlaceholder: 'Filtrlarda qidiruv',
            emptyText: "Ma'lumotlar topilmadi",
            selectAll: 'Barchasini tanlash',
            selectInvert: 'Tanlovni aylantirish',
            selectNone: "Barcha ma'lumotlarni tozalang",
            selectionAll: 'Barchasini tanlash',
            sortTitle: 'Tartiblash',
            expand: 'Satirni yozish',
            collapse: "Satirni yig'ish",
            triggerDesc: 'Kamayish tartibida tartiblash uchun bosing',
            triggerAsc: "O'sish tartibida tartiblash uchun bosing",
            cancelSort: 'Tartiblshni rad etish uchun bosing'
        },
        Tour: {
            Next: "So'ngra",
            Previous: 'Ortga',
            Finish: 'Tugatish'
        },
        Modal: {
            okText: 'OK',
            cancelText: 'Yopish',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'OK',
            cancelText: 'Bekor qilish'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Qidiruv',
            itemUnit: 'elem.',
            itemsUnit: 'elem.',
            remove: 'Oʻchirish',
            selectAll: "Barch ma'lumotlarni tanlash",
            selectCurrent: 'Joriy sahifani tanlash',
            selectInvert: 'Tanlovni aylantirish',
            removeAll: "Barcha ma'lumotlarni o'chirish",
            removeCurrent: "Joriy sahifani o'chirish"
        },
        Upload: {
            uploading: 'Yuklanmoqda...',
            removeFile: "Faylni o'chirish",
            uploadError: 'Yuklashda xatolik yuz berdi',
            previewFile: "Faylni oldindan ko'rish",
            downloadFile: 'Faylni yuklash'
        },
        Empty: {
            description: 'Maʼlumot topilmadi'
        },
        Icon: {
            icon: 'ikonka'
        },
        Text: {
            edit: 'Tahrirlash',
            copy: 'Nusxalash',
            copied: 'Nusxalandi',
            expand: 'Ochib qoyish'
        },
        Form: {
            optional: '(shart emas)',
            defaultValidateMessages: {
                default: '${label} maydonini tekshirishda xatolik yuz berdi',
                required: 'Iltimos, ${label} kiriting',
                enum: '${label}, [${enum}] dan biri boʻlishi kerak',
                whitespace: '${label} boʻsh boʻlishi mumkin emas',
                date: {
                    format: '${label} toʻgʻri sana formatida emas',
                    parse: '${label} sanaga aylantirilmaydi',
                    invalid: "${label} tog'ri sana emas"
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label}, ${len} ta belgidan iborat boʻlishi kerak',
                    min: '${label} должна быть больше или равна ${min} символов',
                    max: '${label}, ${max} belgidan katta yoki teng boʻlishi kerak',
                    range: '${label} uzunligi ${min}-${max} belgilar orasida boʻlishi kerak'
                },
                number: {
                    len: '${label}, ${len} ga teng boʻlishi kerak',
                    min: '${label}, ${min} dan katta yoki teng boʻlishi kerak',
                    max: '${label}, ${max} dan kichik yoki teng boʻlishi kerak',
                    range: '${label}, ${min}-${max} orasida boʻlishi kerak'
                },
                array: {
                    len: '${label} elementlari soni ${len} ga teng boʻlishi kerak',
                    min: '${label} elementlari soni ${min} dan katta yoki teng boʻlishi kerak',
                    max: '${label} elementlari soni ${max} dan kam yoki teng boʻlishi kerak',
                    range: '${label} elementlari soni ${min} va ${max} orasida boʻlishi kerak'
                },
                pattern: {
                    mismatch: '${label}, ${pattern} andazasiga mos emas'
                }
            }
        },
        Image: {
            preview: 'Ko‘rib chiqish'
        },
        QRCode: {
            expired: 'QR-kod eskirgan',
            refresh: 'Yangilash'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    1862: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '/ trang',
        jump_to: 'Đến',
        jump_to_confirm: 'xác nhận',
        page: 'Trang',
        // Pagination
        prev_page: 'Trang Trước',
        next_page: 'Trang Kế',
        prev_5: 'Về 5 Trang Trước',
        next_5: 'Đến 5 Trang Kế',
        prev_3: 'Về 3 Trang Trước',
        next_3: 'Đến 3 Trang Kế',
        page_size: 'kích thước trang'
    };
    var _default = exports.default = locale;
    }}),
    9615: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'vi_VN',
        today: 'Hôm nay',
        now: 'Bây giờ',
        backToToday: 'Trở về hôm nay',
        ok: 'OK',
        clear: 'Xóa',
        week: 'Tuần',
        month: 'Tháng',
        year: 'Năm',
        timeSelect: 'Chọn thời gian',
        dateSelect: 'Chọn ngày',
        weekSelect: 'Chọn tuần',
        monthSelect: 'Chọn tháng',
        yearSelect: 'Chọn năm',
        decadeSelect: 'Chọn thập kỷ',
        dateFormat: 'D/M/YYYY',
        dateTimeFormat: 'D/M/YYYY HH:mm:ss',
        previousMonth: 'Tháng trước (PageUp)',
        nextMonth: 'Tháng sau (PageDown)',
        previousYear: 'Năm trước (Control + left)',
        nextYear: 'Năm sau (Control + right)',
        previousDecade: 'Thập kỷ trước',
        nextDecade: 'Thập kỷ sau',
        previousCentury: 'Thế kỷ trước',
        nextCentury: 'Thế kỷ sau'
    });
    var _default = exports.default = locale;
    }}),
    2637: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/vi_VN.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 2637);
    var __TURBOPACK__imported__module__1862__ = __turbopack_context__.i(1862);
    // MERGED MODULE: [project]/components/calendar/locale/vi_VN.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/vi_VN.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__9615__ = __turbopack_context__.i(9615);
    // MERGED MODULE: [project]/components/time-picker/locale/vi_VN.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: 'Chọn thời gian',
        rangePlaceholder: [
            'Bắt đầu',
            'Kết thúc'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // Merge into a locale object
    const locale1 = {
        lang: {
            placeholder: 'Chọn thời điểm',
            yearPlaceholder: 'Chọn năm',
            quarterPlaceholder: 'Chọn quý',
            monthPlaceholder: 'Chọn tháng',
            weekPlaceholder: 'Chọn tuần',
            rangePlaceholder: [
                'Ngày bắt đầu',
                'Ngày kết thúc'
            ],
            rangeYearPlaceholder: [
                'Năm bắt đầu',
                'Năm kết thúc'
            ],
            rangeQuarterPlaceholder: [
                'Quý bắt đầu',
                'Quý kết thúc'
            ],
            rangeMonthPlaceholder: [
                'Tháng bắt đầu',
                'Tháng kết thúc'
            ],
            rangeWeekPlaceholder: [
                'Tuần bắt đầu',
                'Tuần kết thúc'
            ],
            ...__TURBOPACK__imported__module__9615__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label} không phải kiểu ${type} hợp lệ';
    const localeValues = {
        locale: 'vi',
        Pagination: __TURBOPACK__imported__module__1862__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        global: {
            placeholder: 'Vui lòng chọn',
            close: 'Đóng'
        },
        Table: {
            filterTitle: 'Bộ lọc',
            filterConfirm: 'Đồng ý',
            filterReset: 'Bỏ lọc',
            filterEmptyText: 'Không có bộ lọc',
            filterCheckAll: 'Chọn tất cả',
            filterSearchPlaceholder: 'Tìm kiếm bộ lọc',
            emptyText: 'Trống',
            selectAll: 'Chọn tất cả',
            selectInvert: 'Chọn ngược lại',
            selectNone: 'Bỏ chọn tất cả',
            selectionAll: 'Chọn tất cả',
            sortTitle: 'Sắp xếp',
            expand: 'Mở rộng dòng',
            collapse: 'Thu gọn dòng',
            triggerDesc: 'Nhấp để sắp xếp giảm dần',
            triggerAsc: 'Nhấp để sắp xếp tăng dần',
            cancelSort: 'Nhấp để hủy sắp xếp'
        },
        Tour: {
            Next: 'Tiếp',
            Previous: 'Trước',
            Finish: 'Hoàn thành'
        },
        Modal: {
            okText: 'Đồng ý',
            cancelText: 'Hủy',
            justOkText: 'OK'
        },
        Popconfirm: {
            okText: 'Đồng ý',
            cancelText: 'Hủy'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: 'Tìm ở đây',
            itemUnit: 'mục',
            itemsUnit: 'mục',
            remove: 'Gỡ bỏ',
            selectCurrent: 'Chọn trang hiện tại',
            removeCurrent: 'Gỡ bỏ trang hiện tại',
            selectAll: 'Chọn tất cả',
            removeAll: 'Gỡ bỏ tất cả',
            selectInvert: 'Đảo ngược trang hiện tại',
            deselectAll: 'Bỏ chọn tất cả'
        },
        Upload: {
            uploading: 'Đang tải lên...',
            removeFile: 'Gỡ bỏ tập tin',
            uploadError: 'Lỗi tải lên',
            previewFile: 'Xem trước tập tin',
            downloadFile: 'Tải tập tin'
        },
        Empty: {
            description: 'Trống'
        },
        Icon: {
            icon: 'icon'
        },
        Text: {
            edit: 'Chỉnh sửa',
            copy: 'Sao chép',
            copied: 'Đã sao chép',
            expand: 'Mở rộng'
        },
        Form: {
            optional: '(Tùy chọn)',
            defaultValidateMessages: {
                default: '${label} không đáp ứng điều kiện quy định',
                required: 'Hãy nhập thông tin cho trường ${label}',
                enum: '${label} phải có giá trị nằm trong tập [${enum}]',
                whitespace: '${label} không được chứa khoảng trắng',
                date: {
                    format: '${label} sai định dạng ngày tháng',
                    parse: 'Không thể chuyển ${label} sang kiểu Ngày tháng',
                    invalid: '${label} không phải giá trị Ngày tháng hợp lệ'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label} phải dài đúng ${len} ký tự',
                    min: 'Độ dài tối thiểu trường ${label} là ${min} ký tự',
                    max: 'Độ dài tối đa trường ${label} là ${max} ký tự',
                    range: 'Độ dài trường ${label} phải từ ${min} đến ${max} ký tự'
                },
                number: {
                    len: '${label} phải bằng ${len}',
                    min: '${label} phải lớn hơn hoặc bằng ${min}',
                    max: '${label} phải nhỏ hơn hoặc bằng ${max}',
                    range: '${label} phải nằm trong khoảng ${min}-${max}'
                },
                array: {
                    len: 'Mảng ${label} phải có ${len} phần tử ',
                    min: 'Mảng ${label} phải chứa tối thiểu ${min} phần tử ',
                    max: 'Mảng ${label} phải chứa tối đa ${max} phần tử ',
                    range: 'Mảng ${label} phải chứa từ ${min}-${max} phần tử'
                },
                pattern: {
                    mismatch: '${label} không thỏa mãn mẫu kiểm tra ${pattern}'
                }
            }
        },
        Image: {
            preview: 'Xem trước'
        },
        QRCode: {
            expired: 'Mã QR hết hạn',
            refresh: 'Làm mới'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    388: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '条/页',
        jump_to: '跳至',
        jump_to_confirm: '确定',
        page: '页',
        // Pagination
        prev_page: '上一页',
        next_page: '下一页',
        prev_5: '向前 5 页',
        next_5: '向后 5 页',
        prev_3: '向前 3 页',
        next_3: '向后 3 页',
        page_size: '页码'
    };
    var _default = exports.default = locale;
    }}),
    2112: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'zh_CN',
        today: '今天',
        now: '此刻',
        backToToday: '返回今天',
        ok: '确定',
        timeSelect: '选择时间',
        dateSelect: '选择日期',
        weekSelect: '选择周',
        clear: '清除',
        week: '周',
        month: '月',
        year: '年',
        previousMonth: '上个月 (翻页上键)',
        nextMonth: '下个月 (翻页下键)',
        monthSelect: '选择月份',
        yearSelect: '选择年份',
        decadeSelect: '选择年代',
        previousYear: '上一年 (Control键加左方向键)',
        nextYear: '下一年 (Control键加右方向键)',
        previousDecade: '上一年代',
        nextDecade: '下一年代',
        previousCentury: '上一世纪',
        nextCentury: '下一世纪',
        yearFormat: 'YYYY年',
        cellDateFormat: 'D',
        monthBeforeYear: false
    });
    var _default = exports.default = locale;
    }}),
    195: ((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/locale/zh_CN.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__3
    }, 195);
    var __TURBOPACK__imported__module__388__ = __turbopack_context__.i(388);
    // MERGED MODULE: [project]/components/calendar/locale/zh_CN.ts [library] (ecmascript)
    ;
    // MERGED MODULE: [project]/components/date-picker/locale/zh_CN.ts [library] (ecmascript)
    ;
    var __TURBOPACK__imported__module__2112__ = __turbopack_context__.i(2112);
    // MERGED MODULE: [project]/components/time-picker/locale/zh_CN.ts [library] (ecmascript)
    ;
    const locale = {
        placeholder: '请选择时间',
        rangePlaceholder: [
            '开始时间',
            '结束时间'
        ]
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // 统一合并为完整的 Locale
    const locale1 = {
        lang: {
            placeholder: '请选择日期',
            yearPlaceholder: '请选择年份',
            quarterPlaceholder: '请选择季度',
            monthPlaceholder: '请选择月份',
            weekPlaceholder: '请选择周',
            rangePlaceholder: [
                '开始日期',
                '结束日期'
            ],
            rangeYearPlaceholder: [
                '开始年份',
                '结束年份'
            ],
            rangeMonthPlaceholder: [
                '开始月份',
                '结束月份'
            ],
            rangeQuarterPlaceholder: [
                '开始季度',
                '结束季度'
            ],
            rangeWeekPlaceholder: [
                '开始周',
                '结束周'
            ],
            ...__TURBOPACK__imported__module__2112__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    // should add whitespace between char in Button
    locale1.lang.ok = '确定';
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    ;
    ;
    ;
    ;
    const typeTemplate = '${label}不是一个有效的${type}';
    const localeValues = {
        locale: 'zh-cn',
        Pagination: __TURBOPACK__imported__module__388__["default"],
        DatePicker: __TURBOPACK__default__export__1,
        TimePicker: __TURBOPACK__default__export__,
        Calendar: __TURBOPACK__default__export__2,
        // locales for all components
        global: {
            placeholder: '请选择',
            close: '关闭'
        },
        Table: {
            filterTitle: '筛选',
            filterConfirm: '确定',
            filterReset: '重置',
            filterEmptyText: '无筛选项',
            filterCheckAll: '全选',
            filterSearchPlaceholder: '在筛选项中搜索',
            emptyText: '暂无数据',
            selectAll: '全选当页',
            selectInvert: '反选当页',
            selectNone: '清空所有',
            selectionAll: '全选所有',
            sortTitle: '排序',
            expand: '展开行',
            collapse: '关闭行',
            triggerDesc: '点击降序',
            triggerAsc: '点击升序',
            cancelSort: '取消排序'
        },
        Modal: {
            okText: '确定',
            cancelText: '取消',
            justOkText: '知道了'
        },
        Tour: {
            Next: '下一步',
            Previous: '上一步',
            Finish: '结束导览'
        },
        Popconfirm: {
            cancelText: '取消',
            okText: '确定'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: '请输入搜索内容',
            itemUnit: '项',
            itemsUnit: '项',
            remove: '删除',
            selectCurrent: '全选当页',
            removeCurrent: '删除当页',
            selectAll: '全选所有',
            deselectAll: '取消全选',
            removeAll: '删除全部',
            selectInvert: '反选当页'
        },
        Upload: {
            uploading: '文件上传中',
            removeFile: '删除文件',
            uploadError: '上传错误',
            previewFile: '预览文件',
            downloadFile: '下载文件'
        },
        Empty: {
            description: '暂无数据'
        },
        Icon: {
            icon: '图标'
        },
        Text: {
            edit: '编辑',
            copy: '复制',
            copied: '复制成功',
            expand: '展开',
            collapse: '收起'
        },
        Form: {
            optional: '（可选）',
            defaultValidateMessages: {
                default: '字段验证错误${label}',
                required: '请输入${label}',
                enum: '${label}必须是其中一个[${enum}]',
                whitespace: '${label}不能为空字符',
                date: {
                    format: '${label}日期格式无效',
                    parse: '${label}不能转换为日期',
                    invalid: '${label}是一个无效日期'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label}须为${len}个字符',
                    min: '${label}最少${min}个字符',
                    max: '${label}最多${max}个字符',
                    range: '${label}须在${min}-${max}字符之间'
                },
                number: {
                    len: '${label}必须等于${len}',
                    min: '${label}最小值为${min}',
                    max: '${label}最大值为${max}',
                    range: '${label}须在${min}-${max}之间'
                },
                array: {
                    len: '须为${len}个${label}',
                    min: '最少${min}个${label}',
                    max: '最多${max}个${label}',
                    range: '${label}数量须在${min}-${max}之间'
                },
                pattern: {
                    mismatch: '${label}与模式不匹配${pattern}'
                }
            }
        },
        Image: {
            preview: '预览'
        },
        QRCode: {
            expired: '二维码过期',
            refresh: '点击刷新',
            scanned: '已扫描'
        },
        ColorPicker: {
            presetEmpty: '暂无',
            transparent: '无色',
            singleColor: '单色',
            gradientColor: '渐变色'
        }
    };
    const __TURBOPACK__default__export__3 = localeValues;
    }),
    2774: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var locale = {
        // Options
        items_per_page: '條/頁',
        jump_to: '跳至',
        jump_to_confirm: '確定',
        page: '頁',
        // Pagination
        prev_page: '上一頁',
        next_page: '下一頁',
        prev_5: '向前 5 頁',
        next_5: '向後 5 頁',
        prev_3: '向前 3 頁',
        next_3: '向後 3 頁',
        page_size: '頁碼'
    };
    var _default = exports.default = locale;
    }}),
    8343: ((__turbopack_context__) => {
    "use strict";
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    var _interopRequireDefault = __turbopack_context__.r(4139).default;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(__turbopack_context__.r(8349));
    var _common = __turbopack_context__.r(4915);
    var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _common.commonLocale), {}, {
        locale: 'zh_TW',
        today: '今天',
        now: '此刻',
        backToToday: '返回今天',
        ok: '確定',
        timeSelect: '選擇時間',
        dateSelect: '選擇日期',
        weekSelect: '選擇周',
        clear: '清除',
        week: '週',
        month: '月',
        year: '年',
        previousMonth: '上個月 (翻頁上鍵)',
        nextMonth: '下個月 (翻頁下鍵)',
        monthSelect: '選擇月份',
        yearSelect: '選擇年份',
        decadeSelect: '選擇年代',
        yearFormat: 'YYYY年',
        dateFormat: 'YYYY年M月D日',
        dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
        previousYear: '上一年 (Control鍵加左方向鍵)',
        nextYear: '下一年 (Control鍵加右方向鍵)',
        previousDecade: '上一年代',
        nextDecade: '下一年代',
        previousCentury: '上一世紀',
        nextCentury: '下一世紀',
        cellDateFormat: 'D',
        monthBeforeYear: false
    });
    var _default = exports.default = locale;
    }}),
    1611: [((__turbopack_context__) => {
    "use strict";
    
    // MERGED MODULE: [project]/components/calendar/locale/zh_TW.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__2
    }, 1611);
    // MERGED MODULE: [project]/components/date-picker/locale/zh_TW.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__1
    }, 7671);
    var __TURBOPACK__imported__module__8343__ = __turbopack_context__.i(8343);
    // MERGED MODULE: [project]/components/time-picker/locale/zh_TW.ts [library] (ecmascript)
    ;
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    }, 661);
    const locale = {
        placeholder: '請選擇時間'
    };
    const __TURBOPACK__default__export__ = locale;
    ;
    ;
    // 统一合并为完整的 Locale
    const locale1 = {
        lang: {
            placeholder: '請選擇日期',
            yearPlaceholder: '請選擇年份',
            quarterPlaceholder: '請選擇季度',
            monthPlaceholder: '請選擇月份',
            weekPlaceholder: '請選擇周',
            rangePlaceholder: [
                '開始日期',
                '結束日期'
            ],
            rangeYearPlaceholder: [
                '開始年份',
                '結束年份'
            ],
            rangeMonthPlaceholder: [
                '開始月份',
                '結束月份'
            ],
            rangeQuarterPlaceholder: [
                '開始季度',
                '結束季度'
            ],
            rangeWeekPlaceholder: [
                '開始周',
                '結束周'
            ],
            ...__TURBOPACK__imported__module__8343__["default"]
        },
        timePickerLocale: {
            ...__TURBOPACK__default__export__
        }
    };
    locale1.lang.ok = '確 定';
    const __TURBOPACK__default__export__1 = locale1;
    ;
    const __TURBOPACK__default__export__2 = __TURBOPACK__default__export__1;
    }), [661,7671]]
    ,
    7891: ((__turbopack_context__) => {
    "use strict";
    
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    });
    var __TURBOPACK__imported__module__2774__ = __turbopack_context__.i(2774);
    var __TURBOPACK__imported__module__1611__ = __turbopack_context__.i(1611);
    var __TURBOPACK__imported__module__7671__ = __turbopack_context__.i(7671);
    var __TURBOPACK__imported__module__661__ = __turbopack_context__.i(661);
    ;
    ;
    ;
    ;
    const typeTemplate = '${label}不是一個有效的${type}';
    const localeValues = {
        locale: 'zh-hk',
        Pagination: __TURBOPACK__imported__module__2774__["default"],
        DatePicker: __TURBOPACK__imported__module__7671__["default"],
        TimePicker: __TURBOPACK__imported__module__661__["default"],
        Calendar: __TURBOPACK__imported__module__1611__["default"],
        global: {
            placeholder: '請選擇',
            close: '關閉'
        },
        Table: {
            filterTitle: '篩選器',
            filterConfirm: '確定',
            filterReset: '重置',
            filterEmptyText: '無篩選項',
            filterCheckAll: '全選',
            filterSearchPlaceholder: '在篩選項中搜尋',
            emptyText: '暫無數據',
            selectAll: '全部選取',
            selectInvert: '反向選取',
            selectNone: '清空所有',
            selectionAll: '全選所有',
            sortTitle: '排序',
            expand: '展開行',
            collapse: '關閉行',
            triggerDesc: '點擊降序',
            triggerAsc: '點擊升序',
            cancelSort: '取消排序'
        },
        Modal: {
            okText: '確定',
            cancelText: '取消',
            justOkText: '知道了'
        },
        Tour: {
            Next: '下一步',
            Previous: '上一步',
            Finish: '結束導覽'
        },
        Popconfirm: {
            okText: '確定',
            cancelText: '取消'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: '搜尋資料',
            itemUnit: '項目',
            itemsUnit: '項目',
            remove: '刪除',
            selectCurrent: '全選當頁',
            removeCurrent: '刪除當頁',
            selectAll: '全選所有',
            removeAll: '刪除全部',
            selectInvert: '反選當頁'
        },
        Upload: {
            uploading: '正在上傳...',
            removeFile: '刪除檔案',
            uploadError: '上傳失敗',
            previewFile: '檔案預覽',
            downloadFile: '下载文件'
        },
        Empty: {
            description: '無此資料'
        },
        Icon: {
            icon: '圖標'
        },
        Text: {
            edit: '編輯',
            copy: '複製',
            copied: '複製成功',
            expand: '展開',
            collapse: '收起'
        },
        Form: {
            defaultValidateMessages: {
                default: '字段驗證錯誤${label}',
                required: '請輸入${label}',
                enum: '${label}必須是其中一個[${enum}]',
                whitespace: '${label}不能為空字符',
                date: {
                    format: '${label}日期格式無效',
                    parse: '${label}不能轉換為日期',
                    invalid: '${label}是一個無效日期'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label}須為${len}個字符',
                    min: '${label}最少${min}個字符',
                    max: '${label}最多${max}個字符',
                    range: '${label}須在${min}-${max}字符之間'
                },
                number: {
                    len: '${label}必須等於${len}',
                    min: '${label}最小值為${min}',
                    max: '${label}最大值為${max}',
                    range: '${label}須在${min}-${max}之間'
                },
                array: {
                    len: '須為${len}個${label}',
                    min: '最少${min}個${label}',
                    max: '最多${max}個${label}',
                    range: '${label}數量須在${min}-${max}之間'
                },
                pattern: {
                    mismatch: '${label}與模式不匹配${pattern}'
                }
            }
        },
        Image: {
            preview: '預覽'
        },
        QRCode: {
            expired: '二維碼過期',
            refresh: '點擊刷新',
            scanned: '已掃描'
        },
        ColorPicker: {
            presetEmpty: '暫無',
            transparent: '透明',
            singleColor: '單色',
            gradientColor: '漸變色'
        }
    };
    const __TURBOPACK__default__export__ = localeValues;
    }),
    1019: ((__turbopack_context__) => {
    "use strict";
    
    __turbopack_context__.s({
        "default": ()=>__TURBOPACK__default__export__
    });
    var __TURBOPACK__imported__module__2774__ = __turbopack_context__.i(2774);
    var __TURBOPACK__imported__module__1611__ = __turbopack_context__.i(1611);
    var __TURBOPACK__imported__module__7671__ = __turbopack_context__.i(7671);
    var __TURBOPACK__imported__module__661__ = __turbopack_context__.i(661);
    ;
    ;
    ;
    ;
    const typeTemplate = '${label}不是一個有效的${type}';
    const localeValues = {
        locale: 'zh-tw',
        Pagination: __TURBOPACK__imported__module__2774__["default"],
        DatePicker: __TURBOPACK__imported__module__7671__["default"],
        TimePicker: __TURBOPACK__imported__module__661__["default"],
        Calendar: __TURBOPACK__imported__module__1611__["default"],
        global: {
            placeholder: '請選擇',
            close: '關閉'
        },
        Table: {
            filterTitle: '篩選器',
            filterConfirm: '確定',
            filterReset: '重置',
            filterEmptyText: '無篩選項',
            filterCheckAll: '全選',
            filterSearchPlaceholder: '在篩選項中搜尋',
            emptyText: '暫無數據',
            selectAll: '全部選取',
            selectInvert: '反向選取',
            selectNone: '清空所有',
            selectionAll: '全選所有',
            sortTitle: '排序',
            expand: '展開行',
            collapse: '關閉行',
            triggerDesc: '點擊降序',
            triggerAsc: '點擊升序',
            cancelSort: '取消排序'
        },
        Modal: {
            okText: '確定',
            cancelText: '取消',
            justOkText: '知道了'
        },
        Tour: {
            Next: '下一步',
            Previous: '上一步',
            Finish: '結束導覽'
        },
        Popconfirm: {
            okText: '確定',
            cancelText: '取消'
        },
        Transfer: {
            titles: [
                '',
                ''
            ],
            searchPlaceholder: '搜尋資料',
            itemUnit: '項目',
            itemsUnit: '項目',
            remove: '删除',
            selectCurrent: '全選當頁',
            removeCurrent: '删除當頁',
            selectAll: '全選所有',
            removeAll: '删除全部',
            selectInvert: '反選當頁'
        },
        Upload: {
            uploading: '正在上傳...',
            removeFile: '刪除檔案',
            uploadError: '上傳失敗',
            previewFile: '檔案預覽',
            downloadFile: '下载文件'
        },
        Empty: {
            description: '無此資料'
        },
        Icon: {
            icon: '圖標'
        },
        Text: {
            edit: '編輯',
            copy: '複製',
            copied: '複製成功',
            expand: '展開',
            collapse: '收起'
        },
        Form: {
            optional: '（可選）',
            defaultValidateMessages: {
                default: '字段驗證錯誤${label}',
                required: '請輸入${label}',
                enum: '${label}必須是其中一個[${enum}]',
                whitespace: '${label}不能為空字符',
                date: {
                    format: '${label}日期格式無效',
                    parse: '${label}不能轉換為日期',
                    invalid: '${label}是一個無效日期'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label}須為${len}個字符',
                    min: '${label}最少${min}個字符',
                    max: '${label}最多${max}個字符',
                    range: '${label}須在${min}-${max}字符之間'
                },
                number: {
                    len: '${label}必須等於${len}',
                    min: '${label}最小值為${min}',
                    max: '${label}最大值為${max}',
                    range: '${label}須在${min}-${max}之間'
                },
                array: {
                    len: '須為${len}個${label}',
                    min: '最少${min}個${label}',
                    max: '最多${max}個${label}',
                    range: '${label}數量須在${min}-${max}之間'
                },
                pattern: {
                    mismatch: '${label}與模式不匹配${pattern}'
                }
            }
        },
        Image: {
            preview: '預覽'
        },
        QRCode: {
            expired: '二維碼過期',
            refresh: '點擊刷新',
            scanned: '已掃描'
        },
        ColorPicker: {
            presetEmpty: '暫無',
            transparent: '透明',
            singleColor: '單色',
            gradientColor: '漸變色'
        }
    };
    const __TURBOPACK__default__export__ = localeValues;
    }),
    4088: ((__turbopack_context__) => {
    
    __turbopack_context__.v({
        "./locale/ar_EG.ts": {
            id: ()=>2466,
            module: ()=>__turbopack_context__.r(2466)
        },
        "./locale/az_AZ.ts": {
            id: ()=>7191,
            module: ()=>__turbopack_context__.r(7191)
        },
        "./locale/bg_BG.ts": {
            id: ()=>3533,
            module: ()=>__turbopack_context__.r(3533)
        },
        "./locale/bn_BD.ts": {
            id: ()=>8777,
            module: ()=>__turbopack_context__.r(8777)
        },
        "./locale/by_BY.ts": {
            id: ()=>4254,
            module: ()=>__turbopack_context__.r(4254)
        },
        "./locale/ca_ES.ts": {
            id: ()=>8585,
            module: ()=>__turbopack_context__.r(8585)
        },
        "./locale/cs_CZ.ts": {
            id: ()=>4738,
            module: ()=>__turbopack_context__.r(4738)
        },
        "./locale/da_DK.ts": {
            id: ()=>3636,
            module: ()=>__turbopack_context__.r(3636)
        },
        "./locale/de_DE.ts": {
            id: ()=>6561,
            module: ()=>__turbopack_context__.r(6561)
        },
        "./locale/el_GR.ts": {
            id: ()=>706,
            module: ()=>__turbopack_context__.r(706)
        },
        "./locale/en_GB.ts": {
            id: ()=>2613,
            module: ()=>__turbopack_context__.r(2613)
        },
        "./locale/en_US.ts": {
            id: ()=>8433,
            module: ()=>__turbopack_context__.r(8433)
        },
        "./locale/es_ES.ts": {
            id: ()=>7746,
            module: ()=>__turbopack_context__.r(7746)
        },
        "./locale/et_EE.ts": {
            id: ()=>3272,
            module: ()=>__turbopack_context__.r(3272)
        },
        "./locale/eu_ES.ts": {
            id: ()=>6849,
            module: ()=>__turbopack_context__.r(6849)
        },
        "./locale/fa_IR.ts": {
            id: ()=>4112,
            module: ()=>__turbopack_context__.r(4112)
        },
        "./locale/fi_FI.ts": {
            id: ()=>7649,
            module: ()=>__turbopack_context__.r(7649)
        },
        "./locale/fr_BE.ts": {
            id: ()=>9976,
            module: ()=>__turbopack_context__.r(9976)
        },
        "./locale/fr_CA.ts": {
            id: ()=>2440,
            module: ()=>__turbopack_context__.r(2440)
        },
        "./locale/fr_FR.ts": {
            id: ()=>9599,
            module: ()=>__turbopack_context__.r(9599)
        },
        "./locale/ga_IE.ts": {
            id: ()=>5347,
            module: ()=>__turbopack_context__.r(5347)
        },
        "./locale/gl_ES.ts": {
            id: ()=>4361,
            module: ()=>__turbopack_context__.r(4361)
        },
        "./locale/he_IL.ts": {
            id: ()=>1382,
            module: ()=>__turbopack_context__.r(1382)
        },
        "./locale/hi_IN.ts": {
            id: ()=>8529,
            module: ()=>__turbopack_context__.r(8529)
        },
        "./locale/hr_HR.ts": {
            id: ()=>9610,
            module: ()=>__turbopack_context__.r(9610)
        },
        "./locale/hu_HU.ts": {
            id: ()=>1683,
            module: ()=>__turbopack_context__.r(1683)
        },
        "./locale/hy_AM.ts": {
            id: ()=>7795,
            module: ()=>__turbopack_context__.r(7795)
        },
        "./locale/id_ID.ts": {
            id: ()=>5065,
            module: ()=>__turbopack_context__.r(5065)
        },
        "./locale/is_IS.ts": {
            id: ()=>4674,
            module: ()=>__turbopack_context__.r(4674)
        },
        "./locale/it_IT.ts": {
            id: ()=>3454,
            module: ()=>__turbopack_context__.r(3454)
        },
        "./locale/ja_JP.ts": {
            id: ()=>4058,
            module: ()=>__turbopack_context__.r(4058)
        },
        "./locale/ka_GE.ts": {
            id: ()=>6067,
            module: ()=>__turbopack_context__.r(6067)
        },
        "./locale/kk_KZ.ts": {
            id: ()=>5705,
            module: ()=>__turbopack_context__.r(5705)
        },
        "./locale/km_KH.ts": {
            id: ()=>1200,
            module: ()=>__turbopack_context__.r(1200)
        },
        "./locale/kmr_IQ.ts": {
            id: ()=>4832,
            module: ()=>__turbopack_context__.r(4832)
        },
        "./locale/kn_IN.ts": {
            id: ()=>1119,
            module: ()=>__turbopack_context__.r(1119)
        },
        "./locale/ko_KR.ts": {
            id: ()=>4958,
            module: ()=>__turbopack_context__.r(4958)
        },
        "./locale/ku_IQ.ts": {
            id: ()=>5968,
            module: ()=>__turbopack_context__.r(5968)
        },
        "./locale/lt_LT.ts": {
            id: ()=>2012,
            module: ()=>__turbopack_context__.r(2012)
        },
        "./locale/lv_LV.ts": {
            id: ()=>3762,
            module: ()=>__turbopack_context__.r(3762)
        },
        "./locale/mk_MK.ts": {
            id: ()=>9238,
            module: ()=>__turbopack_context__.r(9238)
        },
        "./locale/ml_IN.ts": {
            id: ()=>682,
            module: ()=>__turbopack_context__.r(682)
        },
        "./locale/mn_MN.ts": {
            id: ()=>8654,
            module: ()=>__turbopack_context__.r(8654)
        },
        "./locale/ms_MY.ts": {
            id: ()=>4603,
            module: ()=>__turbopack_context__.r(4603)
        },
        "./locale/my_MM.ts": {
            id: ()=>972,
            module: ()=>__turbopack_context__.r(972)
        },
        "./locale/nb_NO.ts": {
            id: ()=>904,
            module: ()=>__turbopack_context__.r(904)
        },
        "./locale/ne_NP.ts": {
            id: ()=>2488,
            module: ()=>__turbopack_context__.r(2488)
        },
        "./locale/nl_BE.ts": {
            id: ()=>7576,
            module: ()=>__turbopack_context__.r(7576)
        },
        "./locale/nl_NL.ts": {
            id: ()=>3350,
            module: ()=>__turbopack_context__.r(3350)
        },
        "./locale/pl_PL.ts": {
            id: ()=>4951,
            module: ()=>__turbopack_context__.r(4951)
        },
        "./locale/pt_BR.ts": {
            id: ()=>1778,
            module: ()=>__turbopack_context__.r(1778)
        },
        "./locale/pt_PT.ts": {
            id: ()=>6538,
            module: ()=>__turbopack_context__.r(6538)
        },
        "./locale/ro_RO.ts": {
            id: ()=>5218,
            module: ()=>__turbopack_context__.r(5218)
        },
        "./locale/ru_RU.ts": {
            id: ()=>4288,
            module: ()=>__turbopack_context__.r(4288)
        },
        "./locale/si_LK.ts": {
            id: ()=>8791,
            module: ()=>__turbopack_context__.r(8791)
        },
        "./locale/sk_SK.ts": {
            id: ()=>5803,
            module: ()=>__turbopack_context__.r(5803)
        },
        "./locale/sl_SI.ts": {
            id: ()=>6872,
            module: ()=>__turbopack_context__.r(6872)
        },
        "./locale/sr_RS.ts": {
            id: ()=>1472,
            module: ()=>__turbopack_context__.r(1472)
        },
        "./locale/sv_SE.ts": {
            id: ()=>7601,
            module: ()=>__turbopack_context__.r(7601)
        },
        "./locale/ta_IN.ts": {
            id: ()=>6030,
            module: ()=>__turbopack_context__.r(6030)
        },
        "./locale/th_TH.ts": {
            id: ()=>9118,
            module: ()=>__turbopack_context__.r(9118)
        },
        "./locale/tk_TK.ts": {
            id: ()=>8409,
            module: ()=>__turbopack_context__.r(8409)
        },
        "./locale/tr_TR.ts": {
            id: ()=>1958,
            module: ()=>__turbopack_context__.r(1958)
        },
        "./locale/uk_UA.ts": {
            id: ()=>4903,
            module: ()=>__turbopack_context__.r(4903)
        },
        "./locale/ur_PK.ts": {
            id: ()=>5719,
            module: ()=>__turbopack_context__.r(5719)
        },
        "./locale/uz_UZ.ts": {
            id: ()=>9559,
            module: ()=>__turbopack_context__.r(9559)
        },
        "./locale/vi_VN.ts": {
            id: ()=>2637,
            module: ()=>__turbopack_context__.r(2637)
        },
        "./locale/zh_CN.ts": {
            id: ()=>195,
            module: ()=>__turbopack_context__.r(195)
        },
        "./locale/zh_HK.ts": {
            id: ()=>7891,
            module: ()=>__turbopack_context__.r(7891)
        },
        "./locale/zh_TW.ts": {
            id: ()=>1019,
            module: ()=>__turbopack_context__.r(1019)
        }
    });
    }),
    1936: ((__turbopack_context__) => {
    
    var { m: module, e: exports } = __turbopack_context__;
    {
    // const antd = require('./components');
    const req = __turbopack_context__.f(__turbopack_context__.r(4088));
    const antd = {};
    antd.locales = {};
    console.log('req.keys()', req.keys());
    console.log('req:', req);
    req.keys().forEach((mod)=>{
        const matches = mod.match(/\/([^/]+).tsx?$/);
        antd.locales[matches[1]] = req(mod).default;
    });
    module.exports = antd;
    }}),
    },
    {"otherChunks":[],"runtimeModuleIds":[1936]},
    ]);
    (() => {
    if (!Array.isArray(globalThis.TURBOPACK)) {
        return;
    }
    
    const CHUNK_BASE_PATH = "";
    const CHUNK_SUFFIX_PATH = "";
    const RELATIVE_ROOT_PATH = "/ROOT";
    const RUNTIME_PUBLIC_PATH = "";
    /**
     * This file contains runtime types and functions that are shared between all
     * TurboPack ECMAScript runtimes.
     *
     * It will be prepended to the runtime code of each runtime.
     */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./runtime-types.d.ts" />
    const REEXPORTED_OBJECTS = Symbol("reexported objects");
    /**
     * Constructs the `__turbopack_context__` object for a module.
     */ function Context(module) {
        this.m = module;
        this.e = module.exports;
    }
    const contextPrototype = Context.prototype;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag;
    function defineProp(obj, name, options) {
        if (!hasOwnProperty.call(obj, name)) Object.defineProperty(obj, name, options);
    }
    function getOverwrittenModule(moduleCache, id) {
        let module = moduleCache[id];
        if (!module) {
            // This is invoked when a module is merged into another module, thus it wasn't invoked via
            // instantiateModule and the cache entry wasn't created yet.
            module = createModuleObject(id);
            moduleCache[id] = module;
        }
        return module;
    }
    /**
     * Creates the module object. Only done here to ensure all module objects have the same shape.
     */ function createModuleObject(id) {
        return {
            exports: {},
            error: undefined,
            loaded: false,
            id,
            namespaceObject: undefined,
            [REEXPORTED_OBJECTS]: undefined
        };
    }
    /**
     * Adds the getters to the exports object.
     */ function esm(exports, getters) {
        defineProp(exports, "__esModule", {
            value: true
        });
        if (toStringTag) defineProp(exports, toStringTag, {
            value: "Module"
        });
        for(const key in getters){
            const item = getters[key];
            if (Array.isArray(item)) {
                defineProp(exports, key, {
                    get: item[0],
                    set: item[1],
                    enumerable: true
                });
            } else {
                defineProp(exports, key, {
                    get: item,
                    enumerable: true
                });
            }
        }
        Object.seal(exports);
    }
    /**
     * Makes the module an ESM with exports
     */ function esmExport(getters, id) {
        let module = this.m;
        let exports = this.e;
        if (id != null) {
            module = getOverwrittenModule(this.c, id);
            exports = module.exports;
        }
        module.namespaceObject = module.exports;
        esm(exports, getters);
    }
    contextPrototype.s = esmExport;
    function ensureDynamicExports(module, exports) {
        let reexportedObjects = module[REEXPORTED_OBJECTS];
        if (!reexportedObjects) {
            reexportedObjects = module[REEXPORTED_OBJECTS] = [];
            module.exports = module.namespaceObject = new Proxy(exports, {
                get (target, prop) {
                    if (hasOwnProperty.call(target, prop) || prop === "default" || prop === "__esModule") {
                        return Reflect.get(target, prop);
                    }
                    for (const obj of reexportedObjects){
                        const value = Reflect.get(obj, prop);
                        if (value !== undefined) return value;
                    }
                    return undefined;
                },
                ownKeys (target) {
                    const keys = Reflect.ownKeys(target);
                    for (const obj of reexportedObjects){
                        for (const key of Reflect.ownKeys(obj)){
                            if (key !== "default" && !keys.includes(key)) keys.push(key);
                        }
                    }
                    return keys;
                }
            });
        }
    }
    /**
     * Dynamically exports properties from an object
     */ function dynamicExport(object, id) {
        let module = this.m;
        let exports = this.e;
        if (id != null) {
            module = getOverwrittenModule(this.c, id);
            exports = module.exports;
        }
        ensureDynamicExports(module, exports);
        if (typeof object === "object" && object !== null) {
            module[REEXPORTED_OBJECTS].push(object);
        }
    }
    contextPrototype.j = dynamicExport;
    function exportValue(value, id) {
        let module = this.m;
        if (id != null) {
            module = getOverwrittenModule(this.c, id);
        }
        module.exports = value;
    }
    contextPrototype.v = exportValue;
    function exportNamespace(namespace, id) {
        let module = this.m;
        if (id != null) {
            module = getOverwrittenModule(this.c, id);
        }
        module.exports = module.namespaceObject = namespace;
    }
    contextPrototype.n = exportNamespace;
    function createGetter(obj, key) {
        return ()=>obj[key];
    }
    /**
     * @returns prototype of the object
     */ const getProto = Object.getPrototypeOf ? (obj)=>Object.getPrototypeOf(obj) : (obj)=>obj.__proto__;
    /** Prototypes that are not expanded for exports */ const LEAF_PROTOTYPES = [
        null,
        getProto({}),
        getProto([]),
        getProto(getProto)
    ];
    /**
     * @param raw
     * @param ns
     * @param allowExportDefault
     *   * `false`: will have the raw module as default export
     *   * `true`: will have the default property as default export
     */ function interopEsm(raw, ns, allowExportDefault) {
        const getters = Object.create(null);
        for(let current = raw; (typeof current === "object" || typeof current === "function") && !LEAF_PROTOTYPES.includes(current); current = getProto(current)){
            for (const key of Object.getOwnPropertyNames(current)){
                getters[key] = createGetter(raw, key);
            }
        }
        // this is not really correct
        // we should set the `default` getter if the imported module is a `.cjs file`
        if (!(allowExportDefault && "default" in getters)) {
            getters["default"] = ()=>raw;
        }
        esm(ns, getters);
        return ns;
    }
    function createNS(raw) {
        if (typeof raw === "function") {
            return function(...args) {
                return raw.apply(this, args);
            };
        } else {
            return Object.create(null);
        }
    }
    function esmImport(id) {
        const module = getOrInstantiateModuleFromParent(id, this.m);
        if (module.error) throw module.error;
        // any ES module has to have `module.namespaceObject` defined.
        if (module.namespaceObject) return module.namespaceObject;
        // only ESM can be an async module, so we don't need to worry about exports being a promise here.
        const raw = module.exports;
        return module.namespaceObject = interopEsm(raw, createNS(raw), raw && raw.__esModule);
    }
    contextPrototype.i = esmImport;
    function asyncLoader(moduleId) {
        const loader = this.r(moduleId);
        return loader(this.i.bind(this));
    }
    contextPrototype.A = asyncLoader;
    // Add a simple runtime require so that environments without one can still pass
    // `typeof require` CommonJS checks so that exports are correctly registered.
    const runtimeRequire = // @ts-ignore
    typeof require === "function" ? require : function require1() {
        throw new Error("Unexpected use of runtime require");
    };
    contextPrototype.t = runtimeRequire;
    function commonJsRequire(id) {
        const module = getOrInstantiateModuleFromParent(id, this.m);
        if (module.error) throw module.error;
        return module.exports;
    }
    contextPrototype.r = commonJsRequire;
    /**
     * `require.context` and require/import expression runtime.
     */ function moduleContext(map) {
        function moduleContext(id) {
            if (hasOwnProperty.call(map, id)) {
                return map[id].module();
            }
            const e = new Error(`Cannot find module '${id}'`);
            e.code = "MODULE_NOT_FOUND";
            throw e;
        }
        moduleContext.keys = ()=>{
            return Object.keys(map);
        };
        moduleContext.resolve = (id)=>{
            if (hasOwnProperty.call(map, id)) {
                return map[id].id();
            }
            const e = new Error(`Cannot find module '${id}'`);
            e.code = "MODULE_NOT_FOUND";
            throw e;
        };
        moduleContext.import = async (id)=>{
            return await moduleContext(id);
        };
        return moduleContext;
    }
    contextPrototype.f = moduleContext;
    /**
     * Returns the path of a chunk defined by its data.
     */ function getChunkPath(chunkData) {
        return typeof chunkData === "string" ? chunkData : chunkData.path;
    }
    function isPromise(maybePromise) {
        return maybePromise != null && typeof maybePromise === "object" && "then" in maybePromise && typeof maybePromise.then === "function";
    }
    function isAsyncModuleExt(obj) {
        return turbopackQueues in obj;
    }
    function createPromise() {
        let resolve;
        let reject;
        const promise = new Promise((res, rej)=>{
            reject = rej;
            resolve = res;
        });
        return {
            promise,
            resolve: resolve,
            reject: reject
        };
    }
    // everything below is adapted from webpack
    // https://github.com/webpack/webpack/blob/6be4065ade1e252c1d8dcba4af0f43e32af1bdc1/lib/runtime/AsyncModuleRuntimeModule.js#L13
    const turbopackQueues = Symbol("turbopack queues");
    const turbopackExports = Symbol("turbopack exports");
    const turbopackError = Symbol("turbopack error");
    function resolveQueue(queue) {
        if (queue && queue.status !== 1) {
            queue.status = 1;
            queue.forEach((fn)=>fn.queueCount--);
            queue.forEach((fn)=>fn.queueCount-- ? fn.queueCount++ : fn());
        }
    }
    function wrapDeps(deps) {
        return deps.map((dep)=>{
            if (dep !== null && typeof dep === "object") {
                if (isAsyncModuleExt(dep)) return dep;
                if (isPromise(dep)) {
                    const queue = Object.assign([], {
                        status: 0
                    });
                    const obj = {
                        [turbopackExports]: {},
                        [turbopackQueues]: (fn)=>fn(queue)
                    };
                    dep.then((res)=>{
                        obj[turbopackExports] = res;
                        resolveQueue(queue);
                    }, (err)=>{
                        obj[turbopackError] = err;
                        resolveQueue(queue);
                    });
                    return obj;
                }
            }
            return {
                [turbopackExports]: dep,
                [turbopackQueues]: ()=>{}
            };
        });
    }
    function asyncModule(body, hasAwait) {
        const module = this.m;
        const queue = hasAwait ? Object.assign([], {
            status: -1
        }) : undefined;
        const depQueues = new Set();
        const { resolve, reject, promise: rawPromise } = createPromise();
        const promise = Object.assign(rawPromise, {
            [turbopackExports]: module.exports,
            [turbopackQueues]: (fn)=>{
                queue && fn(queue);
                depQueues.forEach(fn);
                promise["catch"](()=>{});
            }
        });
        const attributes = {
            get () {
                return promise;
            },
            set (v) {
                // Calling `esmExport` leads to this.
                if (v !== promise) {
                    promise[turbopackExports] = v;
                }
            }
        };
        Object.defineProperty(module, "exports", attributes);
        Object.defineProperty(module, "namespaceObject", attributes);
        function handleAsyncDependencies(deps) {
            const currentDeps = wrapDeps(deps);
            const getResult = ()=>currentDeps.map((d)=>{
                    if (d[turbopackError]) throw d[turbopackError];
                    return d[turbopackExports];
                });
            const { promise, resolve } = createPromise();
            const fn = Object.assign(()=>resolve(getResult), {
                queueCount: 0
            });
            function fnQueue(q) {
                if (q !== queue && !depQueues.has(q)) {
                    depQueues.add(q);
                    if (q && q.status === 0) {
                        fn.queueCount++;
                        q.push(fn);
                    }
                }
            }
            currentDeps.map((dep)=>dep[turbopackQueues](fnQueue));
            return fn.queueCount ? promise : getResult();
        }
        function asyncResult(err) {
            if (err) {
                reject(promise[turbopackError] = err);
            } else {
                resolve(promise[turbopackExports]);
            }
            resolveQueue(queue);
        }
        body(handleAsyncDependencies, asyncResult);
        if (queue && queue.status === -1) {
            queue.status = 0;
        }
    }
    contextPrototype.a = asyncModule;
    /**
     * A pseudo "fake" URL object to resolve to its relative path.
     *
     * When UrlRewriteBehavior is set to relative, calls to the `new URL()` will construct url without base using this
     * runtime function to generate context-agnostic urls between different rendering context, i.e ssr / client to avoid
     * hydration mismatch.
     *
     * This is based on webpack's existing implementation:
     * https://github.com/webpack/webpack/blob/87660921808566ef3b8796f8df61bd79fc026108/lib/runtime/RelativeUrlRuntimeModule.js
     */ const relativeURL = function relativeURL(inputUrl) {
        const realUrl = new URL(inputUrl, "x:/");
        const values = {};
        for(const key in realUrl)values[key] = realUrl[key];
        values.href = inputUrl;
        values.pathname = inputUrl.replace(/[?#].*/, "");
        values.origin = values.protocol = "";
        values.toString = values.toJSON = (..._args)=>inputUrl;
        for(const key in values)Object.defineProperty(this, key, {
            enumerable: true,
            configurable: true,
            value: values[key]
        });
    };
    relativeURL.prototype = URL.prototype;
    contextPrototype.U = relativeURL;
    /**
     * Utility function to ensure all variants of an enum are handled.
     */ function invariant(never, computeMessage) {
        throw new Error(`Invariant: ${computeMessage(never)}`);
    }
    /**
     * A stub function to make `require` available but non-functional in ESM.
     */ function requireStub(_moduleId) {
        throw new Error("dynamic usage of require is not supported");
    }
    contextPrototype.z = requireStub;
    /**
     * This file contains runtime types and functions that are shared between all
     * Turbopack *development* ECMAScript runtimes.
     *
     * It will be appended to the runtime code of each runtime right after the
     * shared runtime utils.
     */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./globals.d.ts" />
    /// <reference path="./runtime-utils.ts" />
    // Used in WebWorkers to tell the runtime about the chunk base path
    function normalizeChunkPath(path) {
        if (path.startsWith("/")) {
            path = path.substring(1);
        } else if (path.startsWith("./")) {
            path = path.substring(2);
        }
        if (path.endsWith("/")) {
            path = path.slice(0, -1);
        }
        return path;
    }
    const NORMALIZED_CHUNK_BASE_PATH = normalizeChunkPath(CHUNK_BASE_PATH);
    const browserContextPrototype = Context.prototype;
    var SourceType = /*#__PURE__*/ function(SourceType) {
        /**
       * The module was instantiated because it was included in an evaluated chunk's
       * runtime.
       * SourceData is a ChunkPath.
       */ SourceType[SourceType["Runtime"] = 0] = "Runtime";
        /**
       * The module was instantiated because a parent module imported it.
       * SourceData is a ModuleId.
       */ SourceType[SourceType["Parent"] = 1] = "Parent";
        /**
       * The module was instantiated because it was included in a chunk's hot module
       * update.
       * SourceData is an array of ModuleIds or undefined.
       */ SourceType[SourceType["Update"] = 2] = "Update";
        return SourceType;
    }(SourceType || {});
    const moduleFactories = Object.create(null);
    contextPrototype.M = moduleFactories;
    const availableModules = new Map();
    const availableModuleChunks = new Map();
    function factoryNotAvailable(moduleId, sourceType, sourceData) {
        let instantiationReason;
        switch(sourceType){
            case 0:
                instantiationReason = `as a runtime entry of chunk ${sourceData}`;
                break;
            case 1:
                instantiationReason = `because it was required from module ${sourceData}`;
                break;
            case 2:
                instantiationReason = "because of an HMR update";
                break;
            default:
                invariant(sourceType, (sourceType)=>`Unknown source type: ${sourceType}`);
        }
        throw new Error(`Module ${moduleId} was instantiated ${instantiationReason}, but the module factory is not available. It might have been deleted in an HMR update.`);
    }
    const loadedChunk = Promise.resolve(undefined);
    const instrumentedBackendLoadChunks = new WeakMap();
    // Do not make this async. React relies on referential equality of the returned Promise.
    function loadChunkByUrl(chunkUrl) {
        return loadChunkByUrlInternal(1, this.m.id, chunkUrl);
    }
    browserContextPrototype.L = loadChunkByUrl;
    // Do not make this async. React relies on referential equality of the returned Promise.
    function loadChunkByUrlInternal(sourceType, sourceData, chunkUrl) {
        const thenable = BACKEND.loadChunkCached(sourceType, sourceData, chunkUrl);
        let entry = instrumentedBackendLoadChunks.get(thenable);
        if (entry === undefined) {
            const resolve = instrumentedBackendLoadChunks.set.bind(instrumentedBackendLoadChunks, thenable, loadedChunk);
            entry = thenable.then(resolve).catch((error)=>{
                let loadReason;
                switch(sourceType){
                    case 0:
                        loadReason = `as a runtime dependency of chunk ${sourceData}`;
                        break;
                    case 1:
                        loadReason = `from module ${sourceData}`;
                        break;
                    case 2:
                        loadReason = "from an HMR update";
                        break;
                    default:
                        invariant(sourceType, (sourceType)=>`Unknown source type: ${sourceType}`);
                }
                throw new Error(`Failed to load chunk ${chunkUrl} ${loadReason}${error ? `: ${error}` : ""}`, error ? {
                    cause: error
                } : undefined);
            });
            instrumentedBackendLoadChunks.set(thenable, entry);
        }
        return entry;
    }
    // Do not make this async. React relies on referential equality of the returned Promise.
    function loadChunkPath(sourceType, sourceData, chunkPath) {
        const url = getChunkRelativeUrl(chunkPath);
        return loadChunkByUrlInternal(sourceType, sourceData, url);
    }
    /**
     * Returns an absolute url to an asset.
     */ function resolvePathFromModule(moduleId) {
        const exported = this.r(moduleId);
        return exported?.default ?? exported;
    }
    browserContextPrototype.R = resolvePathFromModule;
    /**
     * no-op for browser
     * @param modulePath
     */ function resolveAbsolutePath(modulePath) {
        return `/ROOT/${modulePath ?? ""}`;
    }
    browserContextPrototype.P = resolveAbsolutePath;
    /**
     * Instantiates a runtime module.
     */ function instantiateRuntimeModule(moduleId, chunkPath) {
        return instantiateModule(moduleId, 0, chunkPath);
    }
    /**
     * Returns the URL relative to the origin where a chunk can be fetched from.
     */ function getChunkRelativeUrl(chunkPath) {
        return `${NORMALIZED_CHUNK_BASE_PATH}${chunkPath.split("/").map((p)=>encodeURIComponent(p)).join("/")}${CHUNK_SUFFIX_PATH}`;
    }
    function getPathFromScript(chunkScript) {
        if (typeof chunkScript === "string") {
            return chunkScript;
        }
        const chunkUrl = typeof TURBOPACK_NEXT_CHUNK_URLS !== "undefined" ? TURBOPACK_NEXT_CHUNK_URLS.pop() : chunkScript.getAttribute("src");
        const src = decodeURIComponent(chunkUrl.replace(/[?#].*$/, ""));
        const path = src.startsWith(CHUNK_BASE_PATH) ? src.slice(CHUNK_BASE_PATH.length) : src;
        return path;
    }
    function registerCompressedModuleFactory(moduleId, moduleFactory) {
        if (!moduleFactories[moduleId]) {
            if (Array.isArray(moduleFactory)) {
                let [moduleFactoryFn, otherIds] = moduleFactory;
                moduleFactories[moduleId] = moduleFactoryFn;
                for (const otherModuleId of otherIds){
                    moduleFactories[otherModuleId] = moduleFactoryFn;
                }
            } else {
                moduleFactories[moduleId] = moduleFactory;
            }
        }
    }
    const regexJsUrl = /\.js(?:\?[^#]*)?(?:#.*)?$/;
    /**
     * Checks if a given path/URL ends with .js, optionally followed by ?query or #fragment.
     */ function isJs(chunkUrlOrPath) {
        return regexJsUrl.test(chunkUrlOrPath);
    }
    /// <reference path="./runtime-base.ts" />
    /// <reference path="./dummy.ts" />
    const moduleCache = {};
    contextPrototype.c = moduleCache;
    /**
     * Gets or instantiates a runtime module.
     */ // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function getOrInstantiateRuntimeModule(chunkPath, moduleId) {
        const module = moduleCache[moduleId];
        if (module) {
            if (module.error) {
                throw module.error;
            }
            return module;
        }
        return instantiateModule(moduleId, SourceType.Runtime, chunkPath);
    }
    /**
     * Retrieves a module from the cache, or instantiate it if it is not cached.
     */ // Used by the backend
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getOrInstantiateModuleFromParent = (id, sourceModule)=>{
        const module = moduleCache[id];
        if (module) {
            return module;
        }
        return instantiateModule(id, SourceType.Parent, sourceModule.id);
    };
    function instantiateModule(id, sourceType, sourceData) {
        const moduleFactory = moduleFactories[id];
        if (typeof moduleFactory !== "function") {
            // This can happen if modules incorrectly handle HMR disposes/updates,
            // e.g. when they keep a `setTimeout` around which still executes old code
            // and contains e.g. a `require("something")` call.
            factoryNotAvailable(id, sourceType, sourceData);
        }
        const module = createModuleObject(id);
        moduleCache[id] = module;
        // NOTE(alexkirsz) This can fail when the module encounters a runtime error.
        try {
            const context = new Context(module);
            moduleFactory(context);
        } catch (error) {
            module.error = error;
            throw error;
        }
        module.loaded = true;
        if (module.namespaceObject && module.exports !== module.namespaceObject) {
            // in case of a circular dependency: cjs1 -> esm2 -> cjs1
            interopEsm(module.exports, module.namespaceObject);
        }
        return module;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function registerChunk([chunkScript, chunkModules, runtimeParams]) {
        const chunkPath = getPathFromScript(chunkScript);
        for (const [moduleId, moduleFactory] of Object.entries(chunkModules)){
            registerCompressedModuleFactory(moduleId, moduleFactory);
        }
        return BACKEND.registerChunk(chunkPath, runtimeParams);
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./runtime-utils.ts" />
    /// A 'base' utilities to support runtime can have externals.
    /// Currently this is for node.js / edge runtime both.
    /// If a fn requires node.js specific behavior, it should be placed in `node-external-utils` instead.
    async function externalImport(id) {
        let raw;
        try {
            raw = await import(id);
        } catch (err) {
            // TODO(alexkirsz) This can happen when a client-side module tries to load
            // an external module we don't provide a shim for (e.g. querystring, url).
            // For now, we fail semi-silently, but in the future this should be a
            // compilation error.
            throw new Error(`Failed to load external module ${id}: ${err}`);
        }
        if (raw && raw.__esModule && raw.default && "default" in raw.default) {
            return interopEsm(raw.default, createNS(raw), true);
        }
        return raw;
    }
    contextPrototype.y = externalImport;
    function externalRequire(id, thunk, esm = false) {
        let raw;
        try {
            raw = thunk();
        } catch (err) {
            // TODO(alexkirsz) This can happen when a client-side module tries to load
            // an external module we don't provide a shim for (e.g. querystring, url).
            // For now, we fail semi-silently, but in the future this should be a
            // compilation error.
            throw new Error(`Failed to load external module ${id}: ${err}`);
        }
        if (!esm || raw.__esModule) {
            return raw;
        }
        return interopEsm(raw, createNS(raw), true);
    }
    externalRequire.resolve = (id, options)=>{
        return require.resolve(id, options);
    };
    contextPrototype.x = externalRequire;
    /**
     * This file contains the runtime code specific to the Turbopack development
     * ECMAScript DOM runtime.
     *
     * It will be appended to the base development runtime code.
     */ /* eslint-disable @typescript-eslint/no-unused-vars */ /// <reference path="./runtime-base.ts" />
    /// <reference path="./runtime-types.d.ts" />
    let BACKEND;
    /**
     * Maps chunk paths to the corresponding resolver.
     */ const chunkResolvers = new Map();
    (()=>{
        BACKEND = {
            registerChunk (chunkPath, params) {
                const chunkUrl = getChunkRelativeUrl(chunkPath);
                const resolver = getOrCreateResolver(chunkUrl);
                resolver.resolve();
                if (params == null) {
                    return;
                }
                for (const otherChunkData of params.otherChunks){
                    const otherChunkPath = getChunkPath(otherChunkData);
                    const otherChunkUrl = getChunkRelativeUrl(otherChunkPath);
                    // Chunk might have started loading, so we want to avoid triggering another load.
                    getOrCreateResolver(otherChunkUrl);
                }
                if (params.runtimeModuleIds.length > 0) {
                    for (const moduleId of params.runtimeModuleIds){
                        getOrInstantiateRuntimeModule(chunkPath, moduleId);
                    }
                }
            },
            /**
         * Loads the given chunk, and returns a promise that resolves once the chunk
         * has been loaded.
         */ loadChunkCached (sourceType, sourceData, chunkUrl) {
                return doLoadChunk(sourceType, sourceData, chunkUrl);
            }
        };
        function getOrCreateResolver(chunkUrl) {
            let resolver = chunkResolvers.get(chunkUrl);
            if (!resolver) {
                let resolve;
                let reject;
                const promise = new Promise((innerResolve, innerReject)=>{
                    resolve = innerResolve;
                    reject = innerReject;
                });
                resolver = {
                    resolved: false,
                    loadingStarted: false,
                    promise,
                    resolve: ()=>{
                        resolver.resolved = true;
                        resolve();
                    },
                    reject: reject
                };
                chunkResolvers.set(chunkUrl, resolver);
            }
            return resolver;
        }
        /**
       * Loads the given chunk, and returns a promise that resolves once the chunk
       * has been loaded.
       */ function doLoadChunk(sourceType, _sourceData, chunkUrl) {
            const resolver = getOrCreateResolver(chunkUrl);
            if (resolver.loadingStarted) {
                return resolver.promise;
            }
            if (sourceType === SourceType.Runtime) {
                // We don't need to load chunks references from runtime code, as they're already
                // present in the DOM.
                resolver.loadingStarted = true;
                // We need to wait for JS chunks to register themselves within `registerChunk`
                // before we can start instantiating runtime modules, hence the absence of
                // `resolver.resolve()` in this branch.
                return resolver.promise;
            }
            if (typeof importScripts === "function") {
                // We're in a web worker
                if (isJs(chunkUrl)) {
                    self.TURBOPACK_NEXT_CHUNK_URLS.push(chunkUrl);
                    importScripts(TURBOPACK_WORKER_LOCATION + chunkUrl);
                } else {
                    throw new Error(`can't infer type of chunk from URL ${chunkUrl} in worker`);
                }
            } else {
                // TODO(PACK-2140): remove this once all filenames are guaranteed to be escaped.
                const decodedChunkUrl = decodeURI(chunkUrl);
                if (isJs(chunkUrl)) {
                    const previousScripts = document.querySelectorAll(`script[src="${chunkUrl}"],script[src^="${chunkUrl}?"],script[src="${decodedChunkUrl}"],script[src^="${decodedChunkUrl}?"]`);
                    if (previousScripts.length > 0) {
                        // There is this edge where the script already failed loading, but we
                        // can't detect that. The Promise will never resolve in this case.
                        for (const script of Array.from(previousScripts)){
                            script.addEventListener("error", ()=>{
                                resolver.reject();
                            });
                        }
                    } else {
                        const script = document.createElement("script");
                        script.src = chunkUrl;
                        // We'll only mark the chunk as loaded once the script has been executed,
                        // which happens in `registerChunk`. Hence the absence of `resolve()` in
                        // this branch.
                        script.onerror = ()=>{
                            resolver.reject();
                        };
                        // Append to the `head` for webpack compatibility.
                        document.head.appendChild(script);
                    }
                } else {
                    throw new Error(`can't infer type of chunk from URL ${chunkUrl}`);
                }
            }
            resolver.loadingStarted = true;
            return resolver.promise;
        }
    })();
    const chunksToRegister = globalThis.TURBOPACK;
    globalThis.TURBOPACK = { push: registerChunk };
    chunksToRegister.forEach(registerChunk);
    function factory () {
        for (const [,, runtimeParams] of chunksToRegister) {
            if (runtimeParams?.runtimeModuleIds?.length > 0) {
                const module = moduleCache[runtimeParams.runtimeModuleIds[0]];
                if (module.error) throw module.error;
                // any ES module has to have `module.namespaceObject` defined.
                if (module.namespaceObject) return module.namespaceObject;
                // only ESM can be an async module, so we don't need to worry about exports being a promise here.
                const raw = module.exports;
                return module.namespaceObject = interopEsm(raw, createNS(raw), raw && raw.__esModule);
            }
        }
    }
    
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory();
    } else if (typeof exports === 'object') {
        exports["antd"] = factory();
    } else {
        globalThis["antd"] = factory();
    }
    globalThis.TURBOPACK = [];
    })();
    
    
    //# sourceMappingURL=antd-with-locales.js.map