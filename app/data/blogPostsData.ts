interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string;
}

// Note: Content is plain text here. For rich text/markdown, the structure and rendering would differ.
export const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "Hoe intergenerationeel wonen eenzaamheid vermindert",
    excerpt: "Ontdek hoe het samenwonen van studenten en ouderen bijdraagt aan het verminderen van eenzaamheid en het versterken van sociale banden.",
    image: "/blog/blog1.png", // Ensure this image exists in public/blog/
    date: "15 maart 2024",
    author: "Emma de Vries",
    content: `Intergenerationeel wonen is een groeiend concept waarbij jongeren, vaak studenten, samenwonen met ouderen in bijvoorbeeld verzorgingstehuizen. Dit model biedt niet alleen een oplossing voor het woningtekort onder studenten, maar het heeft ook diepgaande positieve effecten op het welzijn van zowel jong als oud.

Een van de belangrijkste voordelen is de vermindering van eenzaamheid, een probleem dat zowel bij ouderen als jongeren speelt. Door dagelijkse interacties, gedeelde activiteiten en wederzijdse ondersteuning ontstaan er betekenisvolle relaties die het gevoel van isolatie doorbreken. Studenten brengen levendigheid en een frisse blik, terwijl ouderen hun levenservaring en wijsheid delen. Deze synergie verrijkt het leven van alle betrokkenen en versterkt de sociale cohesie binnen de woongemeenschap. Bovendien blijkt uit onderzoek dat deze vorm van wonen kan bijdragen aan een betere gezondheid en een hogere levenskwaliteit voor ouderen, terwijl studenten profiteren van een betaalbare woonruimte en waardevolle levenslessen leren.`
  },
  {
    id: 2,
    title: "Tips voor succesvol samenwonen",
    excerpt: "Praktische adviezen en ervaringen van studenten en ouderen die al deelnemen aan het SamenWonen project.",
    image: "/blog/blog2.png", // Ensure this image exists in public/blog/
    date: "10 maart 2024",
    author: "Thomas Bakker",
    content: `Succesvol intergenerationeel samenwonen vraagt om wederzijds begrip, respect en duidelijke communicatie. Hier zijn enkele tips gebaseerd op ervaringen van deelnemers aan het SamenWonen project:

1. **Maak duidelijke afspraken:** Bespreek verwachtingen rondom huishoudelijke taken, geluidsoverlast, bezoek en gezamenlijke activiteiten. Duidelijkheid voorkomt misverstanden.
2. **Wees open en communicatief:** Praat regelmatig met elkaar, niet alleen over praktische zaken, maar ook over hoe het gaat. Luister naar elkaars behoeften en zorgen.
3. **Respecteer elkaars privacy en levensstijl:** Iedereen heeft behoefte aan eigen ruimte en tijd. Respecteer de verschillen in dagritme en gewoonten.
4. **Neem deel aan gezamenlijke activiteiten:** Gedeelde momenten, zoals samen eten, een spelletje doen of een wandeling maken, versterken de band.
5. **Wees geduldig en flexibel:** Samenwonen met iemand van een andere generatie kan aanpassingsvermogen vragen. Sta open voor elkaars perspectieven en wees bereid compromissen te sluiten. Door deze tips toe te passen, kan een harmonieuze en verrijkende woonomgeving worden gecreëerd.`
  },
  {
    id: 3,
    title: "De impact van SamenWonen op de gemeenschap",
    excerpt: "Een analyse van de positieve effecten die intergenerationeel wonen heeft op lokale gemeenschappen.",
    image: "/blog/blog3.png", // Ensure this image exists in public/blog/
    date: "5 maart 2024",
    author: "Sophie van Dijk",
    content: `Intergenerationele woonprojecten zoals SamenWonen hebben een positieve uitstraling die verder reikt dan de bewoners zelf. Ze dragen bij aan een meer inclusieve en verbonden lokale gemeenschap.

Ten eerste bevorderen ze het begrip en de solidariteit tussen generaties, wat stereotypen kan doorbreken en sociale cohesie versterkt. Buurtbewoners worden vaak betrokken bij activiteiten, wat leidt tot een levendiger sociaal klimaat.

Ten tweede kunnen deze projecten een impuls geven aan de lokale economie en zorgsector. Studenten kunnen bijvoorbeeld vrijwilligerswerk doen of parttime werken in het verzorgingstehuis, wat de personeelsdruk verlicht. Ook kunnen ze lokale voorzieningen ondersteunen.

Ten derde dragen ze bij aan een efficiënter gebruik van bestaande woonruimte en infrastructuur. Leegstaande kamers in verzorgingstehuizen worden benut, wat helpt bij het aanpakken van het woningtekort. Al met al creëert intergenerationeel wonen een win-winsituatie die niet alleen de direct betrokkenen ten goede komt, maar ook de bredere gemeenschap versterkt en vitaliseert.`
  }
]; 