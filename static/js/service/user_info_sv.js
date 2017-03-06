angular.module("userInfo_sv",['tools'])
.service("UserInfo",function(Tools){
    var accountInfos;
    var voteHistorys;
    var messages;

    this.getPageContent = function(index){
        switch(Number(index)){
            case 0: 
                return accountInfos != null ? accountInfos : setAccountInfos();

            case 1:
                return voteHistorys != null ? voteHistorys : setVoteHistorys();

            case 2:
                return messages != null ? messages : setMessages();

        }
    }


    function setMessages(){
        messages = Tools.genMessages();
        return messages;
    }

    function  setAccountInfos(){
        accountInfos = null;
        return accountInfos;
    }

    function setVoteHistorys(){
        voteHistorys = null;
        return voteHistorys;
    }

})