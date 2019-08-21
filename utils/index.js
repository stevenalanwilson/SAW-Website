const production = process.env.NODE_ENV === 'production';

const isProduction = production;

const formatRawArticleData = data => {
	return data.map(item => ({
		key: item.sys.id,
		date: item.fields.date,
		image: item.fields.thumbnail.fields.file.url,
		title: item.fields.title,
		summary: item.fields.summary,
	}))
}

module.exports = {
    isProduction,
    formatRawArticleData
}