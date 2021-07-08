const regRequest = (url, params) =>
  new Promise((resolve, reject) => {
    uni.request({
      url,
      data: params,
      success: ({ data }) => resolve(data),
      fail: (res) => reject(res)
    });
  });

// 获取配置概要
export async function getProfile() {
  return regRequest('https://chao.fun/api/get_profile');
}

// 历史上的今天
export async function getHistoryToday(params) {
  return regRequest('https://v.juhe.cn/todayOnhistory/queryEvent.php', params);
}

// 用户登录
export async function login(params) {
  return regRequest('https://chao.fun/api/login', params);
}

// 注册新用户
export async function register(params) {
  return regRequest('https://chao.fun/api/register', params);
}

// 获取Tab菜单
export async function getTabMenus() {
  return regRequest('https://chao.fun/api/get_menu');
}

const indexapi = {
  getHome: 'https://chao.fun/api/v0/list_combine',
  getPosts: 'https://chao.fun/api/v0/list',
  getListForums: 'https://chao.fun/api/list_forums',
  getListPosts: 'https://chao.fun/api/v0/me/list_posts', // 我发布的
  upvotePost: 'https://chao.fun/api/upvote_post', // 点赞
  downvotePost: 'https://chao.fun/api/downvote_post', // 踩
  getPostInfo: 'https://chao.fun/api/get_post_info',
  listComments: 'https://chao.fun/api/v0/list_comments', // 评论列表
  addComments: 'https://chao.fun/api/comment', // 添加评论
  listTags: 'https://chao.fun/api/v0/forum_tag/list_tags', // 板块分类
  listForumsByTag: 'https://chao.fun/api/list_forums_by_tag',
  getForumInfo: 'https://chao.fun/api/get_forum_info', // 板块信息
  joinForum: 'https://chao.fun/api/join_forum', // 加入板块
  leaveForum: 'https://chao.fun/api/leave_forum', // 退出板块
  search: 'https://chao.fun/api/search', // 搜索
  listSaved: 'https://chao.fun/api/v0/me/list_saved', // 我收藏的
  listUpvotes: 'https://chao.fun/api/v0/me/list_upvotes', // 我点赞的
  searchForum: 'https://chao.fun/api/search_forum', // 板块搜索
  submitImage: 'https://chao.fun/api/submit_image', // 发布图片帖子
  submitArticle: 'https://chao.fun/api/v0/submit_article', // 发布文本帖子
  submitLink: 'https://chao.fun/api/submit_link', // 发布链接帖子
  deletePost: 'https://chao.fun/api/delete_post', // 删除帖子
  savePost: 'https://chao.fun/api/v0/save_post', // 收藏帖子
  getWxToken:
    'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa6d675a8c6b78145&secret=9d0e8ec4c69245507fbfe34d5a102dc3',
  wxMsgSecCheck: 'https://api.weixin.qq.com/wxa/msg_sec_check',
  wxMediaCheckAsync: 'https://api.weixin.qq.com/wxa/media_check_async',
  messageCheck: 'https://chao.fun/api/v0/message/check', //检测是否有新消息
  messageList: 'https://chao.fun/api/v0/message/list', // 消息列表
  setIcon: 'https://chao.fun/api/v0/user/set_Icon', // 设置头像
  userListPosts: 'https://chao.fun/api/v0/user/list_posts', // 获取用户发布的
  setDesc: 'https://chao.fun/api/v0/user/set_desc', // 设置个性签名
  userinfo: 'https://chao.fun/api/v0/user/info', // 获取用户信息
  toFocus: 'https://chao.fun/api/v0/focus/focus', // 关注用户
  toUnfocus: 'https://chao.fun/api/v0/focus/unfocus', // 取消关注
  getUserUpvotes: 'https://chao.fun/api/v0/user/list_upvotes', // 获取用户点赞的帖子
  listFocus: 'https://chao.fun/api/v0/focus/list_focus', // 用户关注的人
  listFans: 'https://chao.fun/api/v0/focus/list_fans', // 用户的粉丝
  listTrends: 'https://chao.fun/api/v0/focus/list_trends', //列出关注人的帖子
  getYear2020: 'https://chao.fun/api/v0/getYear2020', //年终总结

  toVote: 'https://chao.fun/api/v0/post/vote',
  toCircusee: 'https://chao.fun/api/v0/post/circusee',
  submitVote: 'https://chao.fun/api/v0/submit_vote'
};
