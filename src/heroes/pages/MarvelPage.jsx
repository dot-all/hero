import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1 className="marvel" style={{ marginTop: "6rem", color:"red", height: "1em" }}>Marvel <span style={{ fontFamily: 'lato', color: "black",  fontSize:"28px" }}>Comics</span></h1>
      <hr />
      <HeroList publisher='Marvel Comics' />
    </>
  )
}
