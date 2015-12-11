<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="resources/css/main.css" />
		<title>Login Page</title>
	</head>
	
	<body onload='document.loginForm.username.focus();'>
		<div  class="login-page-center">
			<h1>Bosnian Media Group - Admin</h1>
			<a href="/news/home">Home Page</a>
		</div>
		
		<div id="login-box">
			<h3>Login with Username and Password</h3>
			
			<c:if test="${not empty error}">
				<div class="login-error">${error}</div>
			</c:if>
			<c:if test="${not empty msg}">
				<div class="login-msg">${msg}</div>
			</c:if>
			
			<form name='loginForm'
				action="<c:url value='j_spring_security_check' />" method='POST'>
				<table>
					<tr>
						<td>User:</td>
						<td><input type='text' name='username' value=''></td>
					</tr>
					<tr>
						<td>Password:</td>
						<td><input type='password' name='password' /></td>
					</tr>
					<tr>
						<td colspan='2'><input name="submit" type="submit" value="submit" /></td>
					</tr>
				</table>
				<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
			</form>
			
		</div>
	</body>
</html>