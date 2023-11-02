import './ExploreContainer.css';

interface ContainerProps {
  demo:string;
 }

const ExploreContainer: React.FC<ContainerProps> = ({demo}) => {
  return (
    <>
    <div id="container">
      <h1></h1>
      <div className="1">
      </div>
      <strong>{demo}?</strong>
      
    </div>
   
    </>
  );
};

export default ExploreContainer;
