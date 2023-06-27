<template>
    <div class="m-5">
        <div class="flex ml-5">
            <div class="avatar self-center">
                <div class="w-24 rounded-full inline">
                    <img
                        src="https://api.dicebear.com/6.x/identicon/svg?seed=Precious&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf" />
                </div>
            </div>
            <p class="text-3xl self-center font-bold inline pl-5">{{ $route.params.username }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5 m-5">
            <div class="card card-compact bg-secondary shadow-xl md:col-span-1">
                <div class="card-body">
                    <div class="divider my-1"></div>

                    <h1><font-awesome-icon class="fa-xl mr-2" icon="fa-solid fa-download" /> <span
                            class="text-lg font-bold">0</span>
                        downloads</h1>
                    <h1><font-awesome-icon class="fa-xl mr-2" icon="fa-solid fa-heart" /> <span
                            class="text-lg font-bold">0</span>
                        followers</h1>
                    <h1><font-awesome-icon class="fa-xl mr-2" icon="fa-solid fa-right-to-bracket" /> Joined 10 eons ago</h1>
                    <div class="divider my-1"></div>
                    <h1><font-awesome-icon class="fa-xl mr-2" icon="fa-solid fa-right-to-bracket" /> User ID: <span
                            class="badge">dj46sa9 <font-awesome-icon class="fa-sm ml-2"
                                icon="fa-solid fa-clipboard" /></span>
                    </h1>

                </div>
            </div>
            <div class="md:col-span-2">
                <div class="card card-compact bg-secondary shadow-xl w-full sns-card">
                    <div class="card-body">
                        <h1 class="card-title">Information</h1>
                        <div class="card bg-base-200 p-5">
                            <h1 class="card-title">Bio</h1>
                            <p>This is an epic bio.</p>
                        </div>

                    </div>
                </div>
                <div class="card card-compact bg-secondary shadow-xl w-full sns-card">
                    <div class="card-body">
                        <h1 class="card-title">Skins</h1>
                        <div class="overflow-x-auto">
                            <table class="table">
                                <!-- head -->
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>ID</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- row 1 -->
                                    <tr>
                                        <th>1</th>
                                        <td>My cool skin</td>
                                        <td>fds78a7v8vs98a8a7d8</td>
                                        <td>Private</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>