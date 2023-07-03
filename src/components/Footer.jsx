const gitHubLink = "https://github.com/maxespinosa19"
const getFullYear = new Date().getFullYear();

export default function Footer(){
    return(
        <footer>
            <p>&copy; {getFullYear}</p>
            <p><a href={gitHubLink} target="_blank" rel="noreferrer">Github</a></p>
        </footer>
    )
}