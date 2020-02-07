import spinner from '../static/gif/spinner.gif'

function Spinner() {

    return(
        <div>
            <img
            src={spinner}
            style={{width:'200px', margin:'auto', display:'block'}}
            alt="Loading..."
            />
        </div>
    )
}