import React, { useState } from 'react';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
	Container,
	Card,
	Row,
	Col
} from 'react-bootstrap';

const initValue = `
# The Markdown challege!
## Next the list of tech what i used to build it:
- ReactJs
- React-Bootstrap
- Hooks
- Ofcorse! Markup package! <3

[Here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) the link of markdown sintax. It was very usefull.

Thanks! to \`<freeCodeCamp>\` by the propose this exercise!

___
I **enjoy** it very much!
___

\`\`\` 
if (enjoy) { 
   alert('Good!'); 
} else { 
	alert('Ok, shit happens!')
}; 
\`\`\`

---
> My mom always said life was like a box of chocolates. You never know what you're gonna get - Forest Gump 

![fg](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT93nWUl9Bxf6jWwxDGlvFUAYRRfwd-uRn6gw&usqp=CAU)
`;
marked.setOptions({
	breaks: true 
});
const App = () => {
	const [inputValue, setInputValue] = useState(initValue);
	return(
		<Container fluid>
			<Row>
				<Col>
					<Editor 
						onChangeValue={(newValue) => {
							setInputValue(newValue);
						}}
						value={inputValue}
					/>		
				</Col>
				<Col>
					<Preview value={inputValue}/>
				</Col>
			</Row>
		</Container>
	);
}

const Editor = (props) => {
	const getHeight = () => {return '100%'};
	return(
		<Card style={{height: getHeight()}}>
			<Card.Header>
				<i className="fa fa-pencil-square-o" aria-hidden="true"></i> Editor
			</Card.Header>
			<textarea 
				
				id="editor" 
				onChange={(e) =>{props.onChangeValue(e.target.value)}} 
				value={props.value}
				className="m-2"
				style={{height: getHeight()}}
			>
			</textarea>
		</Card>
	);
};
const Preview = (props) => {
	return(
		<Card>
			<Card.Header>
				<i className="fa fa-television" aria-hidden="true"></i> Preview
			</Card.Header>
			<Card.Body id="preview" dangerouslySetInnerHTML={{__html: marked(props.value)}}>
			</Card.Body>
		</Card>
	);
};

export default App;
