export const host = "http://localhost:5000";
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const userUpdateRoute = `${host}/api/auth/updateUserDetails`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
export const updateProfilePic = `${host}/api/auth/changeProfilePic`;
export const updatePasswordRoute = `${host}/api/auth/updatePassword`;

export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const getAllMessageRoute = `${host}/api/messages/getmsg`;
export const videoCall = `${host}/api/video/call`;
export const checkAlreadyApplied = `${host}/api/auth/applyJob`;

export const emailVerify = `${host}/api/auth/verify`;
export const sendVerification = `${host}/api/auth/sendVerification`;
export const reSendVerification = `${host}/api/auth/reSendVerification`;

export const addNewJob = `${host}/api/job/addJob`;
export const getCompanyJobs = `${host}/api/job/getCompanyJobs`;
export const getCompanyJobDetail = `${host}/api/job/getCompanyJobDetail`;
export const getAllJobs = `${host}/api/job/getAllJobs`;
export const getSectorJob = `${host}/api/job/getSectorJob`;
export const getJob = `${host}/api/job/getJob`;
export const applyForJob = `${host}/api/job/applyForJob`;
export const updateJobStatus = `${host}/api/job/updateJobStatus`;
export const getAppliedJobs = `${host}/api/job/appliedJobs`;
export const getSavedJobs = `${host}/api/job/savedJobs`;
export const editJob = `${host}/api/job/editJob`;

export const getCompanyData = `${host}/api/company/getCompanyData`;
export const getAllCompanies = `${host}/api/company/getCompanies`;
export const getSectorCompany = `${host}/api/company/getSectorCompany`;
export const getCompanyDetails = `${host}/api/company/getCompanyDetails`;
export const editCompanyDetails = `${host}/api/company/editCompany`;
export const changeLogo = `${host}/api/company/changeLogo`;

export const chatUserSearch = `${host}/api/auth/getAllUsers?`;
export const accessUserChat = `${host}/api/chat`;
export const group = `${host}/api/chat/groups`;
export const groupRename = `${host}/api/chat/rename`;
export const groupAdd = `${host}/api/chat/groupadd`;
export const groupRemove = `${host}/api/chat/groupremove`;
export const message = `${host}/api/message`;

export const getCategories = `${host}/api/category/getCategory`;

export const addEvent = `${host}/api/event/addEvent`;
export const getEvent = `${host}/api/event/getEvents`;
export const updateEvent = `${host}/api/event/updateEvent`;
export const deleteEvent = `${host}/api/event/deleteEvent`;

export const addTodo = `${host}/api/todo/addTodo`;
export const getTodo = `${host}/api/todo/getTodos`;
export const updateTodo = `${host}/api/todo/updateTodo`;
export const deleteTodo = `${host}/api/todo/deleteTodo`;
