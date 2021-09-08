// @ts-check
async function fetchMediumFeed(username) {
    let mediumUrl = `https://medium.com/feed/@${username}`;
    return (await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`)).json();
}


export async function getRssFeed(username = 'mariusbongarts11') {
    const {feed, items, status} = await fetchMediumFeed(username);

    if (!feed || status !== 'ok') {
        alert('Pass a valid medium username.');
        return;
    }

    return {feed, items};
}
