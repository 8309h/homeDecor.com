

/// JS FILE FOR FUNITURE.HTML PAGE  CODE BY SURAJ BAHN SINGH


let furnitureData = document.querySelector(".furniture-container")
let furnitureData2 = document.querySelector(".furniture-container2")

let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;




let displaywishcount = document.getElementById("wishcount");




let furniture = [
    //     {
    //         "ProductId":1,
    //         "Name":"Teak Extendable Dining Table",
    //         "Category":"Table",
    //         "Image":"https://cb.scene7.com/is/image/Crate/LakinExtDiningTable3QSSS20_1x1/$web_pdp_main_carousel_med$/200402124905/lakin-81-recycled-teak-extendable-dining-table.jpg",
    //         "Price":20000,
    //         "Description":"Good in quality and highle sold product"

    //    },
    {
        "ProductId": 2,
        "Name": "Eaves 86 Rectangular Dining Table",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/EavesDiningTable86inSOSSS22/$web_pdp_main_carousel_med$/211209114603/eaves-dining-table-86.jpg",
        "Price": 25000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"

    },
    {
        "ProductId": 3,
        "Name": "Lounge Deep Chair and a Half",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/LoungeDChairNHalfTCSOSSS23_3D/$web_pdp_main_carousel_med$/221013155339/lounge-deep-chair-and-a-half.jpg",
        "Price": 35000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"

    },
    {
        "ProductId": 4,
        "Name": "Faye Sofa",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/FayeSofaSOSSF21_3D/$web_pdp_main_carousel_med$/210716142430/faye-sofa.jpg",
        "Price": 45000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"



    },
    {
        "ProductId": 5,
        "Name": "Velvet Swivel Dining Chair",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/OfeliaSwvlVlvtDngChrGrnSOSSF20_1x1/$web_pdp_main_carousel_med$/200611101414/ofelia-hunter-green-velvet-swivel-dining-chair.jpg",
        "Price": 15000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"

    }
    , {
        "ProductId": 6,
        "Name": "Notch Sofa",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/Notch88SofaAdmSOSSF20_3D_1x1/$web_pdp_main_carousel_med$/200812112450/notch-sofa.jpg",
        "Price": 55000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"


    },
    {
        "ProductId": 7,
        "Name": "Wood Kids Play Table",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/BradySquarePlayTableMdBlueSHS20_1x1/$web_pdp_main_carousel_med$/191016105325/brady-midnight-blue-square-play-table.jpg",
        "Price": 5000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"


    },
    {
        "ProductId": 8,
        "Name": "Panos Acacia Wood End Table",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/PanosEndTableSOSSS22/$web_pdp_main_carousel_med$/220309143512/panos-end-table.jpg",
        "Price": 25000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"


    },
    {
        "ProductId": 9,
        "Name": "Mackinley Oak Wood End Table",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/MackinleyWdEndTblSOSSS22/$web_pdp_main_carousel_med$/220330160057/mackinley-oak-wood-end-table.jpg",
        "Price": 35000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"


    }
    ,
    {
        "ProductId": 10,
        "Name": " Deep Track-Arm Sofa",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/ArisD88inSofaSOSSF21_3D/$web_pdp_main_carousel_med$/210930160422/aris-88-deep-track-arm-sofa.jpg",
        "Price": 45000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"


    },

    {
        "ProductId": 11,
        "Name": "Avondale Wood Leg Sofa",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/AvondaleWLSofaTPSOSSS21_3D/$web_pdp_main_carousel_med$/210723141241/avondale-wood-leg-sofa.jpg",
        "Price": 35000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"


    }
    ,
    {
        "ProductId": 12,
        "Name": "Ankara Accent Chair",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/AnkaraAshChairwCsIvorySSS20_1x1/$web_pdp_main_carousel_med$/210914171237/ankara-grey-wash-frame-chair-with-fabric-cushion.jpg",
        "Price": 15000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"


    },
    {
        "ProductId": 13,
        "Name": "Upholstered Chair",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/ZumaLoungeChairSOSSS21/$web_pdp_main_carousel_med$/201229123844/zuma-lounge-chair.jpg",
        "Price": 25000,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"


    },
    {
        "ProductId": 14,
        "Name": "Vuzzo Wingback Chair",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/VuzzoChairSOSSF22/$web_pdp_main_carousel_med$/220422165920/new-family.jpg",
        "Price": 5300,
        "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione  explicabo sunt placeat corrupti alias esse"


    },
    {
        "ProductId": 15,
        "Name": "Lemon Adirondack",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/VistaIIAdrndkSdTblLmnSOSSS21_3D/$web_pdp_main_carousel_med$/210215154017/vista-ii-lemon-adirondack-side-table.jpg",
        "Price": 8000,
        "Description": "Vista II Lemon Adirondack Outdoor Side Table by POLYWOOD®"


    },
    {
        "ProductId": 16,
        "Name": "Aruba Adirondack",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/VistaIIAdrndkSdTblArbSOSSS21_3D/$web_pdp_main_carousel_med$/210215154014/vista-ii-aruba-adirondack-side-table.jpg",
        "Price": 7000,
        "Description": "Vista II Aruba Adirondack Outdoor Side Table by POLYWOOD®"


    },
    {
        "ProductId": 17,
        "Name": "Black Adirondack",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/VistaIIAdrndkSdTblBlkSOSSS21_3D/$web_pdp_main_carousel_med$/210301095011/vista-ii-black-adirondack-side-table.jpg",
        "Price": 11000,
        "Description": "Vista II Black Adirondack Outdoor Side Table by POLYWOOD®"


    },
    {
        "ProductId": 18,
        "Name": "Infiniti Curve Back Sofa",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/InfinitiSofaOatSOSSF20_3D/$web_pdp_main_carousel_med$/210315122449/infiniti-curve-back-sofa.jpg",
        "Price": 56000,
        "Description": "Infiniti Curve Back Sofa with great cushioning"


    },
    {
        "ProductId": 19,
        "Name": "Petrie Midcentury Sofa",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/PetrieSofaJFtGrySOSSF20_3D_1x1/$web_pdp_main_carousel_med$/200731103241/petrie-midcentury-sofa.jpg",
        "Price": 115000,
        "Description": "Petrie Midcentury Sofa is good in color and texture"


    },
    {
        "ProductId": 20,
        "Name": "Gather Bench Sofa",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/item_662_673_552_0/a/s9JyonuEG5OxnLH9FYNw/item_662_673_552_0.jpg?$web_pdp_main_carousel_med$",
        "Price": 55000,
        "Description": "Striking the perfect balance between comfort and modern style,"


    },
    {
        "ProductId": 21,
        "Name": "Baby Activity Chair",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/SurpriseFriendsActvChrSSF22/$web_pdp_main_carousel_med$/220321183030/surprise-friends-baby-activity-chair.jpg",
        "Price": 35000,
        "Description": " Surprise Friends baby activity chair keeps curious babies engaged and busy with hands-on play"


    },
    {
        "ProductId": 22,
        "Name": "Velvet Accent Chair",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/AlexChairClassicVelvetGreySOSSS20_1x1/$web_pdp_main_carousel_med$/200728130715/alex-grey-velvet-accent-chair.jpg",
        "Price": 9000,
        "Description": " Alex sculpts a stylish chair that's also exceptionally comfortable."


    },
    {
        "ProductId": 23,
        "Name": "Wells Chair ",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/WellsFChairNGSOSSF21_3D/$web_pdp_main_carousel_med$/220823173358/wells-chair-with-natural-leg-finish.jpg",
        "Price": 25000,
        "Description": "An updated version of the classic club chair, Wells looks modern "


    },
    {
        "ProductId": 24,
        "Name": "Glass-Door Bookshelf",
        "Category": "Storage Cabinet",
        "Image": "https://cb.scene7.com/is/image/Crate/CalypsoWDCbBsGDHtchNTSOSSF22/$web_pdp_main_carousel_med$/220816173924/calypso-natural-modular-wood-door-base-and-glass-door-bookshelf-hutch.jpg",
        "Price": 45000,
        "Description": "Calypso Natural Modular Wood-Door Base and Glass-Door Bookshelf Hutch"


    },
    {
        "ProductId": 25,
        "Name": "Lighted Bar Set",
        "Category": "Storage Cabinet",
        "Image": "https://cb.scene7.com/is/image/Crate/LemoineNatBarCabHtchIISOSSS22/$web_pdp_main_carousel_med$/220104151326/lemoine-locking-lighted-bar-set.jpg",
        "Price": 8000,
        "Description": "Our Lemoine bar set stacks an illuminated, glass-fronted cabinet atop a locking bar"


    },
    {
        "ProductId": 26,
        "Name": "Natural Storage Cabinet ",
        "Category": "Storage Cabinet",
        "Image": "https://cb.scene7.com/is/image/Crate/FieldsCaneStrgCabNtrlSHS20_1x1/$web_pdp_main_carousel_med$/191209164410/fields-natural-storage-cabinet.jpg",
        "Price": 75000,
        "Description": "Fields Natural Storage Cabinet by Leanne Ford made by accurecy"


    },
    {
        "ProductId": 27,
        "Name": "Ivy 70 Dining Table",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/IvyDiningTable72inSHS20_1x1/$web_pdp_main_carousel_med$/200916164241/ivy-70x40-rectangle-wood-dining-table.jpg",
        "Price": 45000,
        "Description": "The iconic Parsons table meets traditional Chinese woodworking in our Ivy dining table. "


    },
    {
        "ProductId": 28,
        "Name": "Parsons White Marble",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/DkStBs60x36MblTp3QF14_3D_1x1/$web_pdp_main_carousel_med$/220913132254/marble-top-dark-steel-base-60x36-parsons-dining-table.jpg",
        "Price": 35000,
        "Description": "Parsons White Marble Top/ Dark Steel Base 60x36 Dining Table"


    },
    {
        "ProductId": 29,
        "Name": "Glass-Top Dining Table",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/EmmaDiningTableSOSSF21/$web_pdp_main_carousel_med$/210331134932/emma-wood-dining-bench.jpg",
        "Price": 75000,
        "Description": " A full bullnose edge rounds the underside of the table and the interior of its legs."


    },
    {
        "ProductId": 30,
        "Name": "Sobro 65",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/Sobro61inDiningTableWlntSOSSF21/$web_pdp_main_carousel_med$/210921123035/sobro-walnut-dining-table.jpg",
        "Price": 70000,
        "Description": "Sobro brings drama to the dining table. Oversized, monolithic legs support a thick slab of wood."


    },
    {
        "ProductId": 31,
        "Name": "Coterie Ebonized ",
        "Category": "Storage Cabinet",
        "Image": "https://cb.scene7.com/is/image/Crate/CoterieFrmhsStgCabEbnSOSSF22/$web_pdp_main_carousel_med$/220712150218/coterie-storage-cabinet-ebonized.jpg",
        "Price": 95000,
        "Description": "Coterie Ebonized Storage Cabinet our Coterie storage cabinet provides statement-making storage"


    },
    {
        "ProductId": 32,
        "Name": "Keenan Bar Cabinet",
        "Category": "Storage Cabinet",
        "Image": "https://cb.scene7.com/is/image/Crate/KeenanBarCabinetSOSSF21/$web_pdp_main_carousel_med$/210707135254/keenan-bar-cabinet.jpg",
        "Price": 85000,
        "Description": "this bar cabinet's teak facade create a dynamic pattern of perpendicular lines inspired by traditional Japanese block prints."


    },
    {
        "ProductId": 33,
        "Name": "Light Brown Teak ",
        "Category": "Storage Cabinet",
        "Image": "https://cb.scene7.com/is/image/Crate/BlakeGrey2DrCabinetSSS20_1x1/$web_pdp_main_carousel_med$/200616171054/blake-grey-wash-2-door-cabinet.jpg",
        "Price": 35000,
        "Description": "Blake Light Brown Teak and Rattan 2-Door Storage Cabinet"


    },
    {
        "ProductId": 34,
        "Name": "Dusty Mauve Velvet ",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/AveryDstyMauveVlvSwvlChr3QSSF22/$web_pdp_main_carousel_med$/220506144418/avery-dusty-mauve-velvet-swivel-chair.jpg",
        "Price": 17000,
        "Description": "When it comes to turning heads, the Avery Swivel is the perfect showstopper for any room. "


    },
    {
        "ProductId": 35,
        "Name": "Angolare Armless",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/AngolareBslALChairSOSSF22/$web_pdp_main_carousel_med$/220810162738/angolare-basil-velvet-armless-chair-by-athena-calderone.jpg",
        "Price": 33000,
        "Description": "Low, modern and modular, our Angolare sectional collection"


    },
    {
        "ProductId": 36,
        "Name": "Paso Green ",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/PasoPolyAdirondackChrGrnSOSSS21/$web_pdp_main_carousel_med$/210121161541/paso-green-adirondack-chair.jpg",
        "Price": 5000,
        "Description": "Paso Green Outdoor Adirondack Chair by POLYWOOD®"


    },
    {
        "ProductId": 37,
        "Name": "Rollins Ebony Leather",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/RollinsRASofaEbonySOSSF22/$web_pdp_main_carousel_med$/220524115245/rollins-ebony-leather-tufted-right-arm-sofa.jpg",
        "Price": 96000,
        "Description": "Luxurious top-grain leather brings a clubby feel to our mid-century-inspired Rollins sectional collection."


    },
    {
        "ProductId": 38,
        "Name": "Rollins Camel Leather",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/RollinsRASofaCamelSOSSF22/$web_pdp_main_carousel_med$/220524115246/rollins-camel-leather-tufted-right-arm-sofa.jpg",
        "Price": 45000,
        "Description": "Luxurious top-grain leather brings a clubby feel to our mid-century-inspired Rollins sectional collection"


    },
    {
        "ProductId": 39,
        "Name": "Carved Wood Storage",
        "Category": "Storage Cabinet",
        "Image": "https://cb.scene7.com/is/image/Crate/RaffaelCvWdStMdCnsBkSmSOSSF22/$web_pdp_main_carousel_med$/220916164407/raffael-small-black-carved-wood-storage-media-console.jpg",
        "Price": 65000,
        "Description": "A carved honeycomb pattern wraps Raffael's black-stained exterior in conversation-sparking texture and dimension."


    },
    {
        "ProductId": 40,
        "Name": "Vertex Bookcase Bar Cabinet",
        "Category": "Storage Cabinet",
        "Image": "https://cb.scene7.com/is/image/Crate/VertexBookcaseBarSOSSS21/$web_pdp_main_carousel_med$/201124094500/vertex-bookcase-bar.jpg",
        "Price": 5000,
        "Description": "Vertex's converging angles make a dynamic play of oak's beautiful cathedral grain."


    },
    {
        "ProductId": 41,
        "Name": "Black Metal Storage ",
        "Category": "Storage Cabinet",
        "Image": "https://cb.scene7.com/is/image/Crate/BrunoCabinetSOSSS22/$web_pdp_main_carousel_med$/220411124402/bruno-black-metal-storage-display-cabinet.jpg",
        "Price": 35000,
        "Description": "Sleek in anything-but-basic black, our metal Bruno cabinet brings a chic, industrial edge to household storage. "


    },
    {
        "ProductId": 42,
        "Name": "Pershing Leather Curved-Arm",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/PershingLthrAptSofaOchreSOSSF21/$web_pdp_main_carousel_med$/211102113341/pershing-leather-curved-arm-79-sofa.jpg",
        "Price": 95000,
        "Description": "Art Deco curves meet 1970s lounge in our utterly contemporary Pershing leather collection"


    },
    {
        "ProductId": 43,
        "Name": "Modern Tufted Sofa",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/ByrdieSofaRiderBlkSOSSS20_3D_1x1/$web_pdp_main_carousel_med$/200512113754/byrdie-black-leather-modern-tufted-sofa.jpg",
        "Price": 76000,
        "Description": "Byrdie Black Leather Modern Tufted Sofa There's nothing stuffy about this clubby-meets-mid-century leather sofa."


    },
    {
        "ProductId": 44,
        "Name": "Green Roll-Arm Sofa",
        "Category": "Sofa",
        "Image": "https://cb.scene7.com/is/image/Crate/Timson96inSofaOOSOSSF22_3D/$web_pdp_main_carousel_med$/220610102501/timson-96-sofa-ol.jpg",
        "Price": 83000,
        "Description": "Timson relaxes the traditional roll-arm sofa for a look that's casual and cool."


    },
    {
        "ProductId": 45,
        "Name": "Lowe Smoke Leather",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/LoweSdChairSmokeSHS15_1x1/$web_pdp_main_carousel_med$/220913132251/lowe-smoke-leather-side-chair.jpg",
        "Price": 15000,
        "Description": "Stylish and contemporary Lowe wraps the classic Parsons-style chair in pure color"


    },
    {
        "ProductId": 46,
        "Name": "Red Leather Dining Chair",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/LoweSdChairRedSHS15_1x1/$web_pdp_main_carousel_med$/220913132251/lowe-red-leather-side-chair.jpg",
        "Price": 9000,
        "Description": "Stylish and contemporary Lowe wraps the classic Parsons-style chair in pure color."


    },
    {
        "ProductId": 47,
        "Name": "Libby Natural Cane",
        "Category": "Chair",
        "Image": "https://cb.scene7.com/is/image/Crate/LibbyNatCaneDngChrSOSSF21/$web_pdp_main_carousel_med$/210827111312/libby-natural-cane-dining-chair.jpg",
        "Price": 23000,
        "Description": "Mixed materials refresh the retro roots of our Libby dining chair"


    },
    {
        "ProductId": 48,
        "Name": "Mahogany Adirondack ",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/VistaIIAdrndkSdTblMhgSOSSS21_3D/$web_pdp_main_carousel_med$/210301095020/vista-ii-mahogany-adirondack-side-table.jpg",
        "Price": 5000,
        "Description": "Vista II Mahogany Adirondack Outdoor Side Table by POLYWOOD®"


    },
    {
        "ProductId": 49,
        "Name": "Lime Adirondack ",
        "Category": "Table",
        "Image": "https://cb.scene7.com/is/image/Crate/VistaIIAdrndkSdTblLmSOSSS21_3D/$web_pdp_main_carousel_med$/210215154021/vista-ii-lime-adirondack-side-table.jpg",
        "Price": 9000,
        "Description": "Vista II Lime Adirondack Outdoor Side Table by POLYWOOD®"


    },
    {


        "ProductId":1,
        "Name":"Teak Extendable Dining Table",
        "Category":"Table",
        "Image":"https://cb.scene7.com/is/image/Crate/LakinExtDiningTable3QSSS20_1x1/$web_pdp_main_carousel_med$/200402124905/lakin-81-recycled-teak-extendable-dining-table.jpg",
        "Price":20000,
        "Description":"Good in quality and highle sold product"
        
},
    {
        "ProductId":50,
        "Name":"Green Adirondack",
        "Category":"Table",
        "Image":"https://cb.scene7.com/is/image/Crate/VistaIIGreenSideTableSHS19_1x1/$web_pdp_main_carousel_med$/190411135543/vista-ii-green-adirondack-side-table.jpg",
        "Price":13000,
        "Description":"Vista II Green Adirondack Outdoor Side Table by POLYWOOD®"
        


    },







]

