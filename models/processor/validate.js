export default ({ given }) => given.some(({ value }) => typeof value !== 'number')
