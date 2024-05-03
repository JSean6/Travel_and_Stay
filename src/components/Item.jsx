import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const Item = () => {
    return (
        <ul>
            <li>Discover</li>
            <li>Explore</li>
            <li>Create</li>
            <li>Wander</li>
            <li>Adventure</li>
            <li>Thrive</li>
            <li><FaGithub /> GitHub</li>
            <li><FaInstagram /> Instagram</li>
            <li><FaLinkedin /> LinkedIn</li>
            <li><FaYoutube /> YouTube</li>
            <li><FaFacebook /> Facebook</li>
        </ul>
    );
};

export default Item;
