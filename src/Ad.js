import laughing from './img/laughing3.jpg'

function Ad() {
    return (
    <div className='Ad'>
      <img className="Laugh" src={laughing} alt="haha funny"></img>
        <span>
          LAUGH TRACK
        </span>
      <img className="Laugh" src={laughing} alt="haha funny"></img>
    </div>
    )
}
export default Ad;