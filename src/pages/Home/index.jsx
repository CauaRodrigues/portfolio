import React from "react";
import * as S from "./page.styled";

export default function Home() {
	return (
		<S.Section>
			<S.Content>
				<span className="welcome">Olá 👋, eu sou</span>
				<h1 className="gradient_text">Cauã Rodrigues</h1>
				<span className="occupation">Frontend Developer</span>
				<p>
					Focado em desenvolver soluções para web, desde o design até a
					aplicação.
				</p>

				<S.GroupButtons>
					<button>Baixar CV</button>
					<button>Inciar</button>
				</S.GroupButtons>
			</S.Content>

			<S.Code>
				<pre>
					<span className="line">1</span> <span className="pink">class</span>{" "}
					<span className="blue">Person</span>
					<span className="yellow">{" {"}</span>
				</pre>
				<pre>
					<span className="line">2</span>
					{"   "}
					<span className="pink">constructor() {"{"}</span>
				</pre>
				<pre>
					<span className="line">3</span> {"     "}
					<span className="purple">this</span>
					<span className="white">.name</span>
					<span className="pink"> = </span>
					<span className="yellow">{"'Cauã'"}</span>
					<span className="white">;</span>
				</pre>
				<pre>
					<span className="line">4</span> {"     "}
					<span className="purple">this</span>
					<span className="white">.age</span>
					<span className="pink"> = </span>
					<span className="pink">new </span>
					<span className="blue">Date()</span>
					<span className="white">.</span>
					<span className="green">getFullYear</span>
					<span className="blue">()</span>
					<span className="pink"> - </span>
					<span className="purple">2005</span>
					<span className="white">;</span>
				</pre>
				<pre>
					<span className="line">5</span> {"     "}
					<span className="purple">this</span>
					<span className="white">.occupation</span>
					<span className="pink"> = </span>
					<span className="yellow">{"'Developer'"}</span>
					<span className="white">;</span>
				</pre>
				<pre>
					<span className="line">6</span>
					<span className="pink">{"   }"}</span>
				</pre>
				<pre>
					<span className="line">7</span>
					<span className="yellow">{" }"}</span>
				</pre>
			</S.Code>
		</S.Section>
	);
}
