import PropTypes from 'prop-types'

const requiredCustomPropsCheck = (props, propName, componentName) => {
  if (!props.imageUrl && !props.localImage) {
    return new Error(`One of 'imageUrl' or 'localImage' is required by '${componentName}' component.`)
  }

  if (props.imageUrl && typeof props.imageUrl !== 'string') {
    return new Error(`'imageUrl' is required to be a string by '${componentName}' component.`)
  }

  if (props.localImage && typeof props.localImage !== 'number') {
    return new Error(`'localImage' is required to be a number by '${componentName}' component.`)
  }
}

const EmojiPropTypes = {
  data: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  fallback: PropTypes.func,
  emojiImageFn: PropTypes.func,
  native: PropTypes.bool,
  forceSize: PropTypes.bool,
  tooltip: PropTypes.bool,
  skin: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  set: PropTypes.oneOf([
    'apple',
    'google',
    'twitter',
    'messenger',
    'facebook',
  ]),
  size: PropTypes.number.isRequired,
  emoji: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  useLocalImages: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  margin: PropTypes.number,
  noMargin: PropTypes.bool,
}

const EmojiDefaultProps = {
  skin: 1,
  set: 'apple',
  native: false,
  forceSize: false,
  tooltip: false,
  emojiImageFn: (image) => image,
  onPress: () => {},
  onLongPress: () => {},
  useLocalImages: false,
  margin: 14,
  noMargin: false,
}

const PickerPropTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  onSelect: PropTypes.func,
  onPressClose: PropTypes.func,
  onSkinChange: PropTypes.func,
  perLine: PropTypes.number,
  rows: PropTypes.number,
  pagesToEagerLoad: PropTypes.number,
  emojiSize: PropTypes.number,
  emojiMargin: PropTypes.number,
  anchorSize: PropTypes.number,
  i18n: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.string,
  emoji: PropTypes.string,
  color: PropTypes.string,
  set: EmojiPropTypes.set,
  skin: EmojiPropTypes.skin,
  native: PropTypes.bool,
  emojiImageFn: EmojiPropTypes.emojiImageFn,
  emojisToShowFilter: PropTypes.func,
  useLocalImages: EmojiPropTypes.useLocalImages,
  showSkinTones: PropTypes.bool,
  showAnchors: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  emojiTooltip: EmojiPropTypes.tooltip,
  include: PropTypes.arrayOf(PropTypes.string),
  exclude: PropTypes.arrayOf(PropTypes.string),
  recent: PropTypes.arrayOf(PropTypes.string),
  autoFocus: PropTypes.bool,
  custom: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      short_names: PropTypes.arrayOf(PropTypes.string).isRequired,
      emoticons: PropTypes.arrayOf(PropTypes.string),
      keywords: PropTypes.arrayOf(PropTypes.string),
      imageUrl: requiredCustomPropsCheck,
      localImage: requiredCustomPropsCheck,
    }),
  ),
  categoryEmojis: PropTypes.objectOf(PropTypes.string),
  notFound: PropTypes.func,
  notFoundEmoji: PropTypes.string,
  skinEmoji: PropTypes.string,
}

const PickerDefaultProps = {
  onPress: () => {},
  onLongPress: () => {},
  onSelect: () => {},
  onPressClose: () => {},
  onSkinChange: () => {},
  emojiSize: 30,
  emojiMargin: EmojiDefaultProps.margin,
  anchorSize: 24,
  perLine: 7,
  rows: 3,
  pagesToEagerLoad: 2,
  i18n: {},
  style: {},
  title: 'Emoji Mart™ Native',
  emoji: 'department_store',
  color: '#ae65c5',
  set: EmojiDefaultProps.set,
  skin: null,
  defaultSkin: EmojiDefaultProps.skin,
  native: EmojiDefaultProps.native,
  emojiImageFn: EmojiDefaultProps.emojiImageFn,
  emojisToShowFilter: null,
  useLocalImages: EmojiDefaultProps.useLocalImages,
  showSkinTones: true,
  showAnchors: true,
  showCloseButton: false,
  emojiTooltip: EmojiDefaultProps.tooltip,
  autoFocus: false,
  custom: [],
  categoryEmojis: {},
  notFound: () => {},
  notFoundEmoji: 'sleuth_or_spy',
  skinEmoji: '',
}

export {
  EmojiPropTypes,
  EmojiDefaultProps,
  PickerPropTypes,
  PickerDefaultProps,
}
