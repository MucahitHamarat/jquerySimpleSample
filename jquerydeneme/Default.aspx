<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="jquerydeneme.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <p>Bu bir cümledir</p>
            <a href="#">Bu bir hepsiburada linkidir</a>
            <div class="div1" style="visibility:hidden ">Bu bir divdir</div>
            <input type="button" value="Gizle" onclick="hareket1()" class="b1"   />
            <input type="button" value="Göster" onclick="hareket2()" class="b2" onmouseover="goster()"/>
            <input type="button" value="Gizle+Göster" onclick="hareket3()" class="b3"/>
        </div>
    </form>  
    <script src="jquery.js"></script>
    <script src="main.js"></script>
</body>
</html>
