import { useParams } from "react-router-dom";
import datas from '../data/annonces.json'
import Header from "../components/header/Header";
import Slider from "../components/carrousel/Carrousel"
import Footer from "../components/footer/Footer";
import Collapse from '../components/collapse/Collapse';
import Error from '../pages/Error';
import Rating from "../components/rating/Rating";


export default function Accomodation() {
	
	const idAccomodation = useParams('id').id;
	const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation)[0];
	
	return (
		<div>
		{ !dataCurrentAccomodation ?( <Error /> ):(
		<div>
			<Header/>
			<Slider imageSlider={dataCurrentAccomodation.pictures}/>
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation.title}</h1>
						<p>{dataCurrentAccomodation.location}</p>
						<div>
							{dataCurrentAccomodation.tags.map((tag, index) => {
								return (
									<button className="tag" key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div className="person">
							<div className='accomodation_content_host_name'>
								<span>{dataCurrentAccomodation.host.name.split(' ')[0]}</span>
								<span>{dataCurrentAccomodation.host.name.split(' ')[1]}</span>
							</div>
							<img src={dataCurrentAccomodation.host.picture} alt="host of this accomodation" />
						</div>
							
						<div className="accomodation_content_host_stars">
							<Rating rating={dataCurrentAccomodation.rating}/>
						</div>
					</div>
				</div>
				<div className="container_collapse">
					<div className="container_collapse_item">
						<Collapse titleCollapse="Description" descriptionCollaspe={dataCurrentAccomodation.description} />	
					</div>
					<div className="container_collapse_item">
						<Collapse 
						titleCollapse="Équipements" 
						descriptionCollaspe={dataCurrentAccomodation.equipments.map(
							(equipment,index)=>(
								<span key={index}>{equipment}</span>
							)
						)}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</div>
		)
		}
		</div>
	)
}