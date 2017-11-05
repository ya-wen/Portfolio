
				class InTheLabel extends React.Component{
				constructor(props){
					super(props);
					this.state={
					opacity:0.5
					
					};
				}
				here(){
					this.setState({
					opacity:1.0
					}
					);
				}
				out(){
					this.setState(
					{
						opacity:0.5
					}
					);
				}
				
				render(){
				const styleObj={
					opacity:this.state.opacity,
				};
				return(
						<a href={""+this.props.fig+".html"}>
						<div className="label" 
						style={styleObj}
						onMouseEnter={this.here.bind(this)}
						onMouseLeave={this.out.bind(this)}
						>
							<div className="labelImg" 
							style={{
							backgroundImage:"url("+this.props.fig+".gif)"
							}}
							></div>
							<div className="labelName" >{this.props.fig}</div>
						</div>
					</a>
				
				);
			}
			}
