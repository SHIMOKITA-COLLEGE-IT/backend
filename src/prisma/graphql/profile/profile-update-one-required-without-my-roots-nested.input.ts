import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMyRootsInput } from './profile-create-without-my-roots.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutMyRootsInput } from './profile-create-or-connect-without-my-roots.input';
import { ProfileUpsertWithoutMyRootsInput } from './profile-upsert-without-my-roots.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutMyRootsInput } from './profile-update-without-my-roots.input';

@InputType()
export class ProfileUpdateOneRequiredWithoutMyRootsNestedInput {

    @Field(() => ProfileCreateWithoutMyRootsInput, {nullable:true})
    @Type(() => ProfileCreateWithoutMyRootsInput)
    create?: ProfileCreateWithoutMyRootsInput;

    @Field(() => ProfileCreateOrConnectWithoutMyRootsInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutMyRootsInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutMyRootsInput;

    @Field(() => ProfileUpsertWithoutMyRootsInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutMyRootsInput)
    upsert?: ProfileUpsertWithoutMyRootsInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutMyRootsInput, {nullable:true})
    @Type(() => ProfileUpdateWithoutMyRootsInput)
    update?: ProfileUpdateWithoutMyRootsInput;
}
