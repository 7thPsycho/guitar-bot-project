import React from 'react';

const MainPage = () => {
    const guitars = [
        {
            name: 'Gibson',
            imageSrc: 'https://eddiesguitars.com/wp-content/uploads/2022/04/gibson_f1-006.jpg',
            link: 'https://www.gibson.com/en-US/',
        },
        {
            name: 'Fender',
            imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/zJLuM632I/DefaultData/S__203071500.jpg',
            link: 'https://www.fender.com/en/start',
        },
        {
            name: 'Ibanez',
            imageSrc: 'https://www.ibanez.com/common/product_artist_file/file/pc_main_electric_guitars_us_sp.jpg',
            link: 'https://www.ibanez.com/asia/',
        },
        {
            name: 'Jackson',
            imageSrc: 'https://cf.shopee.co.th/file/daf93578c1617fd64b44021c00a5ab47',
            link: 'https://www.jacksonguitars.com/en/start',
        },
    ];
    console.log(guitars[0])
    return (
        <div>

            <div style={{ backgroundColor: 'burlywood', padding: '5px' }}>
                <a className="button" href="http://127.0.0.1:5500/JS/3%20project%20guitar/index.html">Home</a>
                <a className="button" href="https://www.facebook.com/">Contact</a>
            </div>
            <div>
                {guitars.map((guitar, index) => (
                    <div key={index} className={`box ${index}`} style={{ height: 'auto' }}>
                        <p className="title">{guitar.name}</p>
                        <img src={guitar.imageSrc} style={{ width: '300px' }} alt={guitar.name} />
                        <a className="buttonlink" href={guitar.link}>Click!</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;