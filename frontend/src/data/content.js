export const SITE = {
    name: "Angel Ali",
    alias: "Chef Boy Ali",
    nickname: "The Cook of Converse",
    location: "San Antonio & Converse, Texas",
    venue: "The Thursty Turtle · 1626 NE Interstate 410 Loop, San Antonio, TX",
    instagram: "https://www.instagram.com/chefboyy_ali/",
    instagramHandle: "@chefboyy_ali",
    facebook: "https://www.facebook.com/chefboyyali",
    facebookHandle: "@chefboyyali",
};

export const HERO_IMAGE = "https://customer-assets.emergentagent.com/job_cook-of-converse/artifacts/1ps5ny9v_Screenshot%202026-04-28%20180944.png";
export const ABOUT_IMAGE = "https://customer-assets.emergentagent.com/job_cook-of-converse/artifacts/0ovpye32_image.png";
export const COOKOUT_GALLERY = [
    {
        url: "https://customer-assets.emergentagent.com/job_cook-of-converse/artifacts/3jk3qf2m_Screenshot%202026-04-28%20180932.png",
        alt: "Slow-smoked whole pig finished with gold leaf",
        caption: "Whole pig · gold leaf finish",
    },
    {
        url: "https://customer-assets.emergentagent.com/job_cook-of-converse/artifacts/ip236xla_Screenshot%202026-04-28%20181109.png",
        alt: "Spice-rubbed whole chicken on the grill",
        caption: "Whole bird · low and slow",
    },
    {
        url: "https://customer-assets.emergentagent.com/job_cook-of-converse/artifacts/hfkb1uq2_image.png",
        alt: "Smoked beef ribs with shoestring fries",
        caption: "Smoked ribs · shoestring fries",
        crop: { scale: 2.4, originX: 30, originY: 55 },
    },
    {
        url: "https://customer-assets.emergentagent.com/job_cook-of-converse/artifacts/3rpuou07_image.png",
        alt: "Bacon-wrapped slab fresh off the grill",
        caption: "Bacon weave · sliced fresh",
        crop: { scale: 2.5, originX: 32, originY: 52 },
    },
    {
        url: "https://customer-assets.emergentagent.com/job_cook-of-converse/artifacts/te2916ha_image.png",
        alt: "Wood platter loaded with grilled meats and bread",
        caption: "The cookout platter",
        crop: { scale: 2.4, originX: 32, originY: 57 },
    },
    {
        url: "https://customer-assets.emergentagent.com/job_cook-of-converse/artifacts/4hts4tr4_image.png",
        alt: "Event flyer: May 2, 1 PM at The Thursty Turtle, 1 free plate per person",
        caption: "May 2 · 1 PM · come hungry",
        crop: { scale: 2.5, originX: 34, originY: 50 },
    },
];

export const SPECIALTIES = [
    {
        title: "Texas BBQ",
        kicker: "Low & slow",
        description: "Brisket smoked over post oak. Spare ribs with bark for days. Hot links and pulled pork that taste like a backyard summer.",
        image: "https://images.pexels.com/photos/36700839/pexels-photo-36700839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        items: ["Smoked Brisket", "St. Louis Ribs", "Pulled Pork", "Hot Links"],
    },
    {
        title: "Comfort Food",
        kicker: "Hearty & honest",
        description: "Buttermilk-fried chicken, chicken & waffles, mac with three cheeses, and wings tossed in house sauces.",
        image: "https://images.pexels.com/photos/7169619/pexels-photo-7169619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        items: ["Buttermilk Fried Chicken", "Wings (3 sauces)", "Mac & Cheese", "Loaded Sliders"],
    },
    {
        title: "Mexican & Tex-Mex",
        kicker: "Family table",
        description: "Hand-pressed tortillas, sizzling fajitas, slow-braised barbacoa, and enchiladas blanketed in chili gravy.",
        image: "https://images.pexels.com/photos/32371269/pexels-photo-32371269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        items: ["Steak Fajitas", "Barbacoa Tacos", "Enchiladas Suizas", "Pollo Asado"],
    },
    {
        title: "Rustic Italian",
        kicker: "Slow Sundays",
        description: "Hand-rolled pastas, slow Sunday gravy, baked ziti, chicken parmigiana — the kind of meals that make a table go quiet.",
        image: "https://images.pexels.com/photos/30217392/pexels-photo-30217392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        items: ["Carbonara", "Sunday Gravy & Meatballs", "Baked Ziti", "Chicken Parm"],
    },
    {
        title: "Decadent Desserts",
        kicker: "The sweet finish",
        description: "Tres leches soaked overnight, silk-smooth flan, dark chocolate pots de crème, and a rotating cobbler of the season.",
        image: "https://images.pexels.com/photos/36616786/pexels-photo-36616786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        items: ["Tres Leches", "Mexican Flan", "Pot de Crème", "Seasonal Cobbler"],
    },
];

