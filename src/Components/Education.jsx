import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { education } from "../data/data";

const Education = () => {
  return (
    <Container>
      <SectionHeader
        title={education.title}
        description={education.description}
      />
      <Row>
        {education.schools.map((school) => (
          <Col key={school.name} lg={4} md={6} sm={12}>
            <ProjectCard
              title={school.name}
              description={school.degree}
              url={school.url}
              image={school.image}
              imageAltText={school.imageAltText}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
//   );
// };
// 
// export default Portfolio; 
//