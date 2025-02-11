var credit = " ROBUX", 
    credits = "50000 5000 11000 9999 25000".split(" "), 
    names = "GamerLily123 NoobMaster99 BuilderJohn22 EpicProAlex AdoptMeFan88 ObbyKingX Brookhaven_Queen RobloxianHero ProPlayerMike LegendaryBuilder ObbyMasterXx LilyPlayz TycoonTyler AlexPlayzYT RobloxFanatic77 NinjaNoob321 EpicGamerSarah PetLoverMia ObbySpeedRun RobuxHunter24 AntonSphere Unitara54 PixelPioneer MusicMarauder AquaAdventurer ArtisticExplorer NatureNomad ScienceSleuth CreativeJourney FitnessFreak FoodieAdventures TravelExplorer MovieBuff GeekyGamer SoccerChampion PetLover FitnessFanatic FitnessFreak GamingGur Hylysackxx ImBetterThanU CarmeloLoco WizardLucyMo Anton177 AdahMoer HondaLover Francisco82 Roger2x LetsTourAround TkCombatu TechEnthusiast MovieBuff CreativeArtist NatureLover ScienceNerd Fashionista DIYExpert Bookworm PetLover FoodieTraveler SoccerStar ArtisticAdventurer AdventureSeeker LilSheep Stefani4Me EmileQn BeeK ElenaGreat Artur98 WorstGamer03 Abe99 IrisBerry CallMeAlexa xManOnFire Caprice05 Combat666 HailMary DataMiner02 IdleKing WatchForYoko YasminFlower HDstreaming Hopeland97".split(" ");


function create() {
    // اختيار اسم عشوائي من القائمة
    var userName = names[Math.floor(Math.random() * names.length)];
    // اختيار عدد عشوائي من Robux من القائمة
    var robuxAmount = credits[Math.floor(Math.random() * credits.length)];
    
    // إنشاء النص بالشكل المطلوب مع تنسيقات الألوان
    var message = `
        <span style="color: black; font-weight: bold; font-size: 12px;">${userName}</span> 
        <span style="color: gray; font-size: 12px;">completed</span> 
        <span style="color: green; font-size: 12px;">earned ${robuxAmount}</span>
        <span style="font-size: 12px;">${credit}</span>
    `;
    
    // عرض الإشعار باستخدام VanillaToasts
    VanillaToasts.create({
        title: `<div style="display: inline-block;">${message}</div>`,
        type: "success",
        icon: "https://up6.cc/2024/11/173179068629191.jpeg",
        timeout: 2500
    });

    // استدعاء الدالة مرة أخرى بعد 3 ثوانٍ
    setTimeout(create, 3000);
}

// تشغيل الدالة لأول مرة
create();
