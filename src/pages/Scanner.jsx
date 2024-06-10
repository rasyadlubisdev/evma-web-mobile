import React, { useState, useRef, useEffect } from "react"
import QrScanner from 'qr-scanner';

const Scanner = () => {

    const videoRef = useRef()
    let scanner;

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };      

    useEffect(() => {
        // To enforce the use of the new api with detailed scan results, call the constructor with an options object, see below.
        const videoEl = videoRef.current

        // async function playVideo() {
        //     const playPromise = await videoEl.play()
        //     return playPromise
        // }

        // const qrScanner = new QrScanner(
        //     videoEl,
        //     result => console.log('decoded qr code:', result),
        //     { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
        // );

        // if (playVideo() !== undefined) {
        //     playVideo().then(() => {
        //         console.log("NYALA WOII")
        //         qrScanner.start();
        //     })
        //     .catch(error => {
        //         console.log("ERROR WOII STOPP")
        //         qrScanner.stop();
        //     });
        //   }
        // // console.log(playVideo())


        scanner = new QrScanner(videoEl, result => console.log('decoded qr code:', result), {
            returnDetailedScanResult: true
        });

        // setInterval(() => {
        //     scanner.start();
        // }, 3000)
        // scanner.stop();
        // scanner.start()

        // scanner.start();


    })

    async function snapshot() {
        scanner.start()
        await sleep(2000);
        scanner.stop()
    }

    return (
        <>
            <video ref={videoRef}>
            </video>
            <button onClick={() => snapshot()}>Test</button>
        </>
    )
}

export default Scanner