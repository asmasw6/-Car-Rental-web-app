import ImageKit from 'imagekit';

export var imagekit = new ImageKit({
    publicKey : process.env.ImageKit_puplicKey,
    privateKey: process.env.ImageKit_privateKey,
    urlEndpoint: process.env.ImageKit_URL
});