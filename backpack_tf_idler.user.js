// ==UserScript==
// @name         backpack_tf_idler
// @namespace    https://github.com/Shmurdik
// @version      2024-01-22
// @description  description
// @author       Shmurdik
// @match        https://idler.backpack.tf/
// @icon         https://idler.backpack.tf/favicon.png
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js
// ==/UserScript==
/*global $, jQuery*/

(function() {
    'use strict';

    // ----- SETTINGS BEGIN ----- //
    const AUTO_ENTER_MATCH = 0;
    const AUTO_BUY_ASSET = 1;
    const AUTO_BUY_UPGRADE = 1;
    const AUTO_DRAW_TAROT = 1;
    const DEFAULT_PICK_ASSET = "warpGate";
    const MAX_BUY_EACH_ASSETS = 203;
    const MAX_PICK_EACH_ASSETS = 101;

    // Idle
    const MAX_PICK_LAPTOP = 203;
    const MAX_PICK_BATTLESTATION = 203;
    const MAX_PICK_SERVER = 203;
    const MAX_PICK_SUPERCOMPUTER = 203;
    const MAX_PICK_DATACENTRE = 203;
    const MAX_PICK_QUANTUMCLUSTER = 203;
    const MAX_PICK_FUSIONREACTOR = 203;
    const MAX_PICK_SUMMONINGCIRCLE = 203;
    const MAX_PICK_REPLICATOR = 203;
    const MAX_PICK_VALVECORPORATION = 753;

    // Craft
    const MAX_PICK_CURSOR = 203;
    const MAX_PICK_HAMMER = 203;
    const MAX_PICK_FORGE = 203;
    const MAX_PICK_WORKSHOP = 203;
    const MAX_PICK_FACTORY = 203;
    const MAX_PICK_RECYCLINGCENTRE = 203;

    // Trade
    const MAX_PICK_STEAM = 203;
    const MAX_PICK_SALESREP = 203;
    const MAX_PICK_TRADINGPOST = 203;
    const MAX_PICK_BAZAAR = 203;
    const MAX_PICK_OUTLETSTORE = 203;
    const MAX_PICK_STOCKEXCHANGE = 523;

    // Logistics
    const MAX_PICK_COURIER = 203;
    const MAX_PICK_MAILTRUCK = 203;
    const MAX_PICK_HOVERCRAFT = 203;
    const MAX_PICK_SEMITRAILER = 203;
    const MAX_PICK_CARGOTRAIN = 203;
    const MAX_PICK_CARGOSHIP = 203;
    const MAX_PICK_CARGOPLANE = 203;
    const MAX_PICK_HYPERLOOP = 203;
    const MAX_PICK_STARSHIP = 203;
    const MAX_PICK_WARPGATE = 753;

/*

"laptop"
"battlestation"
"server"
"supercomputer"
"datacentre"
"quantumCluster"
"fusionReactor"
"summoningCircle"
"replicator"
"valveCorporation"
"cursor"
"hammer"
"forge"
"workshop"
"factory"
"recyclingCentre"
"steam"
"salesRep"
"tradingPost"
"bazaar"
"outletStore"
"stockExchange"
"courier"
"mailTruck"
"hovercraft"
"semiTrailer"
"cargoTrain"
"cargoShip"
"cargoPlane"
"hyperloop"
"starship"
"warpGate"

*/
    // ----- SETTINGS END ----- //

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function pickAsset(assetName, maxValue) {
        var currentValue = jQuery("div.column-shop div." + assetName).parent().parent().parent().find("div.item__owns").text();
        //console.log("pickAsset item_owns = " + currentValue);
        if(jQuery("div.picker__item-list div." + assetName).length && currentValue < maxValue) {
            console.log("Pick Asset - " + assetName + "(" + currentValue + "/" + maxValue + ")");
            jQuery("div.picker__item-list div." + assetName).click();
            return true;
        }
        return false;
    }

    jQuery.fn.reverse = [].reverse;

    setInterval(function(){
        if(jQuery("div.picker__card-list > div.card-XV.card").length) {
            jQuery("div.picker__card-list > div.card-XV.card").click();
            sleep(3000);
        }

        // Chuse Free Asset
        if(jQuery("div.picker__item-list div.laptop").length) {
            var pickedupAsset = false;
            jQuery("div.column-shop div.item__owns").each(function(){
                if(jQuery(this).text() < MAX_PICK_EACH_ASSETS) {
                    var assetName = jQuery(this).parent().parent().children(".item__left").children(".item__icon").children("div").attr("class").split(/\s+/)[0];
                    console.log("Pick 101 Asset - " + assetName + "(" + jQuery(this).text() + "/" + MAX_PICK_EACH_ASSETS + ")");
                    jQuery("div.picker__item-list div." + assetName).click();
                    pickedupAsset = true;
                    return false;
                }
            });

            // Custom Asset Build
            if(!pickedupAsset) {
                if(pickAsset("warpGate", MAX_PICK_WARPGATE)) {pickedupAsset = true;}
                else if(pickAsset("starship", MAX_PICK_STARSHIP)) {pickedupAsset = true;}
                else if(pickAsset("hyperloop", MAX_PICK_HYPERLOOP)) {pickedupAsset = true;}
                else if(pickAsset("cargoPlane", MAX_PICK_CARGOPLANE)) {pickedupAsset = true;}
                else if(pickAsset("cargoShip", MAX_PICK_CARGOSHIP)) {pickedupAsset = true;}
                else if(pickAsset("cargoTrain", MAX_PICK_CARGOTRAIN)) {pickedupAsset = true;}
                else if(pickAsset("semiTrailer", MAX_PICK_SEMITRAILER)) {pickedupAsset = true;}
                else if(pickAsset("hovercraft", MAX_PICK_HOVERCRAFT)) {pickedupAsset = true;}
                else if(pickAsset("mailTruck", MAX_PICK_MAILTRUCK)) {pickedupAsset = true;}
                else if(pickAsset("courier", MAX_PICK_COURIER)) {pickedupAsset = true;}
                else if(pickAsset("stockExchange", MAX_PICK_STOCKEXCHANGE)) {pickedupAsset = true;}
                else if(pickAsset("outletStore", MAX_PICK_OUTLETSTORE)) {pickedupAsset = true;}
                else if(pickAsset("bazaar", MAX_PICK_BAZAAR)) {pickedupAsset = true;}
                else if(pickAsset("tradingPost", MAX_PICK_TRADINGPOST)) {pickedupAsset = true;}
                else if(pickAsset("salesRep", MAX_PICK_SALESREP)) {pickedupAsset = true;}
                else if(pickAsset("steam", MAX_PICK_STEAM)) {pickedupAsset = true;}
                else if(pickAsset("recyclingCentre", MAX_PICK_RECYCLINGCENTRE)) {pickedupAsset = true;}
                else if(pickAsset("factory", MAX_PICK_FACTORY)) {pickedupAsset = true;}
                else if(pickAsset("workshop", MAX_PICK_WORKSHOP)) {pickedupAsset = true;}
                else if(pickAsset("forge", MAX_PICK_FORGE)) {pickedupAsset = true;}
                else if(pickAsset("hammer", MAX_PICK_HAMMER)) {pickedupAsset = true;}
                else if(pickAsset("cursor", MAX_PICK_CURSOR)) {pickedupAsset = true;}
                else if(pickAsset("valveCorporation", MAX_PICK_VALVECORPORATION)) {pickedupAsset = true;}
                else if(pickAsset("replicator", MAX_PICK_REPLICATOR)) {pickedupAsset = true;}
                else if(pickAsset("summoningCircle", MAX_PICK_SUMMONINGCIRCLE)) {pickedupAsset = true;}
                else if(pickAsset("fusionReactor", MAX_PICK_FUSIONREACTOR)) {pickedupAsset = true;}
                else if(pickAsset("quantumCluster", MAX_PICK_QUANTUMCLUSTER)) {pickedupAsset = true;}
                else if(pickAsset("datacentre", MAX_PICK_DATACENTRE)) {pickedupAsset = true;}
                else if(pickAsset("supercomputer", MAX_PICK_SUPERCOMPUTER)) {pickedupAsset = true;}
                else if(pickAsset("server", MAX_PICK_SERVER)) {pickedupAsset = true;}
                else if(pickAsset("battlestation", MAX_PICK_BATTLESTATION)) {pickedupAsset = true;}
                else if(pickAsset("laptop", MAX_PICK_LAPTOP)) {pickedupAsset = true;}
            }

            // if build done - just get Warp Gate
            if(!pickedupAsset) {
                jQuery("div.picker__item-list div." + DEFAULT_PICK_ASSET).click();
            }
        }

        // Auto Buy Upgrades
        var noMoreUpgrades = false; // if false - no more upgrades
        if(AUTO_BUY_UPGRADE) {
            jQuery("div.column-shop div.upgrade.item").each(function(){
                if(!jQuery(this).hasClass("disabled")) {
                    console.log("Buy Upgrade - " + jQuery(this).find("> div.item__left > div.item__icon > div").attr("class").split(/\s+/)[0]);
                    jQuery(this).click();
                    return false;
                }
            });
        }

        // Auto Buy Asset
        if(AUTO_BUY_ASSET) {
            jQuery("div.column-shop div.asset.item").reverse().each(function(){
                if(jQuery(this).hasClass("disabled") == false && jQuery(this).find("div.item__owns").text() < MAX_BUY_EACH_ASSETS) {
                    console.log("Buy Asset - " + jQuery(this).find("div.item__name").text() + " (" + jQuery(this).find("div.item__owns").text() + ")");
                    jQuery(this).click();
                    return false;
                }
            });
        }

        // Get Tarot Cards and play TF match
        if(AUTO_DRAW_TAROT && jQuery(".tarot.tarot-draw-ready.tab").length) {
            console.log("Go to Tarot tab");
            jQuery(".tarot.tarot-draw-ready.tab").click();
            sleep(1000);
            if(jQuery(".btn-draw-card").length && jQuery(".btn-draw-card").hasClass("disabled") == false) {
                console.log("Get Tarot Card");
                jQuery(".btn-draw-card").click();
            }
        }
        else if(AUTO_ENTER_MATCH && jQuery(".fight.team-idle.tab").length) {
            jQuery(".fight.team-idle.tab").click();
            sleep(1000);
            if(jQuery("button.btn-forfeit").length && jQuery("button.btn-forfeit").text() == "Back to Team Management") {
                jQuery("button.btn-forfeit").click();
            }
            sleep(1000);
            if(jQuery(".btn-mission").length) {
                jQuery(".btn-mission").click();
            }
        }
    }, 5000);
})();
