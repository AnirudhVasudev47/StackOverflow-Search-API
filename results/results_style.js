import {StyleSheet} from "react-native";

const listStyles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignContent: 'stretch',
    // marginVertical: 50,
    borderColor: '#000',
    borderWidth: 0.5,
    borderEndWidth: 0,
    borderStartWidth: 0
  },
  listLeft: {
    backgroundColor: '#dedede',
    // height: 125,
    flex: 2,
    alignItems: 'flex-end',
    paddingRight: 5,
    paddingTop: 12,
    paddingBottom: 10
  },
  listRight: {
    backgroundColor: '#ffffff',
    // height: 125,
    flex: 7,
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 10
  },
  listTitle: {
    color: '#298fdc',
    fontWeight: 'bold',
    fontSize: 17
  },
  listTag: {
    backgroundColor: '#d1e5f1',
    color: '#298fdc',
    padding: 7,
    paddingVertical: 2,
    marginTop: 10,
    marginRight: 10
  },
  listTime: {
    marginTop: 15
  },
  timeStyle: {
    color: '#9a9a9a',
    fontSize: 13
  },
})

export default listStyles;