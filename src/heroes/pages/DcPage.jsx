import { HeroList } from '../components';


export const DcPage = () => {
  return (
    <>
      <h1 className='dc' style={{ marginTop: "6rem", color: "#0376f2", fontSize:"30px", height: "1em" }}>DC <span style={{ fontFamily: 'lato', color: "black",  fontSize:"28px" }}>Comics</span></h1>
      <hr />

      <HeroList publisher='DC Comics' />
    </>
  )
}
