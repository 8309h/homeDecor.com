

// KITCHEN DATA
let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;

let  wishListData = localStorage.getItem("wishlist") || [];
let cart  = JSON.parse(localStorage.getItem("Addtocart")) || [];



let kitchenData=[

    {
        "ProductId":51,
        "Name":"Stainless Steel Cookware Set",
        "Category":"Cookware",
        "Image":"https://cb.scene7.com/is/image/Crate/CrateKitchenSS10pcSetSSS22/$web_pdp_main_carousel_med$/220214143338/crate-and-barrel-evencook-core-10-pc.-stainless-steel-pot-and-pan-set.jpg",
        "Price":7000,
        "Description":"An in-house design for the at-home chef, our exclusive cookware collection has been scrutinized at every stage to bring you the heirloom quality and refined look your kitchen deserves."
          
   },
   {
    "ProductId":52,
    "Name":" Cream Ceramic Nonstick 8-Piece Cookware",
    "Category":"Cookware",
    "Image":"https://cb.scene7.com/is/image/Crate/CBEvnckCrCrmc8pcSetCrmSSF22/$web_pdp_main_carousel_med$/220425165719/crate-and-barrel-evencook-core-ceramic-8pc-set-cream.jpg",
    "Price":6000,
    "Description":"Our exclusive cookware collection has been scrutinized at every stage to bring you the heirloom quality and refined look your kitchen deserves."
      
},
{
    "ProductId":53,
    "Name":"Sapphire Blue Non-Stick Ceramic Cookware",
    "Category":"Cookware",
    "Image":"https://cb.scene7.com/is/image/Crate/CarawayHmNSCrCkw7pSphSSS22/$web_pdp_main_carousel_med$/220214151306/caraway-home-sapphire-7-piece-ceramic-non-stick-cookware-set-with-gold-hardware.jpg",
    "Price":7500,
    "Description":"You'll be smitten with this beautifully designed cookware set that's as amazing to look at as it is to use. Featuring a minimalist design with glam gold-finished handles and glossy,"
      
},
{
    "ProductId":54,
    "Name":" Classic Precision Self-Sharpening",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/HenckelsCPSlShr15pStSSS21_VND/$web_pdp_main_carousel_med$/201123164409/henckels-clsc-prcsn-slf-shrpn-15.jpg",
    "Price":4000,
    "Description":"Razor-sharp blades stay sharp with this comprehensive knife set. Satin-finished stainless steel blades make short work of a wide range of cutting tasks"
      
},
{
    "ProductId":55,
    "Name":"12-Piece HUA Knife",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/CangshanKB12pTaiSetSSF22_VND/$web_pdp_main_carousel_med$/220817131937/cangshan-kita-blue-12-piece-tai-block-set.jpg",
    "Price":9000,
    "Description":"A display-worthy knife set almost too stunning to use. Hand-sharpened by highly skilled artisans, the full-tang X-7 steel blades ripple "
      
},
{
    "ProductId":56,
    "Name":"In-Drawer Knife Set",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/WusthofGrmt7pcIndrwrStSSS21_VND/$web_pdp_main_carousel_med$/210826093232/wusthof-gourmet-7-piece-in-drawer-knife-set.jpg",
    "Price":1500,
    "Description":"One of the most trusted names in cutlery, Wüsthof® offers the perfect knife for every cutting, chopping and slicing job. Strong, long-lasting blades are precision-tapered "
      
},
{
    "ProductId":57,
    "Name":"Silt Green Ceramic Bakeware",
    "Category":"Bakeware",
    "Image":"https://cb.scene7.com/is/image/Crate/CarawayCmpltBakewareGrnSSF22/$web_pdp_main_carousel_med$/220524121052/caraway-silt-green-complete-bakeware-set.jpg",
    "Price":5000,
    "Description":"You'll be smitten with this beautifully designed bakeware set that's as amazing to look at as it is to use. Featuring minimalist designs"
      
},
{
    "ProductId":58,
    "Name":"Baking Dishes with Bamboo Lids",
    "Category":"Bakeware",
    "Image":"https://cb.scene7.com/is/image/Crate/BakersWoodLidsS3SHS20/$web_pdp_main_carousel_med$/191011120256/bakers-with-wood-lids-s-3.jpg",
    "Price":400,
    "Description":" Angled corners and bamboo lids earn this set of white baking dishes serious style points Made of durable stoneware the bakers come in three sizes"
      
},
{
    "ProductId":59,
    "Name":"Non-Stick Bakeware Set",
    "Category":"Bakeware",
    "Image":"https://cb.scene7.com/is/image/Crate/USAPan8pcBakewareSetSHS20/$web_pdp_main_carousel_med$/191106150323/usa-pan-8-piece-bakeware-set.jpg",
    "Price":800,
    "Description":"Bake enticing blueberry muffins, gingersnaps, seven-layer bars, snickerdoodles and meatloaf—and even roast a chicken—with this versatile bakeware set."
      
},
{
    "ProductId":60,
    "Name":"Deluxe Black Outdoor Charcoal Grill",
    "Category":"BBQ&Grilling",
    "Image":"https://cb.scene7.com/is/image/Crate/WeberPrfDlxChrGrlBkSSS22_VND/$web_pdp_main_carousel_med$/211116174536/weber-performer-dlux-grl-blk.jpg",
    "Price":4999,
    "Description":"The ultimate grilling experience. Weber's scaled-up version of their classic two-wheel kettle is crafted of premium-grade steel and clad in heavy-gauge"
      
},
{
    "ProductId":61,
    "Name":"Outdoor Square Fry Pan",
    "Category":"BBQ&Grilling",
    "Image":"https://cb.scene7.com/is/image/Crate/CrateKitchenBBQSqFryPanSSS22/$web_pdp_main_carousel_med$/220120102631/cratekitchen-bbq-square-fry-pan.jpg",
    "Price":600,
    "Description":"Perforated with countless tiny holes, this outdoor frying pan basket infuses meat, poultry, fish and vegetables with irresistible smoky flavor while allowing fat to drip away"
      
},
{
    "ProductId":62,
    "Name":"Smart Grill",
    "Category":"BBQ&Grilling",
    "Image":"https://cb.scene7.com/is/image/Crate/WeberGnSX335NGSmGrlSSS22/$web_pdp_main_carousel_med$/220201143249/weber-genesis-sx335-grl.jpg",
    "Price":70000,
    "Description":"Let this top-performance natural gas smart grill take charge of backyard entertaining. The temperature probe and Weber Connect smart grilling technology offer reminders,"
      
},
{
    "ProductId":63,
    "Name":"Face-Grain Cutting Boards",
    "Category":"Cutting Boards",
    "Image":"https://cb.scene7.com/is/image/Crate/CrateKtchnMplFGGrpFSSS22/$web_pdp_main_carousel_med$/220106112014/cratekitchen-maple-face-grain-boards.jpg",
    "Price":450,
    "Description":"The intentionally simple designs of our signature Crate & Barrel cutting boards keep all the attention on the beauty of wood. Crafted of maple with a whitewash finish,"
      
},
{
    "ProductId":64,
    "Name":"Walnut Cutting Board with Spikes ",
    "Category":"Cutting Boards",
    "Image":"https://cb.scene7.com/is/image/Crate/RevWlntCutBdWSpks20x15SSF22/$web_pdp_main_carousel_med$/220512162507/reversible-walnut-cutting-board-with-spikes-20-x-15.jpg",
    "Price":250,
    "Description":"Thhe intentionally simple designs of our signature Crate & Barrel cutting boards keep all the attention on the beauty of wood. Crafted of black walnut,"
      
},
{
    "ProductId":65,
    "Name":" Maple Cutting Board",
    "Category":"Cutting Boards",
    "Image":"https://cb.scene7.com/is/image/Crate/RevMapleCutBdWMtRst24x18SSF22/$web_pdp_main_carousel_med$/220512162529/reversible-maple-cutting-board-with-meat-rest-24-x-18.jpg",
    "Price":550,
    "Description":"The intentionally simple designs of our signature Crate & Barrel cutting boards keep all the attention on the beauty of wood. Crafted of maple,"
      
},
{
    "ProductId":66,
    "Name":"Matte White 5-Quart Tilt-Head Stand Mixer",
    "Category":"Kitchen Appliances ",
    "Image":"https://cb.scene7.com/is/image/Crate/KitchenAidArtStMxMWAVSSS21_VND/$web_pdp_main_carousel_med$/210412132033/kitchenaid-artisan-series-5-quart-tilt-head-matte-white-stand-mixer.jpg",
    "Price":8000,
    "Description":"KitchenAid's heavy-duty stand mixer brings a sophisticated matte finish to classic white. From mixing cake batter and whipping cream to kneading bread dough and shredding chicken"
      
},
{
    "ProductId":67,
    "Name":"Steel Blue 5-Quart Tilt-Head Stand Mixer",
    "Category":"Kitchen Appliances ",
    "Image":"https://cb.scene7.com/is/image/Crate/KitchenAid5qtTltHdStMxStBlAVS18/$web_pdp_main_carousel_med$/210401144313/kitchenaid-artisan-steel-blue-stand-mixer.jpg",
    "Price":5000,
    "Description":"Our steely blue, heavy-duty stand mixer delivers KitchenAid® power and planetary mixing action that spirals the beater to 67 touch points within the bowl for quick and complete mixing. "
      
},
{
    "ProductId":68,
    "Name":"Black 7-Quart Smart Mixer with Auto Sense",
    "Category":"Kitchen Appliances ",
    "Image":"https://cb.scene7.com/is/image/Crate/GEProfile7qSmMxrWAtSnCBSSF22/$web_pdp_main_carousel_med$/221118104237/ge-profile-carbon-black-7-quart-smart-mixer-with-auto-sense.jpg",
    "Price":60000,
    "Description":"Loaded with ingenious features, this smart stand mixer takes the guesswork out of making breads, desserts, sauces and more"
      
},
{
    "ProductId":69,
    "Name":"Cast Iron Dutch Oven",
    "Category":"Cookware",
    "Image":"https://cb.scene7.com/is/image/Crate/LeCreuSg7p25qtFchOvnGrphtSHS18/$web_pdp_main_carousel_med$/220913134623/le-creuset-oven-7.25qt-graphite.jpg",
    "Price":1700,
    "Description":"Le Creuset's cast-iron Dutch oven is clad in smooth enamel in our own exclusive shade of graphite grey, rendering each piece impervious to acid, alkali, odors and stains"
      
},
{
    "ProductId":70,
    "Name":"Cast Iron Everyday Pan with Lid",
    "Category":"Cookware",
    "Image":"https://cb.scene7.com/is/image/Crate/LeCreuSig5qtEvdayPanCreamSHF20/$web_pdp_main_carousel_med$/200814140339/le-creuset-signature-5-qt.-cream-everyday-pan-with-lid.jpg",
    "Price":1900,
    "Description":"Revered by both professional chefs and home cooks since its 1925 debut, Le Creuset's classic French cookware is prized for its utilitarian good looks and unsurpassed heat retention"
      
},
{
    "ProductId":71,
    "Name":" Matte Black Tall Round",
    "Category":"Cookware",
    "Image":"https://cb.scene7.com/is/image/Crate/Staub5QTallRndCocotteMtBlkSSS21/$web_pdp_main_carousel_med$/210115125035/staub-5qt-tall-cocotte-matte-blk.jpg",
    "Price":1000,
    "Description":"Preferred by some of the world's greatest chefs, French-made Staub cookware is renowned for its superior heat retention and oven-to-table good looks"
      
},
{
    "ProductId":72,
    "Name":" 6-Piece Tai Knife Block Set",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/Cangshan6pcBlockSetWhiteSSF20/$web_pdp_main_carousel_med$/200319172401/cangshan-white-6-piece-tai-knife-block-set.jpg",
    "Price":3000,
    "Description":"High-alloy Swedish steel takes and holds a precise edge for a set of knives that maintain their impressive sharpness even with daily use."
      
},
{
    "ProductId":73,
    "Name":"Grey Shiplap",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/GreyShiplap15pcKnfBlkSetSHS18/$web_pdp_main_carousel_med$/220913134645/schmidt-brothers-grey-shiplap-15-piece-knife-set.jpg",
    "Price":4000,
    "Description":"Designed by New York's Schmidt Brothers, this handsome knife set includes sharp, stain- and rust-resistant forged"
      
},  {
    "ProductId":74,
    "Name":" Professional Knife Block Set ",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/ShunPremier8pcPrfsBlkSetSHF19/$web_pdp_main_carousel_med$/190508132245/shun-premier-8-pc-professional-block-set.jpg",
    "Price":7000,
    "Description":"From the makers of Japan's finest cutlery comes the Premier collection with a unique new  finish. Hand-hammered texture creates depressions with an effect similar to hollow-ground,"
      
},  {
    "ProductId":75,
    "Name":"Barrel Pastry Blender",
    "Category":"Bakeware",
    "Image":"https://cb.scene7.com/is/image/Crate/CBBeechwdPastryBlenderSSF22/$web_pdp_main_carousel_med$/220524121046/crate-and-barrel-beechwood-pastry-blender.jpg",
    "Price":250,
    "Description":"ut cold butter into flour for the flakiest possible crusts with our signature pastry blender. Mirror-polished stainless steel shape"
      
},  {
    "ProductId":76,
    "Name":"Bench Scraper ",
    "Category":"Bakeware",
    "Image":"https://cb.scene7.com/is/image/Crate/CBBeechwdBenchScraperSSF22/$web_pdp_main_carousel_med$/220524121039/crate-and-barrel-beechwood-bench-scraper.jpg",
    "Price":150,
    "Description":"Cut, scrape and portion out dough with our signature bench scraper. Mirror-polished stainless steel shapes a sleek utensil with a beechwood handle "
      
},  {
    "ProductId":77,
    "Name":"Non-Stick Muffin Pan",
    "Category":"Bakeware",
    "Image":"https://cb.scene7.com/is/image/Crate/USAPan12CupMuffinPanSHF16/$web_pdp_main_carousel_med$/220913133313/usa-pan-pro-line-non-stick-muffin-pan.jpg",
    "Price":730,
    "Description":"Our exclusive commercial-quality bakeware features a unique textured surface that promotes ideal air circulation and a double-duty nonstick Americoat "
      
},  {
    "ProductId":78,
    "Name":"Kamado E6 Black Grill",
    "Category":"BBQ&Grilling",
    "Image":"https://cb.scene7.com/is/image/Crate/WeberSmtKmdE6ChrGrlSSS22_VND/$web_pdp_main_carousel_med$/220201143249/weber-summit-kamado-e6-grl.jpg",
    "Price":85000,
    "Description":"The ultimate grilling experience. Weber's classic charcoal grill coats dual-walled insulated steel with heavy-gauge, rust-resistant porcelain enamel in sleek black"
      
},  {
    "ProductId":79,
    "Name":"Outdoor Pizza Oven",
    "Category":"BBQ&Grilling",
    "Image":"https://cb.scene7.com/is/image/Crate/OoniKodaPizzaOvnAVSSF20_VND/$web_pdp_main_carousel_med$/201009130425/ooni-koda-pizza-oven.jpg",
    "Price":9500,
    "Description":"With a heating capability that rivals large professional pizza ovens, the compact Ooni Koda 12 outdoor pizza oven cooks pies to perfection at home"
      
},  {
    "ProductId":80,
    "Name":"Outdoor Pellet Grill",
    "Category":"BBQ&Grilling",
    "Image":"https://cb.scene7.com/is/image/Crate/WeberSmkFrPltEX4GrlSSS22_VND/$web_pdp_main_carousel_med$/220209165618/weber-smokefire-ex4-pellet-grill.jpg",
    "Price":95000,
    "Description":"Let this top-performance wood-fired smart grill take charge of backyard entertaining. The temperature probes and Weber Connect smart grilling technology offer reminders."
      
},  {
    "ProductId":81,
    "Name":"Combi Espresso Machine",
    "Category":"Kitchen Appliances ",
    "Image":"https://cb.scene7.com/is/image/Crate/DelonghiDgtlCombiMchSSF20_VND/$web_pdp_main_carousel_med$/200521124435/delonghi-digi-combi-cof-esp-makr.jpg",
    "Price":19000,
    "Description":" This coffeemaker's dual heating system brews coffee and espresso at once for the best of both worlds in no time."
      
},  {
    "ProductId":82,
    "Name":"Black Coffee Grinder",
    "Category":"Kitchen Appliances ",
    "Image":"https://cb.scene7.com/is/image/Crate/BaratzaEncoreCfeGrinderSHF16/$web_pdp_main_carousel_med$/220913133654/baratza-encore-coffee-grinder.jpg",
    "Price":5500,
    "Description":"The Baratza Encore grinder features precision-cut steel burrs that produce a wide range of grind profiles perfect for an exceptional coffee drink from French press to espresso"
      
},  {
    "ProductId":83,
    "Name":" Coffee Maker",
    "Category":"Kitchen Appliances ",
    "Image":"https://cb.scene7.com/is/image/Crate/ChemexOttomaticSHS18/$web_pdp_main_carousel_med$/220913134656/chemex-ottomatic-coffee-maker.jpg",
    "Price":14000,
    "Description":"The latest version of this simply elegant automatic brewing system now offers the ability to brew both hot and cold coffee. "
      
},  {
    "ProductId":84,
    "Name":"Dome Dual-Fuel Oven",
    "Category":"BBQ&Grilling",
    "Image":"https://cb.scene7.com/is/image/Crate/GozneyDmDlFuelOvnBnSSS23_VND/$web_pdp_main_carousel_med$/221216162322/gozney-dome-dual-fuel-oven-bone.jpg",
    "Price":66000,
    "Description":"Enjoy the precision and convenience of a professional-grade oven outdoors. Ideal for pizzas, the dome-shaped oven fired by wood or propane gas also allows you to roast,"
      
},  
{
    "ProductId":85,
    "Name":"Gozney Dome Stand",
    "Category":"BBQ&Grilling",
    "Image":"https://cb.scene7.com/is/image/Crate/GozneyDomeStndSSS23_VND/$web_pdp_main_carousel_med$/221216162328/gozney-dome-stand.jpg",
    "Price":3000,
    "Description":"Give your Gozney oven (sold separately) a lift to the perfect height for cooking with this specially designed stand. "
      
},  {
    "ProductId":86,
    "Name":"Philip AirFryer",
    "Category":"Kitchen Appliances",
    "Image":"https://cb.scene7.com/is/image/Crate/PhilipsEssDgXLArFrySSF21_VND/$web_pdp_main_carousel_med$/210923102721/philips-essentials-digital-xl-airfryer.jpg",
    "Price":30000,
    "Description":"The folks at Philips have been perfecting air fryer technology for 10 years, enabling this extra-large air fryer to fry, bake, grill, roast and reheat with delicious and even results. "
      
},  {
    "ProductId":87,
    "Name":"Air Fryer with ClearCook",
    "Category":"Kitchen Appliances",
    "Image":"https://cb.scene7.com/is/image/Crate/InstantVPlD8qSSAFCCSSS22_VND/$web_pdp_main_carousel_med$/220209165618/instant-vortex-8q-dual-air-fryer.jpg",
    "Price":17000,
    "Description":"This two-in-one air fryer lets you prepare a side and main at the same time or double up on your favorite crispy treat. In addition to air fry, roast, broil, bake, reheat and dehydrate"
      
},  {
    "ProductId":88,
    "Name":"8-Slot In-Drawer Knife Block",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/Zwilling8slInDwKnBlkSSS22_VND/$web_pdp_main_carousel_med$/220127084334/zwilling-8-slot-in-drawer-knife-block.jpg",
    "Price":1540,
    "Description":"Protect and store your knives while freeing up valuable countertop space with this in-drawer knife block. The low-profile beechwood tray takes cutlery "
      
},  {
    "ProductId":89,
    "Name":"Gourmet Grey 7-Slot Block",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/WusthofGrmtGreyOS7SltBlkSSF21/$web_pdp_main_carousel_med$/210929112706/wusthof-gourmet-grey-7-slot-block.jpg",
    "Price":499,
    "Description":" One of the most trusted names in cutlery, Wüsthof offers a seven-slot block designed to hold all of your favorite Gourmet Grey knives"
      
},  {
    "ProductId":90,
    "Name":"Diamond Hone Sharpener ",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/ChefsChcAngSlcDmdHnShpM290SHF18/$web_pdp_main_carousel_med$/220913135303/chefschoice-angleselect-diamond-hone-sharpener-m290.jpg",
    "Price":1703,
    "Description":"This sharpener allows select a 20-degree angle for classic knives and a 15-degree angle for Asian-style and contemporary knives "
      
},  {
    "ProductId":91,
    "Name":"8-Piece Steak Knife Set",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/WsthfMgSSOlvStKfS8pSSS21_VND/$web_pdp_main_carousel_med$/210209160419/wusthof-mignon-stainless-olivewood-8-piece-steak-knife-set.jpg",
    "Price":950,
    "Description":"This steak knife set from the masters at Wusthof nestles eight sleek stainless steel steak knives in a beautiful olivewood presentation chest. "
      
},  {
    "ProductId":92,
    "Name":"Steak Knife Set",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/CangshanKB4pSteakStSSF22_VND/$web_pdp_main_carousel_med$/220817131906/cangshan-kita-blue-4-piece-steak-knife-set.jpg",
    "Price":850,
    "Description":"A steak knife set almost too stunning to use. Hand-sharpened by highly skilled artisans, the full-tang X-7 steel blades ripple"
      
},  {
    "ProductId":93,
    "Name":"Electtric Cooker",
    "Category":"Kitchen Appliances ",
    "Image":"https://cb.scene7.com/is/image/Crate/AllClad7qtDlxSlwCkrWAlmInsSHS19/$web_pdp_main_carousel_med$/220913144039/all-clad-7-qt.-deluxe-slow-cooker-with-aluminum-insert.jpg",
    "Price":7600,
    "Description":"Equipped with a 26-hour programmable timer, this large-size slow cooker allows you to prep, leave the house and come home to a healthy, "
      
},  {
    "ProductId":94,
    "Name":"Deep Air Fryer",
    "Category":"Kitchen Appliances ",
    "Image":"https://cb.scene7.com/is/image/Crate/PhilipsPDXXLAFFRmTcSSF21_VND/$web_pdp_main_carousel_med$/210916155257/philips-premium-airfryer-xxl.jpg",
    "Price":14000,
    "Description":"The folks at Philips have been perfecting air fryer technology for 10 years, enabling this extra-extra-large air fryer to fry, bake, grill, roast, reheat, dehydrate and toast with delicious and even results."
      
},  {
    "ProductId":95,
    "Name":"Walnut Cutting Board",
    "Category":"Cutting Boards",
    "Image":"https://cb.scene7.com/is/image/Crate/ReversibleWalnutCollectionFHS18/$web_pdp_main_carousel_med$/220913134845/john-boos-reversible-walnut-cutting-board.jpg",
    "Price":3400,
    "Description":"This beautiful cutting board is crafted out of black walnut by the revered woodworkers at John Boos, founded in 1887."
      
},  {
    "ProductId":96,
    "Name":" Rectangular Chopping Block",
    "Category":"Cutting Boards",
    "Image":"https://cb.scene7.com/is/image/Crate/JohnBoosEndGrnRctChpBlkMplSHF18/$web_pdp_main_carousel_med$/220913143558/john-boos-maple-end-grain-rectangular-chopping-block.jpg",
    "Price":1567,
    "Description":"This beautiful board showcases a checkerboard of sustainably sourced solid end-grain hard rock maple. "
      
},  {
    "ProductId":97,
    "Name":"Acacia Wood Board",
    "Category":"Cutting Boards",
    "Image":"https://cb.scene7.com/is/image/Crate/MadeiraHrrngbnAcaGrpFHS19/$web_pdp_main_carousel_med$/190411135224/madeira-herringbone-acacia-wood-board.jpg",
    "Price":1980,
    "Description":"Durable acacia in a variety of tones is arranged in a stunning herringbone board. Use as a spectacular cheese board,"
      
},  {
    "ProductId":98,
    "Name":"Round Cake Pan",
    "Category":"BakeWare",
    "Image":"https://cb.scene7.com/is/image/Crate/USAPan9inRoundCakePanSHF16/$web_pdp_main_carousel_med$/220913133304/usa-pan-pro-line-non-stick-round-cake-pan.jpg",
    "Price":1500,
    "Description":"Our commercial-quality bakeware features a unique textured surface that promotes ideal air circulation and a double-duty nonstick "
      
},  {
    "ProductId":99,
    "Name":"Ikon Handheld Sharpener",
    "Category":"Cutlery",
    "Image":"https://cb.scene7.com/is/image/Crate/IkonHandheldSharpenerSHF16/$web_pdp_main_carousel_med$/220913133646/wusthof-classic-ikon-handheld-sharpener.jpg",
    "Price":1200,
    "Description":"This stylishly designed, hand-held knife sharpener offers two stages of sharpening to keep your knives in tip-top shape."
      
},  {
    "ProductId":100,
    "Name":"Crème Brûlée Dishes",
    "Category":"Bakeware",
    "Image":"https://cb.scene7.com/is/image/Crate/CremeBruleeDishesS2SHS20/$web_pdp_main_carousel_med$/191105122313/creme-brulee-dishes-s-2.jpg",
    "Price":100,
    "Description":"Consisting of only four ingredients, crème brûlée is easy to prepare at home. For restaurant-worthy results, bake and serve this luscious dessert in our white porcelain dishes."
      
},
]




