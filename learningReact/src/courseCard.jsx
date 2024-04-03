import PropTypes from 'prop-types'

function CourseCard({data:{name ,description}}) {
  return (
    <li>
        <h4>{name}</h4>
        <p>{description}</p>
    </li>
  );
}

export default CourseCard
//destructuring:
// 1- CourseCard(props)
// {props.data.name}
// 2- CourseCard({data})
// {data.name}
// 3- CourseCard({data:{name ,description}})
// {name}
CourseCard.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  };