export const SAMPLE_MENUS = [
    {
        title: "The Backyard Smoke",
        subtitle: "Family-style BBQ for 8–20",
        courses: [
            { name: "First", items: "Smoked queso · cornbread with honey butter · pickled vegetables" },
            { name: "Main", items: "Post-oak brisket · St. Louis ribs · house hot links" },
            { name: "Sides", items: "Brown-butter mac · charro beans · slaw · jalapeño cornbread" },
            { name: "Sweet", items: "Peach cobbler · vanilla bean ice cream" },
        ],
    },
    {
        title: "Domingo en la Mesa",
        subtitle: "Tex-Mex Sunday supper",
        courses: [
            { name: "Para empezar", items: "Guacamole molcajete · esquites · queso fundido" },
            { name: "Plato fuerte", items: "Steak & chicken fajitas · barbacoa tacos · enchiladas suizas" },
            { name: "Acompañamientos", items: "Arroz rojo · frijoles charros · tortillas hechas a mano" },
            { name: "Postre", items: "Tres leches · flan de cajeta" },
        ],
    },
    {
        title: "Ali's Italian Table",
        subtitle: "Rustic Italian, slow & generous",
        courses: [
            { name: "Antipasti", items: "Burrata · grilled bread · marinated olives · salumi" },
            { name: "Primi", items: "Hand-rolled pappardelle bolognese · cacio e pepe" },
            { name: "Secondi", items: "Chicken parmigiana · braised short rib · roasted vegetables" },
            { name: "Dolce", items: "Affogato · dark chocolate budino" },
        ],
    },
];

export const SERVICES = [
    {
        title: "Private Dinners",
        description: "Multi-course meals cooked in your kitchen for date nights, anniversaries, and intimate gatherings of 2–10.",
    },
    {
        title: "Backyard Events",
        description: "Full-service BBQ and Tex-Mex spreads for birthdays, reunions, and graduations from 15 to 75 guests.",
    },
    {
        title: "Custom Menus",
        description: "Bring your story, dietary needs, and cravings — Ali builds the menu around the people at your table.",
    },
    {
        title: "Drop-Off Catering",
        description: "Fully prepared family-style platters delivered, plated, and ready to serve. Perfect for offices and small parties.",
    },
];

export const TESTIMONIALS = [
    { quote: "Best brisket we've had outside of Lockhart. The whole block was knocking on our door.", author: "Marisol R.", role: "Backyard birthday, 40 guests" },
    { quote: "Ali built our anniversary menu around our first date. We cried over the flan. Worth every penny.", author: "James & Tomás", role: "Private dinner for 2" },
    { quote: "He fed 60 people, cleaned the kitchen, and somehow remembered every kid's name.", author: "Whitney K.", role: "Family reunion" },
    { quote: "The Sunday gravy tastes like my nonna's. I don't say that lightly.", author: "Daniel P.", role: "Italian table for 12" },
    { quote: "Tres leches that I think about every Tuesday at 3pm.", author: "Aisha L.", role: "Office catering" },
    { quote: "Hired him twice. Already booking a third. He just gets it.", author: "Roberto V.", role: "Quinceañera, 80 guests" },
];

export const EVENT_TYPES = [
    "Private Dinner",
    "Birthday",
    "Anniversary",
    "Wedding / Rehearsal",
    "Corporate / Office",
    "Quinceañera",
    "Family Reunion",
    "Other",
];
