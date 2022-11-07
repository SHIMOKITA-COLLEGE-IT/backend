import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutProfilesInput } from './photo-create-without-profiles.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutProfilesInput } from './photo-create-or-connect-without-profiles.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@InputType()
export class PhotoCreateNestedManyWithoutProfilesInput {

    @Field(() => [PhotoCreateWithoutProfilesInput], {nullable:true})
    @Type(() => PhotoCreateWithoutProfilesInput)
    create?: Array<PhotoCreateWithoutProfilesInput>;

    @Field(() => [PhotoCreateOrConnectWithoutProfilesInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutProfilesInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    connect?: Array<PhotoWhereUniqueInput>;
}
