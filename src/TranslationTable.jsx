import PropTypes from 'prop-types'; // Import PropTypes

const TranslationTable = ({ data, title }) => (
  <div>
    <h3>{title}</h3>
    <table className="table table-bordered">  {/* Using Bootstrap table classes */}
      <thead>
        <tr>
          <th>Origin Word</th>
          <th>Translation Word</th>
        </tr>
      </thead>
      <tbody>
        {data && data.translations && data.translations.map((item, index) => (
          <tr key={index}>
            <td>{item.originWord}</td>
            <td>{item.translationWord}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Adding prop types validation
TranslationTable.propTypes = {
  data: PropTypes.shape({
    translations: PropTypes.arrayOf(
      PropTypes.shape({
        originWord: PropTypes.string,
        translationWord: PropTypes.string,
      })
    ),
  }),
  title: PropTypes.string,
};

export default TranslationTable;
