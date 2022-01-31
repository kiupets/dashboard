import { Dot } from "../components/shared";
export const widgetData = [
    {
        number: "126",
        string: "Localizaciones",
        clase: 'icon1',

    },
    {
        number: "456",
        string: "Tags selectionadas",
        icon: <Dot style={{ backgroundColor: "#F25A5A",width:"16px",height:"16px",borderRadius:"50%" }} />,
        clase: 'icon1',
        toast: true

    },
    {
        number: "16",
        clase: 'icon1',
        string: 'Stores sin comunicación',
        icon: <Dot style={{ backgroundColor: "#F25A5A",width:"16px",height:"16px",borderRadius:"50%" }} />
    },

    {
        number: "21",
        string: "Incidencias",
        clase: 'icon1',
        icon: <Dot style={{ backgroundColor: "#F25A5A",width:"16px",height:"16px",borderRadius:"50%" }} />,
    },
    {
        string: "Stores con incidencias",
        number: "5%",
        clase: 'icon1'
    },
];