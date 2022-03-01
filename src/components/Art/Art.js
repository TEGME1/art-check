import React from "react"
import "./Art.css"
import { nanoid } from "nanoid"

const Art = () => {

    const blocks = [
        {
            header: 'asdsda I am something of an artist myself',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            img: 'https://images.unsplash.com/photo-1573160059602-81357cdd480f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ3xlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            header: 'I am something of an artist myself',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            img: 'https://images.unsplash.com/photo-1573160059602-81357cdd480f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ3xlbnwwfHwwfHw%3D&w=1000&q=80'
        }
    ]
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const result = windowSize.width < 768

    const vertical = React.useMemo(() => {
        return result
    }, [result])

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        })
        window.addEventListener("scroll", () => {
            const blocks = document.querySelectorAll(".art-block")
            const blockImages = document.querySelectorAll(".art-block-image")
            const blockTexts = document.querySelectorAll(".art-text-container")
            const bound = vertical ? window.innerHeight / 4 : window.innerHeight / 2
            const textBounds = vertical ? window.innerHeight / 2 : window.innerHeight / 1.5
            for (let i = 0; i < blocks.length; i++) {
                const top = blocks[i].getBoundingClientRect().top
                if (top <= bound) {
                    blockImages[i].classList.add("active-art")
                }
                else {
                    blockImages[i].classList.remove("active-art")
                }
                if (top <= textBounds) {
                    blockTexts[i].classList.add("active-art-text")
                }
                else {
                    blockTexts[i].classList.remove("active-art-text")
                }
            }
        })
    }, [vertical])


    const blockElements = blocks.map((block, index) => (
        <section className="art-block" key={nanoid()}>
            <article className="art-text-container">
                <div>
                    <h2 className="art-header">{block.header}</h2>
                    <p className="art-content">{block.content}</p>
                </div>
            </article>
            <div className="art-block-image">
                <img src={block.img} className="art-image" />
            </div>
        </section>
    ))

    const mainBlock = (
        <header className="art-main-block">
            <article className="art-title">
                <h2>CLUB</h2>
            </article>
            <div className="main-image">
                <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" className="art-image" />
            </div>
        </header>
    )

    return (
        <main className='art-container'>
            {mainBlock}
            {blockElements}
        </main>
    )
}

export default Art