let kitchen = document.querySelector(".kitchen-container")

localStorage.setItem("kitchen", JSON.stringify(kitchenData))


function displayData(data) {
    kitchen.innerHTML = ""
    data.forEach(function (el) {

        let div = document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src", el.Image)

        let names = document.createElement("h3")
        names.textContent = el.Name;

        let price = document.createElement("h5")
        price.textContent = "₹ " + el.Price

        let desc = document.createElement("p")
        desc.textContent = el.Description

        let buynow = document.createElement("button")
        buynow.textContent = "Add To Cart"
    

        buynow.addEventListener("click", function () {

            
            let cart = JSON.parse(localStorage.getItem("Addtocart")) ;

            let datapresent = false;
            for (let i = 0; i < cart.length; i++) {

                if (cart[i].ProductId == el.ProductId) {
                    datapresent = true;
                    break;
                }
            }

            console.log(datapresent)
            if (datapresent == true) {
                alert("Product Already in Cart❌");

            } else {
                cart.push({ ...el, quantity: 1 });
                localStorage.setItem("Addtocart", JSON.stringify(cart));
                alert("Product Added To Cart ✔");

            }
        })

              
        let but=document.createElement("i")
        but.setAttribute("id","heartss")
        but.setAttribute("class","fa fa-heart")

        but.addEventListener("click",function(){

            let wishListData = JSON.parse(localStorage.getItem("wishlist")) ;

            let datapresent = false;
            for (let i = 0; i <  wishListData.length; i++) {

                if ( wishListData[i].ProductId == el.ProductId) {
                    datapresent = true;
                    break;
                }
            }

            console.log(datapresent)
            if (datapresent == true) {
                alert("Product Already in wishlist ❌");

            } else {
                wishListData.push({ ...el, quantity: 1 });
                localStorage.setItem("wishlist", JSON.stringify(wishListData));
                alert("Product Added To Wishlist ✔");

            }

      })
      
        div.append(image,names,price,desc,buynow,but)

        kitchen.append(div);


    })
}
displayData(kitchenData)

function search() {
    let q = document.querySelector("input").value;
   
    let newData = kitchenData.filter(function (el) {
        return el.Name.toLowerCase().includes(q.toLowerCase());
    });

    console.log(newData)
    displayData(newData);
}
let prio = document.querySelector("#filter");

prio.addEventListener("change", function (event) {
    event.preventDefault();

    let selected = event.target.value;

    if (selected == "all") {
        displayData(kitchenData)
       
    } else {

        let filtered_data = kitchenData.filter(function (el) {
            return el.Category == selected
        });
        displayData(filtered_data)
      
    }

});

let sorted = document.querySelector("#sort");

sorted.addEventListener("change", function (event) {

    let val = document.querySelector("#sort").value;
    //console.log(val)

    if (val == "LTH") {
        let data1 = kitchenData.sort(function (a, b) {
            return a.Price - b.Price;

        })
       
        displayData(data1)
        
        


    } else if (val == "HTL") {
        let sorteddata = kitchenData.sort(function (a, b) {
            return b.Price - a.Price;

        })
        displayData(sorteddata)
       
    } else {
        displayData(kitchenData)
     
        
    }
})


