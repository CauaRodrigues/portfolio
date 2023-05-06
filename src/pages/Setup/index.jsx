import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import * as S from "./page.styled";

import { data } from "./data";

export default function Setup() {
	const { development, productivity } = data;

	return (
		<S.SetupContainer>
			<div className="title--setup">
				<h1 className="gradient_text">
					Softwares e ferramentas que eu uso e recomendo para codar e para
					produtividade
				</h1>
			</div>

			<S.SetupSection>
				<S.SetupList>
					<S.SetupType>
						<h2>Development Tools</h2>

						<S.SetupTypeContent>
							{development.map((item) => {
								return (
									<S.SetupUses key={item.id}>
										<h3>{item.name}</h3>

										<p>{item.description}</p>

										<a
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											Saiba mais <RiArrowRightSLine size={22} />
										</a>
									</S.SetupUses>
								);
							})}
						</S.SetupTypeContent>
					</S.SetupType>

					<S.SetupType>
						<h2>Produtividade</h2>

						<S.SetupTypeContent>
							{productivity.map((item) => {
								return (
									<S.SetupUses key={item.id}>
										<h3>{item.name}</h3>

										<p>{item.description}</p>

										<a
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											Saiba mais <RiArrowRightSLine size={22} />
										</a>
									</S.SetupUses>
								);
							})}
						</S.SetupTypeContent>
					</S.SetupType>
				</S.SetupList>
			</S.SetupSection>
		</S.SetupContainer>
	);
}
