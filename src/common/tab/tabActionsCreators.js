const INITIAL_VALUES = {}
export function selectTab(tabId){
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabsId){
    const tabsToShow ={}
    tabsId.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}

export function init(){
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabCreate'),
        initialize('notaFiscalForm', INITIAL_VALUES)
    ]
}