document.addEventListener('DOMContentLoaded', () => {
    const postBtn = document.getElementById('post-btn');
    const postContent = document.getElementById('post-content');
    const tweetsSection = document.querySelector('.tweets');
    
    postBtn.addEventListener('click', () => {
        const content = postContent.value;
        if (content) {
            saveTweet(content);
            postContent.value = '';
        }
    });

    function saveTweet(content) {
        const tweet = { id: Date.now(), content, likes: 0, retweets: 0 };
        displayTweet(tweet);
    }

    function displayTweet(tweet) {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.innerHTML = `
            <p>${tweet.content}</p>
            <button class="like-btn">Like (${tweet.likes})</button>
            <button class="retweet-btn">Retweet (${tweet.retweets})</button>
        `;
        tweetsSection.appendChild(tweetElement);

        const likeBtn = tweetElement.querySelector('.like-btn');
        const retweetBtn = tweetElement.querySelector('.retweet-btn');

        likeBtn.addEventListener('click', () => {
            tweet.likes++;
            likeBtn.textContent = `Like (${tweet.likes})`;
        });

        retweetBtn.addEventListener('click', () => {
            tweet.retweets++;
            retweetBtn.textContent = `Retweet (${tweet.retweets})`;
        });
    }
});
