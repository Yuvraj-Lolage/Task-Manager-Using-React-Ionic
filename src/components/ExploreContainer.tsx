import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
    <div id="container">
      <h1></h1>
      <div className="1">
      </div>
      <strong>{ }?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
    <div className="1">
        <h1>New Div { 1+3 } </h1>
    </div>
    </>
  );
};

export default ExploreContainer;
