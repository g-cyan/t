var context_menu_for_oxford_dict = {
    "id": "id_for_oxford_dict",
    "title": 0 ? "" : "LOOK UP",
    "contexts": ["all"]  // type of context
};

var context_menu_for_closing_tabs = {
    "id": "id_corresponding_closing_tabs",
    "title": 0 ? "" : "CLOSE THE TABS",
    "contexts": ["all"]  // type of context
};


chrome.runtime.onInstalled.addListener(
    function () {

    }
)


chrome.contextMenus.create(context_menu_for_oxford_dict)
chrome.contextMenus.create(context_menu_for_closing_tabs);
chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    let selected_text = info.selectionText
    if (selected_text != undefined) {
        selected_text = selected_text.replaceAll(" ", "").replaceAll("　", "")
    }

    if (info.menuItemId == "id_for_oxford_dict") {
        chrome.tabs.create({ url: "https://www.oxfordlearnersdictionaries.com/definition/english/" + selected_text })
    }

    else if (info.menuItemId == "id_corresponding_closing_tabs") {

        let tabs = await chrome.tabs.query({});//currentWindow: true

        let can_tabs_be_closed = true

        tabs.forEach((tab) => {
            if (tab.active == true) {
                can_tabs_be_closed = true;
                return;
            }
            if ((can_tabs_be_closed == true && tab.pinned == false)) {
                chrome.tabs.remove(tab.id, function () { });
            }

        })
    }

})
// 


chrome.runtime.onMessage.addListener(
    async function (message, sender, sendResponse) {

    }
)

chrome.commands.onCommand.addListener(async function (command) {

    let [current_active_tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (command == "V") {
        chrome.scripting.executeScript({
            target: { tabId: current_active_tab.id },
            func: () => window.getSelection().toString()
        }).then(results => {
            obtained_eng_literal = results[0].result
            console.log(`${obtained_eng_literal} hsbn obtained!`);
            chrome.tabs.create({ url: `https://www.oxfordlearnersdictionaries.com/definition/english/${obtained_eng_literal}` })

        })
    }

});