let  wishListData = localStorage.getItem("wishlist") || [];
let cart  = JSON.parse(localStorage.getItem("Addtocart")) || [];




function displayData(data) {
    furnitureData.innerHTML = ""
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

        furnitureData.append(div);


    })
}
displayData(furniture)


function search() {
    let q = document.querySelector("input").value;
   
    let newData = furniture.filter(function (el) {
        return el.Name.toLowerCase().includes(q.toLowerCase());
    });

   // console.log(newData)
    displayData(newData);
}


let productsArr = JSON.parse(localStorage.getItem("addproducts")) || [];
display(productsArr);

function display(data) {

    furnitureData2.innerHTML = ""

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
                alert("Product Already in Cart ❌");

            } else {
                cart.push({ ...el,quantity: 1 });
                localStorage.setItem("Addtocart", JSON.stringify(cart));
                alert("Product Added To Cart ✔");

            }
        })

              
        let but=document.createElement("i")
        but.setAttribute("id","heartss")
        but.setAttribute("class","fa fa-heart")

        but.addEventListener("click",function(){
       

         let  wishListData = JSON.parse(localStorage.getItem("wishlist")) ;

            let datapresent = false;
            for (let i = 0; i <  wishListData.length; i++) {

                if ( wishListData[i].ProductId == el.ProductId) {
                    datapresent = true;
                    break;
                }
            }

            console.log(datapresent)
            if (datapresent == true) {
                alert("Product Already in wishlist❌");

            } else {
                wishListData.push({ ...el, quantity: 1 });
                localStorage.setItem("wishlist", JSON.stringify(wishListData));
                alert("Product Added To Wishlist ✔");

            }

      })
      
        div.append(image,names,price,desc,buynow,but)

        furnitureData2.append(div);


    })
}
let prio = document.querySelector("#filter");

prio.addEventListener("change", function (event) {
    event.preventDefault();

    let selected = event.target.value;

    if (selected == "all") {
        displayData(furniture)
        display(productsArr)
    } else {

        let filtered_data = furniture.filter(function (el) {
            return el.Category == selected
        });
        displayData(filtered_data)
        display(filtered_data)
    }

});

let sorted = document.querySelector("#sort");

sorted.addEventListener("change", function (event) {

    let val = document.querySelector("#sort").value;
    //console.log(val)

    if (val == "LTH") {
        let data1 = furniture.sort(function (a, b) {
            return a.Price - b.Price;

        })
        let data2 = productsArr.sort(function (a, b) {
            return a.Price - b.Price;

        })
        displayData(data1)
        display(data2)
        


    } else if (val == "HTL") {
        let sorteddata = furniture.sort(function (a, b) {
            return b.Price - a.Price;

        })
        displayData(sorteddata)
        let sorteddata2 = productsArr.sort(function (a, b) {
            return b.Price - a.Price;

        })
        display(sorteddata2)
       



    } else {
        displayData(furniture)
        display(productsArr)
        
    }
})


