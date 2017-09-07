import React from 'react';

const ProfileSection = (props) => {
    return (
        <div className="profileSection">
            <h2>Meet the Team</h2>
            <div className="profiles profile1">
                <img className="man1" src='./imgs/man1.png'></img>
                <img className="banner-left" src='./imgs/profile_banner.png'></img>
                <span>Michael Whisby: Sales Executive</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat leo ac cursus aliquet. Nullam felis neque, varius et feugiat at, congue vel ex. Morbi luctus nisl et faucibus ornare. Duis sit amet feugiat eros. Vestibulum interdum lorem velit, sed laoreet augue scelerisque sed. Aenean in urna sed nibh euismod fringilla mollis non neque.</p>
            </div>
            <div className="profiles profile2">
                <img className="woman1" src='./imgs/woman1.png'></img>
                <img className="banner-right" src='./imgs/profile_banner_reversed.png'></img>
                <span>Michelle Rose: Rental Executive</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat leo ac cursus aliquet. Nullam felis neque, varius et feugiat at, congue vel ex. Morbi luctus nisl et faucibus ornare. Duis sit amet feugiat eros. Vestibulum interdum lorem velit, sed laoreet augue scelerisque sed. Aenean in urna sed nibh euismod fringilla mollis non neque.</p>
            </div>
            <div className=" profiles profile3">
                <img className="woman2" src='./imgs/woman2.png'></img>
                <img className="banner-left" src='./imgs/profile_banner.png'></img>
                <span>Sophie Wong: Livability Analyst</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat leo ac cursus aliquet. Nullam felis neque, varius et feugiat at, congue vel ex. Morbi luctus nisl et faucibus ornare. Duis sit amet feugiat eros. Vestibulum interdum lorem velit, sed laoreet augue scelerisque sed. Aenean in urna sed nibh euismod fringilla mollis non neque.</p>
            </div>
        </div>
    );
}

export default ProfileSection;