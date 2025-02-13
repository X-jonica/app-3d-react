import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props){
  const {scene} = useGLTF('/bmw.glb')
  return <primitive object={scene} scale={0.01} {...props} />
}

function App() {
  return (
    <div className="App">
      <Canvas dpr={[1,2]} camera={{fov : 46}} style={{"position" : "absolute"}}>
        <color attach="background" args={["#101010"]} />
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}> 
          <Stage environment={null} shadows={false}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
