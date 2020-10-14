(() => {

    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    function setElementInnerText(id, text) {
        const element = document.getElementById(id);
        element.innerText = text;
    }

    function countdown() {
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2020 23:59:59').getTime();
        const unixTimeLeft = newYear - now;

        // const dayElem = document.getElementById('days');
        // dayElem.innerText = Math.floor(unixTimeLeft / DAY);

        setElementInnerText('days', Math.floor(unixTimeLeft / DAY));
        setElementInnerText('Hours', Math.floor(unixTimeLeft % DAY / HOUR));
        setElementInnerText('Minutes', Math.floor(unixTimeLeft % HOUR / MINUTE));
        setElementInnerText('Seconds', Math.floor(unixTimeLeft % MINUTE / SECOND));

    }

    function run() {
        countdown();
        setInterval(countdown, SECOND);
    }
    run();
})();