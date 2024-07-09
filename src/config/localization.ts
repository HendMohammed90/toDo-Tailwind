import {
    TranslationsList,
    setLocalizationConfigurations,
} from "@mongez/localization";

const translations: TranslationsList = {
    en: {
        headerTitle: "Todo List",
        AddButtonText: "Add",
        EditButtonText: "Edit",
        DeleteButtonText: "Delete",
        CompleteButtonText: "Complete",
        SaveButtonText:"save",
        ButtonPlaceholder: "Write Your Todos"
    },
    ar: {
        headerTitle: " قائمة المهام",
        AddButtonText: "اضافة",
        EditButtonText: "تعديل",
        DeleteButtonText: "حذف",
        CompleteButtonText: "مكتمل",
        SaveButtonText: "حفظ",
        ButtonPlaceholder : "اكتب مهمتك "

    },
}

setLocalizationConfigurations({
    defaultLocaleCode: "en",
    fallback: "en",
    translations: translations,
});

