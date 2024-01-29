
export const navigateTo = (url: string) => {
    chrome.tabs.update({ url });
};
